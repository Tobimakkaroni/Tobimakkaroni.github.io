@echo off
start mspaint.exe
timeout /t 2
echo hello world | clip
rem Simulate pasting in Paint
nircmd.exe sendkeypress ctrl v
