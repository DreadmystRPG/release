FOR /F "tokens=* delims=" %%A in ('dir /b /s *.zip') do (7z\\7z.exe l -r "%%A" >> result.txt)