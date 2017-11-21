	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/bootstrap-grid.css">
	<link rel="stylesheet" href="css/bootstrap-reboot.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/animate.css">

    <script src="https://use.fontawesome.com/acdf66c231.js"></script>
	  
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1933454553572459';
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	  
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
		  <li <?php echo ($page == 'first-robotics.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="first-robotics.php">FIRST</a>
		  </li>
		  <li <?php echo ($page == 'team.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="team.php">Team</a>
		  </li>
		  <li <?php echo ($page == 'robots.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="robots.php">Robots</a>
		  </li>
		  <li <?php echo ($page == 'sponsors.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="sponsors.php">Sponsors</a>
		  </li>
		  <li <?php echo ($page == 'contact.php') ? "class='nav-item active'" : "class='nav-item'"; ?>>
			<a class="nav-link" href="contact.php">Contact</a>
		  </li>
		</ul>
	  </div>
	</nav>