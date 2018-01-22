api = 2
core = 7.x

; Hack to manually add drupal translations to profile as this is not supported by drush_make
projects[da][type] = "translation"
projects[da][download][type] = "get"
projects[da][download][url] = "http://ftp.drupal.org/files/translations/7.x/drupal/drupal-7.22.da.po"
projects[da][download][filename] = "da.po"
projects[da][directory_name] = "translations"

;; OS2Web projects:

; OS2Web Modules

projects[os2web_taxonomies][type] = "module"
projects[os2web_taxonomies][download][type] = "git"
;projects[os2web_taxonomies][download][tag] = "1.10"
projects[os2web_taxonomies][download][branch] = "master"
projects[os2web_taxonomies][download][url] = "https://github.com/OS2web/os2web_taxonomies.git"

projects[os2web_esdh_field][type] = "module"
projects[os2web_esdh_field][download][type] = "git"
projects[os2web_esdh_field][download][branch] = "master"
projects[os2web_esdh_field][download][url] = "https://github.com/OS2web/os2web_esdh_field.git"

;; Contrib modules below:

; Libraries

libraries[jcycle][download][type] = "get"
libraries[jcycle][download][url] = "http://malsup.github.com/jquery.cycle.all.js"
libraries[jcycle][directory_name] = "jquery.cycle"
libraries[jcycle][destination] = "libraries"

libraries[tinymce][download][type] = "get"
libraries[tinymce][download][url] = "http://cloud.github.com/downloads/tinymce/tinymce/tinymce_3.5b3.zip"
libraries[tinymce][directory_name] = "tinymce"
libraries[tinymce][destination] = "libraries"

libraries[htmlpurifier][download][type] = "get"
libraries[htmlpurifier][download][url] = "http://htmlpurifier.org/releases/htmlpurifier-4.5.0.tar.gz"
libraries[htmlpurifier][directory_name] = "htmlpurifier"
libraries[htmlpurifier][destination] = "libraries"

libraries[plupload][download][type] = "get"
libraries[plupload][download][url] = "https://github.com/downloads/moxiecode/plupload/plupload_1_5_2.zip"
libraries[plupload][directory_name] = "plupload"
libraries[plupload][destination] = "libraries"

libraries[ckeditor][download][type]= "get"
libraries[ckeditor][download][url] = "http://download.cksource.com/CKEditor/CKEditor/CKEditor%204.1.1/ckeditor_4.1.1_full.zip"
libraries[ckeditor][directory_name] = "ckeditor"
libraries[ckeditor][destination] = "libraries"

libraries[jcarousel][download][type] = "get"
libraries[jcarousel][download][url] = "https://github.com/jsor/jcarousel/archive/0.2.9.zip"
libraries[jcarousel][directory_name] = "jquery.jcarousel"
libraries[jcarousel][destination] = "libraries"

libraries[jcycle][download][type] = "get"
libraries[jcycle][download][url] = "http://malsup.github.com/jquery.cycle.all.js"
libraries[jcycle][directory_name] = "jquery.cycle"
libraries[jcycle][destination] = "libraries"

libraries[jquery_ui][download][type] = "get"
libraries[jquery_ui][download][url] = "http://jquery-ui.googlecode.com/files/jquery-ui-1.7.3.zip"
libraries[jquery_ui][directory_name] = "jquery.ui"
libraries[jquery_ui][destination] = "modules/contrib/jquery_ui"

; Contrib modules

; Features + related
projects[features][subdir] = "contrib"
projects[features][version] = "2.0-beta2"

projects[strongarm][subdir] = "contrib"
projects[strongarm][version] = "2.0"

; Panels

projects[panels][subdir] = "contrib"
projects[panels][version] = "3.2"

; Basic

# projects[ctools][subdir] = "contrib"
# projects[ctools][version] = "1.3"

projects[media][subdir] = "contrib"
projects[media][version] = "2.0-unstable7"
projects[media][patch][] = "http://drupal.org/files/media-media_browser-preview_javascript_incompatibility-1743040.patch"

projects[date][subdir] = "contrib"
projects[date][version] = "2.6"

projects[eim][subdir] = "contrib"
projects[eim][version] = "1.3"

projects[imagefield_crop][subdir] = "contrib"
projects[imagefield_crop][version] = "1.1"
projects[imagefield_crop][patch][] = "http://drupal.org/files/imagefield_crop-undefined_index_und-1913412-9.patch"

projects[field_slideshow][subdir] = "contrib"
projects[field_slideshow][version] = "1.82"

projects[field_group][subdir] = "contrib"
projects[field_group][version] = "1.1"
; Patch to remove notices in badly stored features. TODO: add issue on d.o
; projects[field_group][patch][] = "patches/field_group-1.patch"

projects[fieldable_panels_panes][subdir] = "contrib"
projects[fieldable_panels_panes][version] = "1.4"

projects[libraries][subdir] = "contrib"
projects[libraries][version] = "2.1"

projects[link][subdir] = "contrib"
projects[link][version] = "1.1"

projects[content_taxonomy][subdir] = "contrib"
projects[content_taxonomy][version] = "1.0-beta2"

projects[references][subdir] = "contrib"
projects[references][version] = "2.0"

projects[workbench][subdir] = "contrib"
projects[workbench][version] = "1.2"

projects[workbench_access][subdir] = "contrib"
projects[workbench_access][version] = "1.2"

projects[workbench_media][subdir] = "contrib"
projects[workbench_media][version] = "1.1"

projects[file_entity][subdir] = "contrib"
projects[file_entity][version] = "2.0-unstable7"
; projects[file_entity][patch][] = "http://drupal.org/files/1553094-alt_and_title_support_for_images-175.patch"

projects[ckeditor][subdir] = "contrib"
projects[ckeditor][version] = "1.13"

projects[l10n_update][subdir] = "contrib"
projects[l10n_update][version] = "1.0-beta3"
