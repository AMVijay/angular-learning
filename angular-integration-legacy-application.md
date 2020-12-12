## Objective
Here, exploring the solution options to integrated (embed or redirect) the angular application inside legacy application. 

## Solution Option 1 
* If existing application uses Spring MVC (JSPs) for UI, and the requirement is render complete angular application in UI (No JSP fragments), and If there is no requirement to retain the existing application menu, header and navigation code then this approach works.
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

## Solution Option 2
If the requirement is to retain the existing application menu, header and navigation code in legacy spring mvc application, then below implementation options will help to render the angular application page inside JSP.
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

## Solution Option 3 
If the requirement is embed or render specific Angular Components in different JSPs, then this approach will help to achieve the requirement. 
* As stated in solution option 2, first need to load the angular application. Then after, need to load routing URL. 
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

