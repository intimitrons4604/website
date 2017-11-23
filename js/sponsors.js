// JavaScript Document

function getSponsorData(sponsorLevel) {
	
	var data = {
	
		"platinum": [
			{"Name":"Alberta Women's Science Network (AWSN)",
			 "Nickname":"AWSN",
			 "Years":[2013,2014,2015,2016,2017],
			 "URL":"https://awsn.org",
			 "Logo":"../images/awsn.png",
			 "Description":"With the amazing donations from the AWSN, we have been able to purchase two team laptops as well as a quality camera for photos and video of events. This wonderful organization is all about promoting minorities in STEM related careers, just like our team!",
			 "Photo":"https://farm3.staticflickr.com/2937/33178496114_8c377483fa_k.jpg"}
		],
		
		"gold": [
			{"Name":"Lockheed Martin",
			 "Nickname":"Lockheed",
			 "Years":[2016,2017],
			 "URL":"https://lockheedmartin.com",
			 "Logo":"../images/lockheed-martin-logo.png",
			 "Description":"It is this company’s second year in sponsoring the Intimitrons, and their support has been very beneficial to our team. This year, their financial support has payed for our team’s admission into the 2015 Western Canada competition. They are based in Calgary and integrate social, economic and environmental considerations into all of their operating practices.",
			 "Photo":""}	
		],
	
		"inkind": [
			{"Name":"QSine",
			 "Nickname":"QSine",
			 "Years":[2013,2014,2015,2016,2017],
			 "URL":"http://qsine.ca",
			 "Logo":"../images/qsine-logo.png",
			 "Description":"QSine provides our team with a space to build and fabricate our robot, as well as mentors to help us in the welding and fabrication of our robot. At QSine, they use precision fabrication, welding and machining to produce high quality parts and products.",
			 "Photo":""},
			{"Name":"Schulich Community Robotics Program (SCRP)",
			 "Nickname":"SCRP",
			 "Years":[2013,2014,2015,2016,2017],
			 "URL":"https://www.ucalgary.ca/robotics/",
			 "Logo":"../images/scrp.png",
			 "Description":"The Schulich Community Robotics Program has provided us with not only space to work, and wonderful mentors for our team. They have also provided us with outreach opportunities to help out younger kids interested in robotics.",
			 "Photo":""}
		],
		
		"silver": [
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"},
			{"Name":"Fred Flinstone"}
		]
		
		
	};
	
	if(sponsorLevel === "platinum") { return data.platinum; }
	else if(sponsorLevel === "gold") { return data.gold; }
	else if(sponsorLevel === "in-kind" || sponsorLevel === "inkind") { return data.inkind; }
	else if(sponsorLevel === "silver") { return data.silver; }

}


function displayPlatinumSponsors(divId) {

	var sponsor = getSponsorData("platinum");
	sponsor.sort(sortBy("Name"));
	
	var html = "";
	for(var i=0; i < sponsor.length; i++) {
		
		html += "<div class=\"row mt-5\">";
		html += "  <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 px-5\">";
		html += "    <img src=\"" + sponsor[i].Logo + "\" width=\"50%\">";
		html += "    <h2 class=\"pt-2\">Alberta Women's Science Network (AWSN)</h2>";
		html += "    <p>" + sponsor[i].Description + "</p>";
		html += "    <h4 class=\"pb-4\">Sponsorship Years: " + sponsor[i].Years + "</h4>";
		html += "    <a href=\"" + sponsor[i].URL + "\" class=\"btn trons-green-button trons-medium-button\">Visit " + sponsor[i].Nickname +  "</a>";
		html += "  </div>";
		html += "  <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12\">";
		html += "    <img src=\"" + sponsor[i].Photo + "\" width=\"90%\">"; 
		html += "  </div>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;	
}


function displaySponsorGrid(groupName,divId) {

	var sponsor = getSponsorData(groupName);
	sponsor.sort(sortBy("Name"));
	
	var html = "";
	for(var i=0; i < sponsor.length; i++) {
		html += "<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5\">";
		html += "<img src=\"" + sponsor[i].Logo + "\" height=\"150px\">";
		html += "<h4 class=\"pt-4\">" + sponsor[i].Name + "</h4>";
		html += "<p>" + sponsor[i].Description + "</p>";
		html += "<h6 class=\"pb-4\">Sponsorship Years: " + sponsor[i].Years + "</h6>";
		html += "<a href=\"" + sponsor[i].URL + "\" class=\"btn trons-green-button trons-small-button\"> Visit " + sponsor[i].Nickname + "</a>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;	
}

function displaySilverList(divId) {

	var sponsor = getSponsorData("silver");
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
			html += "    <li>" + sponsor[cell].Name + "</li>";
			k++;
			cell = k + colcnt * j;
		}
		
		html += "  </ul>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;	
}