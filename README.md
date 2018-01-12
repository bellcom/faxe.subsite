# OS2sub - Subsites ondemand

## scripts setup
* pwgen package need to be installed
* /root/.my.cnf should be setup with the root password for mysql
* /usr/local/sbin/mysql-backup.sh is needed if you want backups before removing a subsite
* the using running the webserver need to be able to call the scripts with sudo right, create the rules in /etc/sudoers.d/subsites-www-data
* The scripts should only be writeable by root
* copy config.sh_SKEL to config.sh and change settings
* add .admin_password.txt

## main site setup
* install standard drupal in the /default folder
* drush en bc_subsites
* drush vset bc_subsites_script_dir /var/www/<site>/scripts
* drush vset bc_subsites_domain_suffix .subsites.xxxx.dk
