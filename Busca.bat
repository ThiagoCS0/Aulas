@echo off
cd /d %~dp0
:i
cls
set /p bs=.:
dir /b /s | findstr /i %bs%
pause>nul
goto i
eit