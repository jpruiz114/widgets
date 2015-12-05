<?php
$basePath = "/frontend-test/ContactForm/";

// Remove the directory path we don't want
$request = str_replace($basePath, "", $_SERVER["REQUEST_URI"]);

// Split the path by "/"
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
		<meta charset="UTF-8">

		<title>Contact Form</title>

		<meta name="viewport" content="width=device-width, initial-scale=0.5">

		<meta name="author" content="Jean Paul Ruiz">
		
		<meta name="description" content="This is an example of a contact form">
		
		<meta name="keywords" content="contact form, contact">
		
		<meta name="robots" content="index, follow">
		
		<meta name="revisit-after" content="7 days">
		
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
		
		<link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>css/index.css">
		
		<script type="text/javascript" src="<?php echo $basePath; ?>components/jquery/dist/jquery.min.js"></script>

		<script type="text/javascript" src="<?php echo $basePath; ?>components/jqueryui/jquery-ui.min.js"></script>

		<link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>components/jqueryui/themes/start/jquery-ui.min.css">

		<link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>components/fontawesome/css/font-awesome.min.css">

		<script type="text/javascript" src="<?php echo $basePath; ?>components/toastr/toastr.min.js"></script>

		<link rel="stylesheet" type="text/css" href="<?php echo $basePath; ?>components/toastr/toastr.min.css">

		<script type="text/javascript" src="<?php echo $basePath; ?>components/i18next/i18next.min.js"></script>

		<link href="<?php echo $basePath; ?>assets/components/bootstrap-tokenizer/bootstrap.css" rel="stylesheet">

		<link href="<?php echo $basePath; ?>assets/components/bootstrap-tokenizer/bootstrap-tokenizer.css" rel="stylesheet">

		<script type="text/javascript" src="assets/components/bootstrap-tokenizer/bootstrap-tokenizer.js"></script>

		<link href="<?php echo $basePath; ?>components/iCheck/skins/minimal/green.css" rel="stylesheet">

		<script type="text/javascript" src="<?php echo $basePath; ?>components/iCheck/icheck.min.js"></script>

		<link href="<?php echo $basePath; ?>components/ladda/dist/ladda.min.css" rel="stylesheet">

		<script type="text/javascript" src="<?php echo $basePath; ?>components/ladda/dist/spin.min.js"></script>

		<script type="text/javascript" src="<?php echo $basePath; ?>components/ladda/dist/ladda.min.js"></script>

		<script type="text/javascript" src="<?php echo $basePath; ?>js/dist/index.js"></script>

		<script type="text/javascript">
			/**
			 * When all the website resources (Images, scripts) have been loaded.
			 */
			$(window).load(
				function() {
					var chosenLang = "<?php echo($lang); ?>";

					app.setBasePath("<?php echo $basePath; ?>");

					app.initialize(chosenLang);
				}
			);
		</script>

		<?php include_once("../ga-tracking.php") ?>
	</head>

	<body>
		<div id="wrapper">
			<div id="top-bar">
				<ul class="langs">
					<li class="langs-item">
						<a class="langs-link" href="<?php echo $basePath; ?>en" id="go-to-en-page" target="_self" data-i18n="[title]contact-form.english-website;contact-form.english-website"></a>
					</li>

					<li class="langs-item">
						<a class="langs-link" href="<?php echo $basePath; ?>es" id="go-to-es-page" target="_self" data-i18n="[title]contact-form.spanish-website;contact-form.spanish-website"></a>
					</li>
				</ul>
			</div>

			<div id="form-container">
				<div class="full-size-row">
					<label data-i18n="contact-form.contacts" for="email-tokenizer"></label>
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
					<label data-i18n="contact-form.subject" for="subject"></label>
				</div>
				
				<div class="full-size-row">
					<input data-i18n="[placeholder]contact-form.add-subject" id="subject" type="text" />
				</div>
				
				<div class="full-size-row">
					<label data-i18n="contact-form.message" for="message"></label>
				</div>
				
				<div class="full-size-row">
					<textarea data-i18n="[placeholder]contact-form.leave-message" id="message"></textarea>
				</div>
				
				<div class="bottom-form-row">
					<div class="half-row">
						<input checked id="save-a-copy" type="checkbox">

						<label data-i18n="contact-form.save-copy" for="save-a-copy"></label>
					</div>

					<div class="half-row">
						<button class="ladda-button send-mail" data-color="red" data-style="slide-right">
							<i class="fa fa-play-circle"></i>

							<span class="ladda-label" data-i18n="contact-form.send-mail"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
