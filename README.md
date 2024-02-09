# AngularDemo

##Important Note
If the backend APIs are running on a different URL than the default, you can easily update the API URLs in the Angular application. 
Navigate to the environment.ts file located in the src/environments directory. 
In this file, you'll find the configuration for different environments, including the API URLs. 
Simply update the apiUrl property with the appropriate URL of your backend APIs.

// src/environment.ts

export const environment = {
  production: false,
  apiUrl: 'http://your-backend-api-url.com/api' // Update this URL
};

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
