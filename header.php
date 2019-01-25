	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/bootstrap-grid.css">
	<link rel="stylesheet" href="css/bootstrap-reboot.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/style.css">

    <script src="js/script.js"></script>
    <script src="https://use.fontawesome.com/acdf66c231.js"></script>
		<!--this is the favicon thing-->
		<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
		<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />



  </head>



  <body>

	<nav class="navbar navbar-expand-lg navbar-dark trons-purple-bkgnd sticky-top">
	  <a class="navbar-brand" href="#">
   	 	<img  src="images/Logo-header-white.svg" height="65">
 	  </a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarContent">
		<ul class="navbar-nav ml-auto">
		  <li <?php echo ($page == 'index.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="index.php">Home</a>
		  </li>
			<li class='nav-item'>
		<!--	<a class="nav-link" href="https://www.gofundme.com/intimitrons2018">Donate</a> -->
			<a class="nav-link" href="https://www.gofundme.com/help-support-the-intimitrons-from-area-51">Donate</a>
			</li>
		  <li <?php echo ($page == 'first-robotics-calgary.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="first-robotics-calgary.php">FIRST</a>
		  </li>
		  <li <?php echo ($page == 'team.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="team.php">Team</a>
		  </li>
			<!--
		  <li <?php echo ($page == 'robots.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="robots.php">Robots</a>
		  </li>
		-->
		  <li <?php echo ($page == 'sponsors.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="sponsors.php">Sponsors</a>
		  </li>
		  <li <?php echo ($page == 'girls-in-stem-calgary.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="girls-in-stem-calgary.php">Media</a>
		  </li>
		  <li <?php echo ($page == 'contact.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="contact.php">Contact</a>
		  </li>
		</ul>
	  </div>
	</nav>
