<!DOCTYPE html>
<html>
<head>
<title>Robotics | Girls in STEM | Calgary | Intimitrons 4604</title>

<?php $page = "team.php" ; include_once('header.php');?>

<script src="js/team.js"></script>

<div class="jumbotron-fluid remove-padding">
	<div class="container-fluid remove-padding">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-sm-12 remove-padding">
				<div class="trons-hero" style="background-image: url('../images/intimitrons-4604-team.jpg');">
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container-fluid mt-5">

	<div class="row p-xl-5 p-lg-5 p-md-5 p-sm-1 p-xs-1">

		<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 pb-5">
			<div class="text-box trons-purple-bkgnd p-3">

				<img src="images/Logo-Alien-Only.svg" width="60%" class="center-block mb-2">

				<h6>Team number:</h6>
				<h5>4604</h5>

				<div class="text-box-separator"></div>

				<h6>Started:</h6>
				<h5>2012-2013 Season</h5>

				<div class="text-box-separator"></div>

				<h6>From:</h6>
				<h5>Calgary, Alberta<br>Canada</h5>

			</div>
		</div>



		<div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 pl-xl-5 pl-lg-5 pl-md-5 pb-5">
			<h2>Mission</h2>
			<p class='trons-intro'> Our objective is to encourage female participation in technical vocations- fields that are currently male dominated.  We do this by making robots that compete in FIRST Robotics Competitions, which is super fun!</p>

			<h2>Vision</h2>
			<p class='trons-intro'>The team Intimitrons from Area 51, was founded in hopes to inspire and encourage the participation of young women in engineering, science, and technical vocations. In a male dominated field, we see this as an important endeavor. Our team sees it important to uphold the values of FIRST and to continue to help others along our path as competitors. We would also like to reach out to the community and encourage participation in the fascinating and rewarding experience of robotics and these professions.
			</p>
		</div>

		<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 pl-xl-5 pl-lg-5 pb-5">
			<div id="trons-vert-team-menu" class="btn-group-vertical btn-group-lg" role="group" aria-label="Meet the Team">
			  <button type="button" onclick="window.location.href='#trons'" class="btn btn-secondary trons-green-button">Roster</button>
			  <button type="button" onclick="window.location.href='#mentors'" class="btn btn-secondary trons-green-button">Mentors</button>
			  <button type="button" onclick="window.location.href='#alumni'" class="btn btn-secondary trons-green-button">Alumni</button>
			</div>
		</div>


	</div>

</div>


<div class="container-fluid trons-purple-bkgnd mt-5">

	<div class="row p-5">

		<div class="col-12">

			<h5>Learn STEM, design thinking, business skills, and build confidence - become a Tron!</h5>
			<form action="" method="post" id="contact-form" name="contact-form" class="validate" target="_blank" novalidate>
			  <div class="form-row align-items-center">
				<div class="col-sm-3">
				  <label class="sr-only" for="fname">First Name</label>
				  <input type="text" value="" name="fname" id="fname" class="form-control mb-2 mb-sm-0" placeholder="First name">
				</div>
				<div class="col-sm-3">
				  <label class="sr-only" for="lname">Last Name</label>
				  <input type="text" value="" name="lname" id="lname" class="form-control mb-2 mb-sm-0" placeholder="Last name">
				</div>
				<div class="col-sm-3">
				  <label class="sr-only" for="email">Email</label>
				  <div class="input-group mb-2 mb-sm-0">
					<div class="input-group-addon"><i class="fa fa-envelope"></i></div>
					<input type="email" value="" name="email" id="email" class="required form-control" placeholder="Email">
				  </div>
				</div>
				<div class="col-auto">
				  <button type="submit" value="Subscribe" name="subscribe" id="submit-sponsor-contact-form" class="btn trons-green-button">Submit</button>
				</div>
			  </div>
			</form>
		</div>
	</div>
</div>

<div class="parallax" style="background-image: url('https://farm5.staticflickr.com/4191/34364767932_ea2fa26df3_h.jpg');"></div>

<div class="container mt-5">

	<div class="row" id="trons">
        <div class="col-12">
			<h1 class="text-center">Meet the Trons</h1>
		</div>
	</div>

	<div class="row" id="trons-grid">

		<script>
			// look in teams.js for list of team members and this function
			displayTeamGrid("trons","trons-grid");
		</script>
	</div>


</div>

<div class="parallax" style="background-image: url('https://farm5.staticflickr.com/4188/34484143016_f1faef45e0_h.jpg');"></div>

<div class="container mt-5">

	<div class="row" id="mentors">
        <div class="col-12">
			<h1 class="text-center">Meet the Mentors</h1>
		</div>
	</div>

	<div class="row" id="mentors-grid">

		<script>
			// look in teams.js for list of team members and this function
			displayTeamGrid("mentors","mentors-grid");
		</script>
	</div>

</div>

<div class="parallax" style="background-image: url('https://farm5.staticflickr.com/4512/37996293252_3f5fcab7d4_h.jpg');"></div>

<div class="container mt-5">

	<div class="row" id="alumni">
        <div class="col-12">
			<h1 class="text-center">Trons, Where Are They Now?</h1>
		</div>
	</div>

	<div class="row" id="alumni-grid">

		<script>
			// look in teams.js for list of team members and this function
			displayTeamGrid("alumni","alumni-grid");
		</script>

	</div>


</div>

<?php include_once('footer.php');?>
