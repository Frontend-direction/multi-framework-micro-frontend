# Single-spa application

## Overview

An example of how to combine multiple frameworks in one application using single-spa.

This repo consists of 4 apps, host-app and 3 micro frontend apps.
- Host-app: root-config which used as an orchestrator to combine micro frontend apps.
- Header-app: represents a header on UI and it is written on Angular.
- Board-app: represents a grid of cards on UI and it is written on Vue.
- Chart-app: represents a few charts on UI and it is written on React.

## How It Works

This project uses [single-spa](https://single-spa.js.org/) to architect an application of a few micro frontend apps that for the end user are looks like as an ordinary web app. Generally, we have the next architecture: in the host-app all micro frontend apps are registered using importmap where we defined the path from where each app should be loaded (index.ejs). Then we defined a layout and place the application in a particular place under a particular route (microfrontend-layour.html).

## How To Start This Beast

Step 1: Open four terminals with each app inside;

Step 2: Install dependencies for each project:
```
npm install 
```

Step 3: Start each application:
```
Host-app: npm run start
Header-app (Angular): npm run serve:single-spa:header-app
Board-app (Vue): npm run serve
Chart-app (React): npm run start
```
Step 4: Navigate to [http://localhost:9000](http://localhost:9000);
