// JavaScript Document

function getSponsorData(sponsorLevel) {

	var data = {

		"Terabyte": [
		],

		"Gigabyte": [
/*
			{"Name":"Lockheed Martin",
			 "Nickname":"Lockheed",
			 "Years":[2018],
			 "URL":"https://lockheedmartin.com",
			 "Logo":"../images/lockheed-martin-logo.png",
			 "Description":"2018 is Lockheed Martin's first year sponsoring the Intimitrons. We are very grateful for their support which is critical for helping to cover our competition entrance fees and expenses for the Western Regional. Lockheed Martin CDL Systems specializes in the development and licensing of vehicle control station software for unmanned systems.",
			 "Photo":"https://farm5.staticflickr.com/4223/34053637944_81e25c7ddc_h.jpg"}
*/

			{"Name":"Trilogy Software",
				"Nickname":"Trilogy",
				"Years":[2018,2019],
				"URL":"https://www.taxcycle.com/",
				"Logo":"../images/taxcycle.png",
				"Description":"This is Trilogy Software's second year sponsoring the Intimitrons. We can't wait for the season to start so we can share how this sponsorship has helped our team. Trilogy's flagship product, Tax Cycle, makes tax preparation for Canadian accountants and bookkeepers more efficient and puts client records at their fingertips year after year.",
				"Photo":"../images/Cameron-Peters-TaxCycle-2016.png"
			},
		],

		"Megabyte": [

			{"Name":"Royal Bank of Canada",
			 "Nickname":"RBC",
			 "Years":["2015-2019"],
			 "URL":"http://www.rbcphnic.com/",
			 "Logo":"../images/rbc.png",
			 "Description":"We are so thankful for the generous support we received from RBC, the support they have given us will be so beneficial to our team’s success this year. RBC is a strong believer in community and sustainability, and diversity.",
			 "Photo":"https://farm3.staticflickr.com/2937/33178496114_43ccdd64a6_h.jpg"},

			 {"Name":"Microsoft",
				"Nickname":"Microsoft",
				"Years":[2019],
				"URL":"http://www.microsoft.com/",
				"Logo":"../images/microsoft.jpg",
				"Description":"Microsoft is committed to positive STEM outcomes for youth and has teamed up with For Inspiration and Recognition of Science and Technology (FIRST) to provide grants for teams across Canada to participate in the FIRST Robotics Competitions. ",
				"Photo":"../images/temp-microsoft.jpg"},
		],

	  "inkindop":
		[
			{"Name":"QSine",
			 "Nickname":"QSine",
			 "Years":["2013-2019"],
			 "URL":"http://qsine.ca",
			 "Logo":"../images/qsine-logo.png",
			 "Description":"QSine provides our team with a space to build and fabricate our robot, as well as mentors to help us in the welding and fabrication of our robot. At QSine, they use precision fabrication, welding and machining to produce high quality parts and products.",
			 "Photo":"https://farm5.staticflickr.com/4804/31395482187_bf6595139f_k.jpg"},
		],

		"inkind": [

			{"Name":"Schulich Community Robotics Program",
			 "Nickname":"SCRP",
			 "Years":["2012-2019"],
			 "URL":"https://www.ucalgary.ca/robotics/",
			 "Logo":"../images/scrp.png",
			 "Description":"The Schulich Community Robotics Program (SCRP) has provided us with not only space to work, and wonderful mentors for our team. They have also provided us with outreach opportunities to help out younger kids interested in robotics.",
			 "Photo":""},

			 {"Name":"Basecamp",
 			 "Nickname":"Basecamp",
 			 "Years":[2019],
 			 "URL":"https://basecamp.com",
 			 "Logo":"../images/basecamp.png",
 			 "Description":"Basecamp is project management and collaboration software in the cloud. They provide a free subscription to the Intimitrons, helping us to stay on schedule and communicate between meetings.",
 			 "Photo":""}
		],

		"Kilobyte": [
/*
			{"Name":"Halliburton",
			 "Nickname":"Halliburton",
			 "Years":[2016,2017,2018],
			 "URL":"http://www.halliburton.com/en-US/default.page",
			 "Logo":"../images/halliburton.jpg",
			 "Description":"It is this company’s third year in sponsoring the Intimitrons, and their support has been very beneficial to our team. This year, their financial support has payed for our team’s admission into the 2015 Western Canada competition. They are based in Calgary and integrate social, economic and environmental considerations into all of their operating practices.",
			 "Photo":""},
*/
/*
			{"Name":"NSERC-CRSNG",
			 "Nickname":"NSERC-CRSNG",
			 "Years":[2019],
			 "URL":"http://www.nserc-crsng.gc.ca/index_eng.asp",
			 "Logo":"../images/nserc-crsng.png",
			 "Description":"NSERC promotes scientific discovery by funding university professors and students and fosters innovation by encouraging Canadian companies to participate and invest in postsecondary research and training. All of that starts years before -- contributions by NSERC-CRSNG help to ignite the spark for kids to pursue a future in STEM.",
			 "Photo":""},
			 */

 			 {"Name":"The Schulz Family Fund at the Calgary Foundation",
  			 "Nickname":"Schulz Family Fund",
  			 "Years":[2018,2019],
  			 "URL":"https://calgaryfoundation.org/",
  			 "Logo":"../images/calgary.foundation.jpg",
  			 "Description":"We are so thankful for the generous support we received from Schulz Family Fund, the support they have given us will be so beneficial to our team’s success this year!",
  			 "Photo":"../images/schultz-family.jpg"
 		 	}
		],

		"Byte": [

			{"Name":"Provision Business Advisors",
			 "Nickname":"Provision",
			 "Years":[2019],
			 "URL":"https://provisioncoaching.ca",
			 "Logo":"../images/provision.png",
			 "Description":"Laura Bechard of Provision Business Advisors guides small business owners to grow their business or practice while also living a well-balanced life. She is a long-time advocate for underrepresented groups in the workforce and entrepreneurship, and we are grateful for her generous support of Girls in STEM!",
			 "Photo":""},
		],

		"Bit": [
			{"Name":"Anonymous","Amount":"$50"}
		]

	};

	if(sponsorLevel === "Terabyte") { return data.Terabyte; }
	else if(sponsorLevel === "Gigabyte") { return data.Gigabyte; }
	else if(sponsorLevel === "Megabyte") { return data.Megabyte; }
	else if(sponsorLevel === "in-kind" || sponsorLevel === "inkind") { return data.inkind; }
	else if(sponsorLevel === "in-kindop" || sponsorLevel === "inkindop") { return data.inkindop; }
	else if(sponsorLevel === "Kilobyte") { return data.Kilobyte; }
	else if(sponsorLevel === "Byte") { return data.Byte; }
	else if(sponsorLevel === "Bit") { return data.Bit; }
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
			html += "    <h2 class=\"pt-4\">" + sponsor[i].Name + "</h2>";
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
			if(sponsor[i].Photo.length >0){
				html += "<img class=\"trons-sponsor-photo animated fadeIn wow\" src='" + sponsor[i].Photo + "'>";
			   }
			html += "<p>" + sponsor[i].Description + "</p>";
			html += "<h6 class=\"pb-4\">Sponsorship Years: " + sponsor[i].Years + "</h6>";
			html += "<a href=\"" + sponsor[i].URL + "\" class=\"btn trons-green-button trons-small-button\"> Visit " + sponsor[i].Nickname + "</a>";
			html += "</div>";
		}
	}
	document.getElementById(divId).innerHTML = html;
}

function displaySponsorList(divId) {

	var sponsor = getSponsorData("Bit");
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
