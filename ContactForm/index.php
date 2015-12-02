<?php
// Remove the directory path we don't want
$request = str_replace("/frontend-test/ContactForm/", "", $_SERVER['REQUEST_URI']);

// Split the path by '/'
$params = explode("/", $request);
print_r($params);

$lang = null;

if (!empty($params)) {
	
}
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Contact Form</title>
		
		<meta charset="UTF-8">
		
		<meta name="author" content="Jean Paul Ruiz">
		
		<meta name="description" content="This is an example of a contact form">
		
		<meta name="keywords" content="contact form, contact">
		
		<meta name="robots" content="index, follow">
		
		<meta name="revisit-after" content="7 days">
		
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
		
		<link rel="stylesheet" type="text/css" href="css/index.css">
		
		<script type="text/javascript" src="components/jquery/dist/jquery.min.js"></script>
		
		<link rel="stylesheet" type="text/css" href="components/toastr/toastr.min.css">
		
		<script type="text/javascript" src="components/toastr/toastr.min.js"></script>
		
		<script type="text/javascript" src="components/i18next/i18next.min.js"></script>
		
		<script type="text/javascript" src="js/index.js"></script>
		
		<script type="text/javascript">
			/**
			 * When all the website resources (Images, scripts) have been loaded.
			 */
			$(window).load(
				function() {
					app.initialize();
				}
			);
		</script>
	</head>
	
	<body>
		<div id="wrapper">
			<div id="form-container">
				<div class="full-size-row">
					<label data-i18n="contact-form.contacts"></label>
				</div>
				
				<div class="full-size-row">
					
				</div>
				
				<div class="full-size-row">
					<label data-i18n="contact-form.subject"></label>
				</div>
				
				<div class="full-size-row">
					<input id="" type="text" />
				</div>
				
				<div class="full-size-row">
					<label data-i18n="contact-form.message"></label>
				</div>
				
				<div class="full-size-row">
					
				</div>
				
				<div class="full-size-row">
					
				</div>
			</div>
		</div>
	</body>
</html>