<!DOCTYPE html>
<html>
<head>
<title>Contact Us | Girls In STEM | Calgary | Intimitrons 4604</title>

<?php $page = "contact.php" ; include_once('header.php');?>

<div class="jumbotron-fluid remove-padding">
	<div class="container-fluid remove-padding">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 remove-padding">
				<div class="trons-hero" style="background-image: url('../images/talk-to-trons.jpg');">
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container mt-5 mb-5">

	<div class="row mb-5">
		<div class="col-12">
			<h1>The Trons Want to Hear from You</h1>
			<p class="trons-intro">Are you looking for an after school activity that's different from the rest? FRC isn't just about robots. It's also about project management, leadership, building business skills, and design. Make new friends and build the confidence you'll need to meet the world on your terms.</p>
		</div>
	</div>

	<div class="row mt-5">

		<div class="col-xl-6 col-lg-6 col-md-9 col-sm-12 col-xs-12 mr-5">
			<h2>Send Us a Message</h2>
			<form action="" method="post" id="contact-form" name="contact-form" class="validate" target="_blank">
				<div class="form-row pb-3">
					<div class="col-6">
						<label for="firstName">First Name</label>
						<input type="text" value="" id="firsName" class="form-control mb-2 mb-sm-0 required" placeholder="Jane">
					</div>
					<div class="col-6">
						<label for="lastName">Last Name</label>
						<input type="text" value="" id="lastName" class="form-control mb-2 mb-sm-0" placeholder="Doe">
					</div>
				</div>
				<div class="form-row pb-3">
					<div class="col-12">
						<label for="email">Email Address</label>
						<div class="input-group mb-2 mb-sm-0">
						<div class="input-group-addon"><i class="fa fa-envelope"></i></div>
						<input type="email" value="" id="email" class="required form-control rounded-right" id="newsletter-email" placeholder="jane@example.org">
						</div>
					</div>
				</div>
				<div class="form-row pb-5">
					<div class="col-12">
						<label for="message">Message</label>
						<textarea id="message" class="form-control mb-2 mb-sm-0 required" rows="5" placeholder="The Trons are wicked cool... where do I sign up?"></textarea>
					</div>
				</div>
				<div class="form-row pb-5">
					<div class="col-">
						<button type="submit" value="Send" name="send" id="contact-send" class="btn trons-green-button">Send</button>
					</div>
				</div>
			</form>
		</div>

		<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pb-5">
			<div class="text-box trons-purple-bkgnd p-3 tex-center">

				<img src="images/Logo-Alien-Only.svg" width="60%" class="center-block mb-2">

				<h6>Email:</h6>
				<h5>info@intimitrons.ca</h5>

				<div class="text-box-separator"></div>

				<h6>Location:</h6>
				<h5>University of Calgary</h5>

				<div class="text-box-separator"></div>

				<h6>Schedule:</h6>
				<h5>Tues/Thurs 6pm-8pm + Sat 10am-4pm</h5>

			</div>
		</div>

	</div>
</div>

<?php include_once('footer.php')?>
