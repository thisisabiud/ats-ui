# ALUMNI TRACKING SYSTEM FRONTEND

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

---

> You can also clone this project from my github account `https://github.com/thisisabiud/ats-ui/`

## Installation

1. If you have docker installed on your system you can simply run `docker compose up` to this project folder to run this application. 
2. Otherwise you will have to install node in your machine and run `npm install --legacy-peer-deps` to this project folder to run this application. Since the following files are ignored to save space on **CD** and use small space on github and docker: 
- .vscode
- .idea
- node_modules
- .angular

---

## Note:
1. Run **api server** first
2. Make sure you change urls that calls **api endpoints** since now it cannot be reached by IP(http://45.79.31.232/ and http://45.79.31.232/admin for admin panel) that was previously used during demonstration.
3. Changes should be done  on service files in every module these service files will in this format ***nameoffile.service.ts*** every file end with .service.ts is a service file.
4. In those service files every `45.79.31.232` should be replaced by api url of our application. For instance `localhost:8000` or `127.0.0.1:8000` other part of url after `/` (**like /admin or /api/search**) should not be changed

> In following folders(modules) those service files(*extended with .service.ts*) to be changed reside:

- auth
- career
- dashboard
- events
- messages
- news
- profile
- reports
- scaffold


5. After doing those changes then you can start using the application by running development server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



