api = 2
core = 7.x

;; OS2Web projects:

; OS2Web Modules

projects[os2web_base][type] = "module"
projects[os2web_base][download][type] = "git"
projects[os2web_base][download][branch] = "develop"
projects[os2web_base][download][url] = "https://github.com/OS2web/os2web_base.git"

;; Contrib modules below:

; Libraries

; Contrib modules

; Features + related
projects[features][subdir] = "contrib"
projects[features][version] = "2.0"

projects[strongarm][subdir] = "contrib"
projects[strongarm][version] = "2.0"

; Panels

; Basic
projects[ctools][subdir] = "contrib"
projects[ctools][version] = "1.3"

projects[field_group][version] = "1.3"
projects[field_group][subdir] = "contrib"

projects[file_entity][version] = "2.0-alpha3"
projects[file_entity][subdir] = "contrib"

projects[media][subdir] = "contrib"
projects[media][version] = "2.0-alpha2"

libraries[json2][download][type] = "get"
libraries[json2][download][url] = "http://github.com/douglascrockford/JSON-js/archive/master.zip"
libraries[json2][directory_name] = "json2"
libraries[json2][destination] = "libraries"
