#!/bin/bash

pwd
URL=http://127.0.0.1:6806
COOKIE=$(cat cookie.txt)
TOKEN=$(cat token.txt)
IS_SERVE=true VITE_SIYUAN_API_URL=$URL VITE_SIYUAN_AUTH_TOKEN=$TOKEN VITE_SIYUAN_COOKIE=$COOKIE vite