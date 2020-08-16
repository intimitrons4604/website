// JavaScript Document

function getMediaData(mediaType) {

	var data = {

		"Articles": [
			{"Source":"Calgary Herald",
			 "Date":"2016-04-04",
			 "URL":"http://calgaryherald.com/storyline/high-school-students-gathered-today-for-a-medieval-robotics-showdown",
			 "Thumbnail":"../images/robots2.jpg",
			 "Button":"Read Full Article",
			 "Title":"Medieval Robotics Showdown",
			 "Snippet":"Cowan joined the Intimitrons three years ago because she liked building things and thought robots were cool. It became a passion, leading to her decision to pursue mechanical engineering at the University of Waterloo after she graduates, Cowan said. She also works with her teammates to encourage young girls to take an interest in science and engineering by mentoring junior teams."
		 },
		 {"Source":"FRC West",
			 "Date":"2015-10-02",
			 "URL":"http://frcwest.com/2015/10/02/352/",
			 "Thumbnail":"../images/IMG_0169-1024x768.jpg",
			 "Button":"Read Full Article",
			 "Title":"FRC West Exhibition",
			 "Snippet":"Over 5000 high school and 4500 elementary students visited the exhibition. Our team members provided opportunities to learn about FIRST and drive robots! The robots even captured the attention of the New York film academy!"
		 },
		 {"Source":"University of Calgary",
			 "Date":"2014-04-11",
			 "URL":"https://www.ucalgary.ca/utoday/issue/2014-04-11/two-calgary-teams-among-winners-regional-robotics-competition",
			 "Thumbnail":"../images/robot-competitors.jpg",
			 "Button":"Read Full Article",
			 "Title":"Regional Robitics Competition",
			 "Snippet":	"We sponsor this event to encourage the love of learning for engineering and science and support an initiative that clearly brings out the fun and innovation of engineering. The opportunities in robotics are endless and we encourage you to follow your passion and make a difference in the world."
		 },
		 {"Source":"STEM Education Awareness",
			 "Date":"2016-01-01",
			 "URL":"http://www.stemeducationawareness.ca/canadian-innovation/challenging-the-barriers-between-girls-and-stem",
			 "Thumbnail":"../images/beakerhead.jpg",
			 "Button":"Read Full Article",
			 "Title":"Girls in STEM Programs",
			 "Snippet":	"Programs exist both nationally and provincially to encourage females to enter STEM careers, like Intimitrons from Area 51, an all-girl robotics team in Calgary. As well, the AWSN offers a scholarship to third-year female undergrads to encourage them to stick to their studies. Bjarnason says women often drop out in year three because they fear not getting high marks or feel that 'dealing with small amounts of gender bias or sexism is not worth it'."
		 }

	 ],

	 "Videos": [
		 {"Source":"CTV Feature",
	 		"Date":"2018-04-06",
			"URL":"https://calgary.ctvnews.ca/student-teams-putting-their-robots-to-the-test-at-calgary-competition-1.3874967",
			"Thumbnail":"../images/ctv.jpg",
			"Button":"Watch Video",
			"Title":"Our CTV feature!",
			"Snippet":"In our pits at the 2018 Power Up competition, we got a chance to meet CTV interviewers and present our robot Agatha and talk about our dreams for the future, and our competition season. This was shown on the CTV news website in a featurette",
		},
		{"Source":"Mount Royal TV",
		"Date":"2016-04-25",
		"URL": "https://youtu.be/yQ0omNn3CsM",
		"Thumbnail":"../images/mru.jpg",
		"Button":"Watch Video",
		"Title":"MRU Meets Stella!",
		"Snippet":"We had the fantastic opportunity to meet up with Mount Royal University to present our robot Stella! They filmed us a week before the Western Canada Regional here in Calgary. This video was shown on MRU TV later that week."
		},
		{"Source":"ESAA",
		"Date":"2015-10-20",
		"URL":"https://youtu.be/_F3fUPPLfr8",
		"Thumbnail":"../images/esaa.jpg",
		"Button":"Watch Video",
		"Title":"Our Sponsor Gets an Award",
		"Snippet":"The inaugural ESAA Industry Award for Community Involvement was recently awarded to Terex Environmental, an Intimitrons Sponsor. The award was presented to an ESAA member organization that has shown an outstanding commitment to bettering their community through active fundraising and community involvement."
		},
		{"Source":"Calgary Herald",
		"Date":"2016-04-04",
		"URL":"https://youtu.be/lET9pXSdlZI",
		"Thumbnail":"../images/herald.jpg",
		"Button":"Watch Video",
		"Title":"Competition Warm-up Highlights",
		"Snippet":"Calgary's Olympic Oval was buzzing Monday with high school students preparing for an obstacle course involving moats, drawbridges, gates and medieval towers."
		},
		{"Source":"Intimitrons",
		"Date":"2016-01-16",
		"URL":"https://youtu.be/kFpwdyFs-cQ",
		"Thumbnail":"../images/safety.jpg",
		"Button":"Watch Video",
		"Title":"Intimitrons Safety Animation",
		"Snippet":"This is our 2016 Safety Animation! The set theme this year was both 'Medieval' and 'Safety in the Workspace'. As our second ever safety animation, our team is a bit more experienced in the animation process. We enjoyed making this video, and we hope you enjoy watching it just as much!"
		},
		{"Source":"Intimitrons",
		"Date":"2015-01-05",
		"URL":"https://youtu.be/-N5bFvE4i-w",
		"Thumbnail":"../images/safety2015.jpg",
		"Button":"Watch Video",
		"Title":"Intimitrons Safety Animation",
		"Snippet":"This is the Intimitrons from Area 51's first ever safety animation for the FIRST Robotics Competition! This is the first animation done by our animating team, and lots of time and effort went into this. We are very proud!"
		}

	]};

	if(mediaType === "Articles") { return data.Articles; }
	else if(mediaType === "Videos") { return data.Videos; }
	else { alert("internal_error: invalid media type " + mediaType); }

}

function getMenuDivId(Title) {
	var id = Title.toLowerCase();
	id.replace(/\s/g, "-");
	return id;
}

function displayMediaMenu(mediaType,divId) {

	var media = getMediaData(mediaType);
	media.sort(sortBy("Date"));

	var html = "<div class=\"trons-purple-bkgnd m-0 p-5\">";
	html += "<h1 class=\"text-center\">" + mediaType + "</h3>";
	html += "<ul class=\"nav flex-column\">";

	for(var i=media.length-1; i >= 0; i--) {

		var id = getMenuDivId(media[i].Title);

		if(i != media.length-1) {
				html += "<div class=\"text-box-separator\"></div>";
		}
		html += "<li class=\"nav-item trons-bullet\"><a href=\"#" + id + "\" class=\"nav-link\"> " + media[i].Title + "<br><h6>" + media[i].Source + "</h6><h6>" + moment(media[i].Date).format("MMMM Do YYYY") + "</h6></a></li>";
	}
	html += "</ul></div>";
	document.getElementById(divId).innerHTML = html;
}

function displayMediaRow(mediaType,divId) {

	var media = getMediaData(mediaType);
	media.sort(sortBy("Date"));

	var html = "";
	for(var i=media.length-1; i >= 0; i--) {

		var id = getMenuDivId(media[i].Title);

		html += "<div class=\"row mb-5\" style=\"height:50px\" id=\"" + id + "\"></div>";

		html += "<div class=\"row mt-5 mb-5\">";
		html += "  <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5\">";
		html += "    <img src=\"" + media[i].Thumbnail + "\" width=\"90%\" class=\"animated fadeIn wow\">";
		html += "  </div>";
    html += "  <div class=\"col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12\">";
		html += "    <h3>" + media[i].Title + "</h3>";
		html += "    <div class=\"d-flex justify-content-between align-items-end\">";
		html += "      <div class=\"p-0 m-0\">";
		html += "        <h6 class=\"p-0 m-0\">" + media[i].Source + "</h2>";
		html += "      </div>";
		html += "      <div class=\"p-0 m-0\">";
		html += "        <h6 class=\"p-0 m-0 text-right\">" + moment(media[i].Date).format("MMMM Do YYYY") + "</h4>";
		html += "      </div>";
		html += "    </div>";
		html += "    <p>" + media[i].Snippet + "</p>";
		html += "    <a href=\"" + media[i].URL + "\" class=\"btn trons-green-button trons-small-button\">" + media[i].Button + "</a>";
		html += "  </div>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;
}
