#!/bin/sh
# The purpose of this file is initialization process which will help developers
# with setup of local/remote environment.

DIR=$(pwd)
git clone --recursive git@github.com:bellcom/faxe.subsite.git
cd faxe.subsite/public_html
ln -s ../project sites
cd -
mkdir faxe.subsite/private
mkdir faxe.subsite/tmp
