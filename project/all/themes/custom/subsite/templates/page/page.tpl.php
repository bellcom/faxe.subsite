<!-- Begin - wrapper -->
<div class="layout__wrapper">

    <!-- Begin - sidr source provider -->
    <aside class="sidr-source-provider">

        <!-- Begin - logo -->
        <a href="<?php print $front_page; ?>" class="logo">
            <img src="<?php print $theme_path; ?>/dist/images/logo__white.png"
                 alt="<?php print t('@site_name logo',
                   ['@site_name' => $site_name]); ?>" />
        </a>
        <!-- End - logo -->

        <!-- Begin - navigation -->
        <nav class="slinky-menu" role="navigation">
            <?php print render($menu_slinky__primary); ?>
        </nav>
        <!-- End - navigation -->

    </aside>
    <!-- End - sidr source provider -->

    <!-- Begin - header static -->
    <header class="flexy-header flexy-header--static">
        <div class="flexy-header__row flexy-header__row--first">
            <div class="container">
                <div class="flexy-row">

                    <!-- Begin - logo -->
                    <a href="<?php print $front_page; ?>" class="flexy-header__logo">
                        <img src="<?php print $logo; ?>"
                             alt="<?php print t('@site_name logo', array('@site_name' => $site_name)); ?>"/>
                    </a>
                    <!-- End - logo -->

                    <!-- Push navigation to the right -->
                    <div class="flexy-spacer"></div>

                    <!-- Begin - social icons -->
                    <nav class="flexy-header__social-icons hidden-xs hidden-sm" role="navigation">
                        <ul class="flexy-list">

                          <?php if ($theme_settings['social_links']['facebook']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['facebook']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--facebook"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['facebook']['tooltip']; ?>">
                                      <span class="icon fa fa-facebook-f"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['twitter']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['twitter']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--twitter"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['twitter']['tooltip']; ?>">
                                      <span class="icon fa fa-twitter"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['googleplus']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['googleplus']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--google-plus"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['googleplus']['tooltip']; ?>">
                                      <span class="icon fa fa-google-plus"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['linkedin']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['linkedin']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--linkedin"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['linkedin']['tooltip']; ?>">
                                      <span class="icon fa fa-linkedin"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['pinterest']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['pinterest']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--pinterest"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['pinterest']['tooltip']; ?>">
                                      <span class="icon fa fa-pinterest"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['instagram']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['instagram']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--instagram"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['instagram']['tooltip']; ?>">
                                      <span class="icon fa fa-instagram"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['youtube']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['youtube']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--youtube"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['youtube']['tooltip']; ?>">
                                      <span class="icon fa fa-youtube"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                          <?php if ($theme_settings['social_links']['vimeo']['active']): ?>
                              <li>
                                  <a href="<?php print $theme_settings['social_links']['vimeo']['url']; ?>"
                                     target="_blank"
                                     class="social-icon social-icon--vimeo"
                                     data-toggle="tooltip" data-placement="top"
                                     title="<?php print $theme_settings['social_links']['vimeo']['tooltip']; ?>">
                                      <span class="icon fa fa-vimeo"></span>
                                  </a>
                              </li>
                          <?php endif; ?>

                        </ul>
                    </nav>
                    <!-- End - social icons -->

                    <!-- Begin - navigation -->
                    <nav class="flexy-header__secondary-navigation hidden-xs hidden-sm" role="navigation">
                        <?php print render($menu_header__row_first__secondary); ?>
                    </nav>
                    <!-- End - navigation -->

                    <!-- Begin - search -->
                    <div class="flexy-header__form hidden-xs hidden-sm">
                        <div class="form-inline">
                            <?php if (!empty($page['search'])): ?>
                                <?php print render($page['search']); ?>
                            <?php elseif(isset($search_box)) : ?>
                                <?php print $search_box; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <!-- End - search -->

                    <!-- Begin - responsive toggle -->
                    <button class="flexy-header__sidebar-toggle sidr-toggle--right visible-xs visible-sm">
                        <span class="icon fa fa-bars"></span>
                    </button>
                    <!-- End - responsive toggle -->

                </div>
            </div>
        </div>
        <div class="flexy-header__row flexy-header__row--second hidden-xs hidden-sm">
            <div class="container">

                <!-- Begin - navigation -->
                <nav class="flexy-header__navigation__wrapper flexy-header__navigation__wrapper--full-width" role="navigation">
                    <?php print render($flexy_navigation__primary); ?>
                </nav>
                <!-- End - navigation -->

            </div>
        </div>
    </header>
    <!-- End - header static -->

    <!-- Begin - header sticky -->
    <header class="flexy-header flexy-header--sticky">
        <div class="flexy-header__row">
            <div class="container">
                <div class="flexy-row">

                    <!-- Begin - logo -->
                    <a href="<?php print $front_page; ?>" class="flexy-header__logo">
                        <img src="<?php print $logo; ?>"
                             alt="<?php print t('@site_name logo', array('@site_name' => $site_name)); ?>"/>
                    </a>
                    <!-- End - logo -->

                    <!-- Push navigation to the right -->
                    <div class="flexy-spacer"></div>

                    <!-- Begin - navigation -->
                    <nav class="flexy-header__navigation__wrapper hidden-xs hidden-sm" role="navigation">
                        <?php print render($flexy_navigation__primary); ?>
                    </nav>
                    <!-- End - navigation -->

                    <!-- Begin - responsive toggle -->
                    <button class="flexy-header__sidebar-toggle sidr-toggle--right visible-xs visible-sm">
                        <span class="icon fa fa-bars"></span>
                    </button>
                    <!-- End - responsive toggle -->

                </div>
            </div>
        </div>
    </header>
    <!-- End - header sticky -->

    <!-- Begin - content -->
    <main class="layout__content" role="main">
        <div class="container">

            <?php if (!empty($page['help'])): ?>
                <?php print render($page['help']); ?>
            <?php endif; ?>

            <?php if (!empty($action_links)): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
            <?php endif; ?>

            <?php if (!empty($messages)): ?>
                <!-- Begin - messages -->
                <?php print $messages; ?>
                <!-- End - messages -->
            <?php endif; ?>

            <?php if (!empty($tabs_primary)): ?>
                <!-- Begin - tabs primary -->
                <?php print render($tabs_primary); ?>
                <!-- End - tabs primary -->
            <?php endif; ?>

            <?php if (!empty($tabs_secondary)): ?>
                <!-- Begin - tabs secondary -->
                <?php print render($tabs_secondary); ?>
                <!-- End - tabs secondary -->
            <?php endif; ?>

        </div>

        <a id="main-content"></a>

        <?php if (!panels_get_current_page_display()): ?>
            <div class="container">
                <?php print $breadcrumb; ?>

                <?php print render($page['content']); ?>
            </div>
        <?php else: ?>
            <?php print render($page['content']); ?>
        <?php endif; ?>

    </main>
    <!-- End - content -->

    <!-- Begin - sitemap -->
    <div class="sectioned sectioned--sitemap sectioned--large-inner-spacing">
        <div class="sectioned__inner">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-3">
                        <div class="sectioned--sitemap__logo">
                            <a href="<?php print $front_page; ?>">
                                <img src="<?php print $theme_path; ?>/dist/images/logo__white.png"
                                     alt="<?php print t('@site_name logo',
                                       ['@site_name' => $site_name]); ?>" />
                            </a>
                        </div>

                        <?php if (!empty($theme_settings['layout']['footer']['description'])) : ?>
                            <!-- Begin - description -->
                            <div class="sectioned--sitemap__description">
                                <h3 class="heading-h4"><?php print $theme_settings['layout']['footer']['description']; ?></h3>
                            </div>
                            <!-- End - description -->
                        <?php endif; ?>

                    </div>
                    <div class="col-xs-12 col-sm-9">
                        <?php if (!empty($menu_footer__primary)): ?>
                            <?php print render($menu_footer__primary); ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End - sitemap -->

    <!-- Begin - footer -->
    <footer class="layout__footer">
        <div class="layout__footer--inner">
            <div class="container">

                <div class="flexy-list flexy-list--centered">

                    <?php if (!empty($theme_settings['contact_information']['address'])) : ?>
                        <div>
                            <?php print $theme_settings['contact_information'][ 'address']; ?>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($theme_settings['contact_information']['zipcode']) && !empty($theme_settings['contact_information']['city'])) : ?>
                        <div>
                            <?php print $theme_settings['contact_information']['zipcode']; ?> <?php print $theme_settings['contact_information']['city']; ?>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($theme_settings['contact_information']['phone_system']) && !empty($theme_settings['contact_information']['phone_readable'])) : ?>
                        <div>
                          <?php print '<a href="tel:' . $theme_settings['contact_information']['phone_system'] . '">' . $theme_settings['contact_information']['phone_readable'] . '</a>'; ?>
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($theme_settings['contact_information']['email'])) : ?>
                        <div>
                          <?php print '<a href="mailto:' . $theme_settings['contact_information']['email'] . '">' . $theme_settings['contact_information']['email'] . '</a>'; ?>
                        </div>
                    <?php endif; ?>

                </div>

            </div>
        </div>
    </footer>
    <!-- End - footer -->

</div>
<!-- End - wrapper -->
