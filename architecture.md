## Introduction
Angular is a UI framework to create web application using typescript language. 

## Internal Architecture
Angular architecture composed of below items 
* @NgModule
* @Component
* Dependency Injection - Service Class

![](https://amvijay.com/images/20201120-angular-architecture.jpg)

* Angular Architecture designed to be more modular which helps to develop One Web application UI with multiple modules (a functionality), and each module with one or more components.

### @NgModule
`@NgModule` is meta data specification class about the module composition of Components, Other Modules, Service Providers. Each Angular  application need to have one or more `@NgModule`. If application workspace is created using `@angular\cli` then, app.module.ts is the first and root module for that application. It can be renamed to anything else.

### @Component
`@Component` is a class incldues HTML , styles and name of the components and its implementation like data fetch, variable declarations and initialiation with logic. It uses dependency injection to load service class.

### Dependency Injection
Dependency Injection design pattern is used in Angular to inject the Service Class while Component class is initiated. There is no other special Annotation needed to mark a class as Service Class.

## Structure Architecture
Angular uses node/npm for its project external library dependencies, build. 
Important file in that are : 
### package.json
* This configuration file contains specification about angular version, project library dependency details with version.

### tsconfig.json
* This configuration file describes about typescript compilation path, folder structure.

## Angular Specific Syntax for HTML
* `{{<variable name from the associated angular component>}}` - This one used to replace the string content in HTML from angular variable. 
* `(<method name from the associated angular component>)` - This one to bridge the event to angular component function call. 
* `[<variable name from the associated angular component>]` - This one is for one way binding. 
* `[(<variable name from the associated angular component>)]` - This one is for two way binding. 
* `[ngClass]` - This is to assign CSS class dynamically from angular component variable.
* `[ngStyle]` - This is to assign CSS Style dynamically from angular component variable.
* `[(ngModel)]` - Two binding the value of component to form/model class in angular component. We need to import @angular/forms to use this attribute.
* `*ngIf` - This conditional statement helps to determine whether HTML element need to be rendered or not.
* `*ngFor` - This conditional statement helps to create group of same type HTML elements in loop with dynamic fields.
