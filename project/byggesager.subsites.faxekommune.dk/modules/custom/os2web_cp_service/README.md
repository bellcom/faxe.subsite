OS2Web Case Publishing service
==============================

Description
-----------
This module provides a service for OS2web that allows providers
to publish cases and documents directly from their back-end systems.
Additionally this module includes views, panels and settings to display
the cases and documents, and uses PathAuto to generate urls.

Configuration
-----------
Add more content to CP case/docs by adding the field with the name of the recieved input field tag.
Remember if the field type is different than taxonomy_term_reference it will be treated as text.

Todo
-----------
OS2web 1.0 migration
- Use os2web_taxonomies field as kle_ref instead of os2web_cp_service_kle_ref.
- Change dependency to os2web_taxonomies instead of old one.
- Use os2web_base date only date format

Dependencies
-----------
- ctools
- date
- date_popup
- date_views
- entityreference
- features
- list
- node
- number
- options
- os2web_esdh_provider
- page_manager
- panels
- pathauto
- strongarm
- text
- views
- views_content
- views_php

Installation
-----------
This module should reside in the modules directory of the installation,
most commonly profiles/os2web/modules/, but alternativly in sites/all/modules
(This could be for development purposes).

See https://github.com/syddjurs/os2web/wiki for further instructions.

This module can also be installed with drush make in your install profile.

Licence and copyright
---------------------
OS2Web is Copyright (c) 2012 Syddjurs Kommune, Denmark

OS2Web is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OS2Web is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Additional Info
---------------
This repository should be governed using Git Flow. for more information see
http://nvie.com/posts/a-successful-git-branching-model/

Note: This module is still dependant on modules in the full OS2Web suite
(https://github.com/OS2web/os2web), as the seperation of those are still WIP.
