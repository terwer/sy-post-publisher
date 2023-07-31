@echo off

set URL=http://127.0.0.1:6806
set /p COOKIE=<cookie.txt
set /p TOKEN=<token.txt
set IS_SERVE=true
set VITE_SIYUAN_API_URL=%URL%
set VITE_SIYUAN_AUTH_TOKEN=%TOKEN%
set VITE_SIYUAN_COOKIE=%COOKIE%

vite