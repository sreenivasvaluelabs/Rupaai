Test line

//Dependencies software’s & Versions to setup Front End Environment. 

Prerequisites Software’s
Visual Studio Code : https://code.visualstudio.com/
Nodejs - v9.2.0: https://nodejs.org/download/release/v9.2.0/node-v9.2.0-x64.msi
Git: https://git-scm.com/download/win

After Installation above software’s
Check the version you are using, run node -v and npm -v in a terminal/command window.

Step : 1 
Login with TFS on Visual Studio
Download the latest Code from Prototype Branch.

Step : 2
    Open Command prompt/terminal
    Goto to root path of prototype which is directory gulpfile.js present.
    Run npm install -g bower - Install Bower ( Bower requires node, npm and git)

Step : 3
    Run npm install --global gulp-cli

Step : 4
    Run npm install - Install node modules which is configured in package.json

Step : 5
    Run gulp - To execute the prototype

Notes : JavaScript
Whenever Create or Delete any JavaScript files have to update in config.json file.
Only Front end related JavaScript functions are included.

Installing New node Modules
    While installing new node modules use below command to save in devDependencies package.json
    npm install package-name --save --only=dev

smart-app-banner.js modified to display banner in prototype.