<?php

/**
 * @file
 * Field encryption cache classes.
 */

/**
 * Class FieldEncyptCacheTrait.
 */
trait FieldEncyptCacheTrait {

  /**
   * Encrypts the data for the Cache backend.
   *
   * @param mixed $data
   *   Decrypted data.
   *
   * @return string
   *   Encrypted data string.
   */
  private function encrypt($data) {
    if (!is_string($data)) {
      $data = serialize($data);
    }

    // Encrypt the data just before it's saved.
    module_load_include('inc', 'field_encrypt');
    return field_encrypt_encrypt($data);
  }

  /**
   * Decrypts the data from the Cache backend.
   *
   * @param string $data
   *   Encrypted data string.
   *
   * @return mixed|string
   *   Decrypted data.
   */
  private function decrypt($data) {
    module_load_include('inc', 'field_encrypt');
    return field_encrypt_decrypt($data);
  }

}

/**
 * Class FieldEncryptDatabaseCache.
 */
class FieldEncryptDatabaseCache extends DrupalDatabaseCache {

  use FieldEncyptCacheTrait;

  /**
   * Prepare a cached item.
   *
   * Checks that items are either permanent or did not expire, and unserializes
   * data as appropriate.
   *
   * @param object $cache
   *   An item loaded from cache_get() or cache_get_multiple().
   *
   * @return object
   *   The item with data unserialized as appropriate or FALSE if there is no
   *   valid item to load.
   */
  protected function prepareItem($cache) {
    global $user;
    if (!isset($cache->data)) {
      return FALSE;
    }
    // If enforcing a minimum cache lifetime, validate that the data is
    // currently valid for this user before we return it by making sure the
    // cache entry was created before the timestamp in the current session's
    // cache timer. The cache variable is loaded into the $user object by
    // _drupal_session_read() in session.inc. If the data is permanent or we're
    // not enforcing a minimum cache lifetime always return the cached data.
    if ($cache->expire != CACHE_PERMANENT && variable_get('cache_lifetime', 0) && $user->cache > $cache->created) {
      // This cache data is too old and thus not valid for us, ignore it.
      return FALSE;
    }

    try {
      $cache->data = $this->decrypt($cache->data);
    }
    catch (Exception $e) {
      watchdog_exception('field_encrypt', $e);
      return FALSE;
    }
    if ($cache->serialized) {
      $cache->data = unserialize($cache->data);
    }

    return $cache;
  }

  /**
   * {@inheritdoc}
   */
  public function set($cid, $data, $expire = CACHE_PERMANENT) {
    try {
      $encrypted_data = $this->encrypt($data);
    }
    catch (Exception $e) {
      watchdog_exception('field_encrypt', $e);
      return;
    }
    $fields = array(
      'serialized' => !is_string($data),
      'created'    => REQUEST_TIME,
      'expire'     => $expire,
      'data'       => $encrypted_data,
    );

    try {
      db_merge($this->bin)->key(array('cid' => $cid))->fields($fields)
        ->execute();
    }
    catch (Exception $e) {
      // The database may not be available, so we'll ignore cache_set requests.
    }
  }

}

if (class_exists('MemCacheDrupal')) {
  /**
   * Class FieldEncryptMemCacheDrupal.
   */
  class FieldEncryptMemCacheDrupal extends MemCacheDrupal {

    use FieldEncyptCacheTrait;

    /**
     * {@inheritdoc}
     */
    public function get($cid) {
      if ($cache = parent::get($cid)) {
        try {
          $cache->data = $this->decrypt($cache->data);
        }
        catch (Exception $e) {
          watchdog_exception('field_encrypt', $e);
          return FALSE;
        }
        $cache->data = unserialize($cache->data);
        return $cache;
      }
      return FALSE;
    }

    /**
     * {@inheritdoc}
     */
    public function getMultiple(&$cids) {
      $results = parent::getMultiple($cids);

      foreach ($results as $cid => $result) {
        try {
          $result->data = $this->decrypt($result->data);
        }
        catch (Exception $e) {
          watchdog_exception('field_encrypt', $e);
          unset($results[$cid]);
          continue;
        }
        $result->data = unserialize($result->data);
      }

      return $results;
    }

    /**
     * {@inheritdoc}
     */
    public function set($cid, $data, $expire = CACHE_PERMANENT) {
      try {
        $encrypted_data = $this->encrypt($data);
      }
      catch (Exception $e) {
        watchdog_exception('field_encrypt', $e);
        return;
      }

      parent::set($cid, $encrypted_data, $expire);
    }

  }
}
