#!/bin/bash

node updateLinks.js;
react-scripts build;
echo '/* /index.html 200' | cat >build/_redirects;