// JavaScript Document

function getSponsorData(sponsorLevel) {

	var data = {

		"Terabyte": [
		],

		"Gigabyte": [
			{"Name":"Lockheed Martin",
			 "Nickname":"Lockheed",
			 "Years":[2018],
			 "URL":"https://lockheedmartin.com",
			 "Logo":"../images/lockheed-martin-logo.png",
			 "Description":"2018 is Lockheed Martin's first year sponsoring the Intimitrons. We are very grateful for their support which is critical for helping to cover our competition entrance fees and expenses for the Western Regional. Lockheed Martin CDL Systems specializes in the development and licensing of vehicle control station software for unmanned systems.",
			 "Photo":"https://farm5.staticflickr.com/4222/34856250576_c78f02d25f_h.jpg"}
		],

		"Megabyte": [
		],

		"inkind": [
			{"Name":"QSine",
			 "Nickname":"QSine",
			 "Years":[2013,2014,2015,2016,2017,2018],
			 "URL":"http://qsine.ca",
			 "Logo":"../images/qsine-logo.png",
			 "Description":"QSine provides our team with a space to build and fabricate our robot, as well as mentors to help us in the welding and fabrication of our robot. At QSine, they use precision fabrication, welding and machining to produce high quality parts and products.",
			 "Photo":""},
			{"Name":"Schulich Community Robotics Program",
			 "Nickname":"SCRP",
			 "Years":[2012,2013,2014,2015,2016,2017,2018],
			 "URL":"https://www.ucalgary.ca/robotics/",
			 "Logo":"../images/scrp.png",
			 "Description":"The Schulich Community Robotics Program (SCRP) has provided us with not only space to work, and wonderful mentors for our team. They have also provided us with outreach opportunities to help out younger kids interested in robotics.",
			 "Photo":""}
		],

		"Kilobyte": [
			{"Name":"Halliburton",
			 "Nickname":"Halliburton",
			 "Years":[2016,2017,2018],
			 "URL":"http://www.halliburton.com/en-US/default.page",
			 "Logo":"../images/halliburton.jpg",
			 "Description":"It is this company’s third year in sponsoring the Intimitrons, and their support has been very beneficial to our team. This year, their financial support has payed for our team’s admission into the 2015 Western Canada competition. They are based in Calgary and integrate social, economic and environmental considerations into all of their operating practices.",
			 "Photo":""},
			{"Name":"Trilogy Software",
				"Nickname":"Trilogy",
				"Years":[2018],
				"URL":"https://www.taxcycle.com/",
				"Logo":"../images/taxcycle.png",
				"Description":"This is Trilogy Software's first year sponsoring the Intimitrons. We can't wait for the season to start so we can share how this sponsorship has helped our team. Trilogy's flagship product, Tax Cycle, makes tax preparation for Canadian accountants and bookkeepers more efficient and puts client records at their fingertips year after year.",
				"Photo":""}
		],

		"Byte": [
			{"Name":"Anonymous","Amount":"$50"}
		]

	};

	if(sponsorLevel === "Terabyte") { return data.Terabyte; }
	else if(sponsorLevel === "Gigabyte") { return data.Gigabyte; }
	else if(sponsorLevel === "Megabyte") { return data.Megabyte; }
	else if(sponsorLevel === "in-kind" || sponsorLevel === "inkind") { return data.inkind; }
	else if(sponsorLevel === "Kilobyte") { return data.Kilobyte; }
	else if(sponsorLevel === "Byte") { return data.Byte; }
	else { alert("internal_error: invalid sponsor level " + sponsorLevel); }

}


/* usually for Terabyte and/or Gigabyte Level */
function displaySponsorRow(sponsorType,divId) {

	var sponsor = getSponsorData(sponsorType);
	sponsor.sort(sortBy("Name"));

	var html = "";
	if(sponsor.length === 0) {
		html += "<div class=\"row mt-5\"><div class=\"col-12\"><h3 class=\"text-center\">The Trons need your support!</h3><h4 class=\"text-center\">Be the first " + sponsorType + " sponsor to pledge your support this season.</h4></div></div>";
	}
	else {
		for(var i=0; i < sponsor.length; i++) {

			html += "<div class=\"row mt-5\">";
			html += "  <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5\">";
			html += "    <img src=\"" + sponsor[i].Logo + "\" width=\"50%\" class=\"animated fadeInUp wow\">";
			html += "    <h2 class=\"pt-2\">" + sponsor[i].Name + "</h2>";
			html += "    <p>" + sponsor[i].Description + "</p>";
			html += "    <h4 class=\"pb-4\">Sponsorship Years: " + sponsor[i].Years + "</h4>";
			html += "    <a href=\"" + sponsor[i].URL + "\" class=\"btn trons-green-button trons-medium-button\">Visit " + sponsor[i].Nickname +  "</a>";
			html += "  </div>";
			html += "  <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12\">";
			html += "    <div style=\"background-image:url('" + sponsor[i].Photo + "');\" class=\"trons-img-card animated fadeIn wow\" data-wow-delay=\"0.5s\"></div>";
			html += "  </div>";
			html += "</div>";
		}
	}
	document.getElementById(divId).innerHTML = html;
}

/* usually for Megabyte, Kilobyte and In-Kind sponsors with different # slices */
function displaySponsorGrid(groupName,divId,slices) {

	var sponsor = getSponsorData(groupName);
	sponsor.sort(sortBy("Name"));

	var html = "";
	if(sponsor.length === 0) {

		html += "<div class=\"col-12\"><h3 class=\"text-center\">The Trons need your support!</h3><h4 class=\"text-center\">Be the first " + groupName + " sponsor to pledge your support this season.</h4></div>";
	}
	else {
		for(var i=0; i < sponsor.length; i++) {
			html += "<div class=\"col-xl-" + slices + " col-lg-" + slices +" col-md-6 col-sm-12 col-xs-12 px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5\">";
			html += "<div class=\"trons-sponsor-logo animated fadeIn wow\" style=\"background-image:url('" + sponsor[i].Logo + "');\"></div>";
			html += "<h4 class=\"pt-4\">" + sponsor[i].Name + "</h4>";
			html += "<p>" + sponsor[i].Description + "</p>";
			html += "<h6 class=\"pb-4\">Sponsorship Years: " + sponsor[i].Years + "</h6>";
			html += "<a href=\"" + sponsor[i].URL + "\" class=\"btn trons-green-button trons-small-button\"> Visit " + sponsor[i].Nickname + "</a>";
			html += "</div>";
		}
	}
	document.getElementById(divId).innerHTML = html;
}

function displaySponsorList(divId) {

	var sponsor = getSponsorData("Byte");
	sponsor.sort(sortBy("Name"));

	var colcnt = Math.floor(sponsor.length / 4);
	colcnt = (sponsor.length % 4 === 0) ? colcnt : colcnt + 1;

	var html = "";
	for(var j=0; j < 4 && j < sponsor.length; j++) {

		html += "<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5\">";
		html += "  <ul>";

		var k=0;
		var cell = k + colcnt * j;
		while(k < colcnt && cell < sponsor.length) {
			html += "    <li>" + sponsor[cell].Name + " " + sponsor[cell].Amount + "</li>";
			k++;
			cell = k + colcnt * j;
		}

		html += "  </ul>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;
}
