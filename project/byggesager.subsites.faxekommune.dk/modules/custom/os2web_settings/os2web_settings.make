api = 2
core = 7.x

;; OS2Web projects:

; OS2Web Modules

;; Contrib modules below:

; Libraries

libraries[dompdf][download][type] = "git"
libraries[dompdf][download][url] = "https://github.com/dompdf/dompdf.git"
libraries[dompdf][download][revision] = "master"
libraries[dompdf][destination] = "modules/contrib/print"

; Contrib modules

; Features + related
projects[features][subdir] = "contrib"
projects[features][version] = "2.0-beta2"

projects[strongarm][subdir] = "contrib"
projects[strongarm][version] = "2.0"

; Panels

; Basic
projects[better_formats][subdir] = "contrib"
projects[better_formats][version] = "1.x-dev"

# projects[ctools][subdir] = "contrib"
# projects[ctools][version] = "1.3"

projects[customfilter][subdir] = "contrib"
projects[customfilter][version] = "1.0"
; Patch to fix undeclare var. http://drupal.org/node/1034556
projects[customfilter][patch][] = "http://drupal.org/files/customfilter-1034556.patch"

projects[pathauto][subdir] = "contrib"
projects[pathauto][version] = "1.2"

projects[print][subdir] = "contrib"
projects[print][version] = "1.2"

projects[token][subdir] = "contrib"
projects[token][version] = "1.5"

projects[rules][subdir] = "contrib"
projects[rules][version] = "2.2"
