<?php
// Remove the directory path we don't want
$request = str_replace("/frontend-test/ContactForm/", "", $_SERVER['REQUEST_URI']);

// Split the path by '/'
$params = explode("/", $request);

$lang = "";

if (!empty($params)) {
	if (sizeof($params) >= 1) {
		$lang = $params[0];
	}
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

		<script type="text/javascript" src="components/jqueryui/jquery-ui.min.js"></script>

		<link rel="stylesheet" type="text/css" href="components/jqueryui/themes/start/jquery-ui.min.css">

		<link rel="stylesheet" type="text/css" href="components/fontawesome/css/font-awesome.min.css">

		<script type="text/javascript" src="components/toastr/toastr.min.js"></script>

		<link rel="stylesheet" type="text/css" href="components/toastr/toastr.min.css">

		<script type="text/javascript" src="components/i18next/i18next.min.js"></script>

		<link href="assets/components/bootstrap-tokenizer/bootstrap.css" rel="stylesheet">

		<link href="assets/components/bootstrap-tokenizer/bootstrap-responsive.css" rel="stylesheet">

		<link href="assets/components/bootstrap-tokenizer/bootstrap-tokenizer.css" rel="stylesheet">

		<script type="text/javascript" src="assets/components/bootstrap-tokenizer/bootstrap-tokenizer.js"></script>

		<link href="components/iCheck/skins/minimal/red.css" rel="stylesheet">

		<script type="text/javascript" src="components/iCheck/icheck.min.js"></script>

		<script type="text/javascript" src="js/index.js"></script>

		<script type="text/javascript">
			/**
			 * When all the website resources (Images, scripts) have been loaded.
			 */
			$(window).load(
				function() {
					var chosenLang = "<?php echo($lang); ?>";

					app.initialize(chosenLang);

					$("#email-tokenizer").tokenizer();

					$('input').iCheck({
						checkboxClass: 'icheckbox_minimal-green',
						radioClass: 'iradio_minimal-green',
						increaseArea: '20%' // optional
					});
				}
			);
		</script>
	</head>

	<body>
		<div id="wrapper">
			<div id="top-bar">
				<ul class="langs">
					<li class="langs-item">
						<a class="langs-link" href="/frontend-test/ContactForm/en" id="go-to-en-page" target="_self" data-i18n="[title]contact-form.english-website;contact-form.english-website"></a>
					</li>

					<li class="langs-item">
						<a class="langs-link" href="/frontend-test/ContactForm/es" id="go-to-es-page" target="_self" data-i18n="[title]contact-form.spanish-website;contact-form.spanish-website"></a>
					</li>
				</ul>
			</div>

			<div id="form-container">
				<div class="full-size-row">
					<label data-i18n="contact-form.contacts"></label>
				</div>
				
				<div class="full-size-row">
					<div class="tags-holder">
						<div class="email-tags">
							<input id="email-tokenizer" type="text">
						</div>

						<i class="add-another fa fa-plus-square" id="add-another"></i>
					</div>
				</div>
				
				<div class="full-size-row">
					<label data-i18n="contact-form.subject"></label>
				</div>
				
				<div class="full-size-row">
					<input data-i18n="[placeholder]contact-form.add-subject" id="subject" type="text" />
				</div>
				
				<div class="full-size-row">
					<label data-i18n="contact-form.message"></label>
				</div>
				
				<div class="full-size-row">
					<textarea data-i18n="[placeholder]contact-form.leave-message" id="message"></textarea>
				</div>
				
				<div class="bottom-form-row">
					<div class="half-row">
						<label for="save-a-copy" data-i18n="contact-form.save-copy"></label>

						<input checked id="save-a-copy" type="radio">
					</div>

					<div class="half-row">

					</div>
				</div>
			</div>
		</div>
	</body>
</html>
