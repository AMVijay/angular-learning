## Objective
Here, exploring the solution options to integrate the Angular Application with Legacy Application running with JSP, PHP, or any other UI Page.

## Scenario 1 
**scenario description:** 
If existing application uses Spring MVC (JSPs) for UI, and requirement is to 
* Render complete angular application in UI and no need to render inside JSP.
* And There is no requirement to retain the existing application menu, header and navigation code then this approach works.    

**Solution**
* Controller method can return ModelAndView object with redirect as `return new ModelAndView("redirect:" + <angular application url>);`
* Controller method can return RedirectView object as 
```java
@RequestMapping("/<relative url>"
public RedirectView redirectToAngularApplication() {
	RedirectView redirectView = new RedirectView();
	redirectView.setUrl(<Angular Application HTTP URL>);
	return redirectView;
} 
```
* Can use Object `HttpServletResponse` from Controller Method argument and redirect to Angular Application as below
```java
public void redirectToAngularApplication(HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(<Angular Application HTTP URL>);
}
```

## Scenario 2
**scenario description:** 
If Existing application uses any tech stack (JSP or Spring MVC or PHP or Python), and the requirement is to 
* Retain the existing application menu, header and navigation code as it is in legacy application
* Render the Angular UI inside the existing application with all menus, headers.     

**Solution**
* Use JQuery's .load() function to render the angular application page content in JSP as below.
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
	crossorigin="anonymous"></script>
<script>
	$(document).ready(function() {
		$("#angularContent").load("/angular/index.html");
	});
</script>
</head>
<body>
	<div id="angularContent"></div>
</body>
```
In this approach, advantages are, Angular application will be rendered in client side.
* If angular application hosted/deployed separately, Can use JSTL tag `<c:import url="<angular application URL>"/>`.
* If angular application is package inside same war and deployed, then can use `<jsp:include page="</relative path of angular index.html>"/>`

## Scenario 3 
**Scenario Description** 
If the requirement is to render particular component (which is configured with Angular Routing) inside existing application page.  
**Solution** 
Using JQuery load the angular index page first inside div, and on success set the location has to the routing path.
```html
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
	crossorigin="anonymous"></script>
<script>
	$(document).ready(function() {
		$("#angularContent").load("/angular/index.html", function(){
			window.location.hash = "#/routing-path/" + <if any parameter need to be passed>;
		});
	});
</script>
</head>
<body>
	<div id="angularContent"></div>
</body>

```
