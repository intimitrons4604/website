<!DOCTYPE html>
<html>
<head>
<title>FIRST Robotics | FRC | Calgary | Intimitrons 4604</title>

<script src="js/moment.js"></script>
<script src="js/media.js"></script>

<?php $page = "girls-in-stem-calgary.php" ; include_once('header.php');?>

<div class="jumbotron-fluid remove-padding">
	<div class="container-fluid remove-padding">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 remove-padding">
				<div class="trons-hero" style="background-image: url('https://farm5.staticflickr.com/4512/37996293252_3f5fcab7d4_h.jpg');">
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container mt-5">

	<div class="row">
		<div class="col-12">
			<h1 class="text-center">What's Up Trons?</h1>
		</div>
	</div>

	<div class="row">

		<div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
		 <script language="javascript" src="//intimitrons.us3.list-manage.com/generate-js/?u=d479728f08b6043f1d957d5b1&fid=15857&show=10" type="text/javascript"></script>
	 	</div>

		<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 pl-xl-5 pl-lg-5 pb-5">
			<div id="trons-vert-team-menu" class="btn-group-vertical btn-group-lg" role="group" aria-label="Trons in the News">
				<button type="button" onclick="window.location.href='#articles-menu'" class="btn btn-secondary trons-green-button">Articles</button>
				<button type="button" onclick="window.location.href='#videos-menu'" class="btn btn-secondary trons-green-button">Videos</button>
			</div>
		</div>

	</div>

</div>

<div class="container-fluid trons-purple-bkgnd mt-5">

	<div class="row p-5">

		<div class="col-12">

			<h5>Sign up for our newsletter here, if you’d like updates on what we’ve been up to!</h5>
			<form action="https://intimitrons.us3.list-manage.com/subscribe/post?u=d479728f08b6043f1d957d5b1&amp;id=cc9ef4518a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div class="form-row align-items-center">
				<div class="col-sm-3">
					<label class="sr-only" for="mce-FNAME">First Name</label>
					<input type="text" value="" name="FNAME" id="mce-FNAME" class="form-control mb-2 mb-sm-0" placeholder="First name">
				</div>
				<div class="col-sm-3">
					<label class="sr-only" for="mce-LNAME">Last Name</label>
					<input type="text" value="" name="LNAME" id="mce-LNAME" class="form-control mb-2 mb-sm-0" placeholder="Last name">
				</div>
				<div class="col-sm-3">
					<label class="sr-only" for="mce-EMAIL">Email</label>
					<div class="input-group mb-2 mb-sm-0">
					<div class="input-group-addon"><i class="fa fa-envelope"></i></div>
					<input type="email" value="" name="EMAIL" id="mce-EMAIL" class="required form-control" id="newsletter-email" placeholder="Email">
					</div>
				</div>
				<div class="col-auto">
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d479728f08b6043f1d957d5b1_cc9ef4518a" tabindex="-1" value=""></div>
					<button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn trons-green-button">Subscribe</button>
				</div>
				</div>
			</form>
		</div>
	</div>
</div>


<div class="parallax" style="background-image: url('https://farm5.staticflickr.com/4191/34364767932_ea2fa26df3_h.jpg');"></div>


<div class="container-fluid">
	<div class="row">
		<div class="col-12 p-0" id="articles-menu">
			<script>
				displayMediaMenu("Articles","articles-menu");
			</script>
		</div>
	</div>
</div>

<div class="container mt-5" id="articles">

	<script>
		// look in media.js for list of articles and this function
		displayMediaRow("Articles","articles");
	</script>

</div>


<div class="container-fluid">
	<div class="row">
		<div class="col-12 p-0" id="videos-menu">
			<script>
				displayMediaMenu("Videos","videos-menu");
			</script>
		</div>
	</div>
</div>

<div class="container mt-5" id="videos">

	<script>
		displayMediaRow("Videos","videos");
	</script>

</div>

<?php include_once('footer.php')?>
