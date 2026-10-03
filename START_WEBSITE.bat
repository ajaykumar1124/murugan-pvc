@echo off
echo.
echo ========================================
echo   Sri Murugan Website - Starting...
echo ========================================
echo.
echo Starting development server...
echo.
echo Your website will open automatically
echo in your default browser.
echo.
echo To STOP the server: Press Ctrl+C
echo.
echo ========================================
echo.

start http://localhost:5173

npm run dev

pause
