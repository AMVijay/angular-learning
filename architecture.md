## Introduction
Angular is a UI framework to create web application using typescript language. 

## Architecture
Angular architecture composed of below items 
* @NgModule
* @Component
* Dependency Injection - Service Class

![](https://amvijay.com/images/20201120-angular-architecture.jpg)

## @NgModule
`@NgModule` is meta data specification class about the module composition of Components, Other Modules, Service Providers. Each Angular  application need to have one or more `@NgModule`. If application workspace is created using `@angular\cli` then, app.module.ts is the first and root module for that application. It can be renamed to anything else.

## @NgComponent
`@Component` is a class incldues HTML , styles and name of the components and its implementation like data fetch, variable declarations and initialiation with logic. It uses dependency injection to load service class.

## Dependency Injection
Dependency Injection design pattern is used in Angular to inject the Service Class while Component class is initiated. There is no other special Annotation needed to mark a class as Service Class.

