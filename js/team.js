// JSON Document

function getTeamData(groupName) {

	var data = {
	"trons": [
		{"Name":"Brylee","Year":2017,"Tagline":"Brylee is new to our team this year and wants the full robotics expirience. She enjoys electronic components and is super excited for the Power Up competion.","Photo":"images/brylee.jpg"},
		{"Name":"Liz","Year":2017,"Tagline":"Liz is a grade 12 student who is passionate about robotics and wants to apply her knowledge to the aerospace industry.","Photo":"images/liz.jpg"},
		{"Name":"Emma C","Year":2016,"Tagline":"Emma C. is a second-year Intimitron and is also a grade 10 student. She loves robotics, especially using strategies to help in building a robot! She’s also the main team programmer this year.","Photo":"images/emmac.jpg"},
		{"Name":"Emma Z","Year":2016,"Tagline":"Emma Z. is the smart-but-silent type. She enjoys building mechanisms and was a huge part of constructing Ophelia! She’s in grade 8 and this is her second year on the team. The robotics enviroment is definatly her in her natural habitat.","Photo":"images/emmaz.jpg"},
		{"Name":"Judy","Year":2016,"Tagline":"Judy is in grade 9 and is an expert at writing sponsorship emails and welding! She’s also enjoys learning how to code and website designing. This year she will again be part of the drive team. ","Photo":"images/judy.jpg"},
		{"Name":"Julia","Year":2017,"Tagline":"Julia is new to our team this year and has been dancing for more than 10 years. She has recently been working with with electronics such as Arduino and loving it. ","Photo":"images/julia.jpg"},
		{"Name":"Julianna","Year":2017,"Tagline":"Like most of us, this is Julianna's first year on the team. She is 15 and loves to learn new things about robotics and engineering. This season she is super phyched for the building process and getting to know her team better.","Photo":"images/julianna.jpg"},
		{"Name":"Mackenzie","Year":2017,"Tagline":"Mackenzie is a first year member of the Intimitrons and currently in grade 10. Over the past 4 months she was been working on programing flashy blinky lights on Arduino and really enjoys design challenges.","Photo":"images/mac.jpg"},
		{"Name":"Naomi","Year":2017,"Tagline":"Naomi likes robots and is in grade 9. She likes to build and code robots. This is her second year on the team.","Photo":"images/naomi.jpg"},
		{"Name":"Nikka","Year":2017,"Tagline":"Awesome robot girl.","Photo":"images/nikka.jpg"},
		{"Name":"Sarah","Year":2015,"Tagline":"Sarah is currently in grade 11 and loves robotics. She is on the drive and mec/fab teams and was driver one during Ophelia’s season. In the future, Sarah hopes to develop robot legs as she is constantly injuring herself and on crutches.","Photo":"images/sarah.jpg"},
		{"Name":"Saskia","Year":2017,"Tagline":"Saskia is currently in grade 9. This is her first year with the team. She enjoys working with robots and loves robotics.","Photo":"images/saskia.jpg"},
		{"Name":"Shuyang","Year":2017,"Tagline":"Shuyang is currently in grade 9. This is her first year in the team, she is still exploring the world of robotics and finds it very interesting.","Photo":"images/shuyang.jpg"},
		{"Name":"Sraddha","Year":2017,"Tagline":"Sraddha is currently in grade 8. This is her first year on the team, she enjoys programming and driving robots.","Photo":"images/sraddha.jpg"},
		//{"Name":"Tayla","Year":2017,"Tagline":"Tayla is a first year intimitron who is currently in Grade 11. She enjoys learning code, exploring the world of design and is very interested in robotics. It is her goal to apply what she has learned for the near future.","Photo":"images/Logo-Alien-Only.svg"},
		{"Name":"Tomoe","Year":2016,"Tagline":"Tomoe is in Grade 9, this is her second year on the team. She's super enthusiastic and has a fantastic sense of humor. Not only is she very passionate for robotics, but she loves to play sports and play the violin.","Photo":"images/tomoe.jpg"}
	],
	"mentors": [
		{"Name":"Alan","Year":2012,"Tagline":"Alan is one of the awesome mentors from Area 51. Alan is very dedicated and comes very often to meetings to help with whatever is needed. This is his third year mentoring the team. He has helped us start a safety program, and also has guided us in project management, design and assembly.","Photo":"images/alan.jpg"},
		{"Name":"Chris","Year":2016,"Tagline":"This is Chris’ second year with the Intimitrons. He is a mechanical engineering student and is passionate about working with youth.","Photo":"images/chris.jpg"},
		{"Name":"Zach","Year":2016,"Tagline":"This is Zach’s first year with the Intimitrons. He is a mechanical engineering graduate and has always had a passion for making things, and is excited to pass that excitement on to the team.","Photo":"images/zach.jpg"},
		{"Name":"Rachael","Year":2012,"Tagline":"Rachael has been involved with the Intimitrons since their founding in late 2012. She is a graduate student in Electrical Engineering at the University of Calgary, and the director of the Schulich Community Robotics Program (SCRP). She is extremely passionate about youth robotics initiatives, and has learned far more from the Intimitrons than they will likely ever learn from her.","Photo":"images/rachael.jpg"},
		{"Name":"Kevin","Year":2013,"Tagline":"Kevin is the super awesome mechanical and fabrication mentor from QSine. This is Kevin’s fourth year with the team and he has been kind enough to share his knowledge and his shop with the Intimitrons.","Photo":"images/kevin.jpg"},
		{"Name":"Kristopher","Year":2016,"Tagline":"Kris is mechanical engineer studying at the University of Calgary and is currently in his second year of mentoring the Intimitrons. He has always a passion to build and design things, so he joined the team! We all have learned so much from him and hope he will be continuing with us for many years to be.","Photo":"images/kristopher.jpg"},
		{"Name":"Paolo","Year":2016,"Tagline":"This is Paulo’s second year with the Intimitrons. He is a programming genius and an awesome team photographer! Check out his photos on the team’s Flickr.","Photo":"images/paolo.jpg"},
		{"Name":"Tami","Year":2016,"Tagline":"She is a programmer. She has a daughter named Ms. Amalia. Tami has played a large part in building Ophelia this year.","Photo":"images/tami.jpg"},
		{"Name":"Kirsty","Year":2016,"Tagline":"This is Kirsty’s second year with the Intimitrons. She is an electrical engineering student and she is excited to encourage STEM to interested youth.","Photo":"images/Logo-Alien-Only.svg"},
		{"Name":"Leo","Year":2017,"Tagline":"Leo is a master machinst, he taught us how to solder!","Photo":"images/leo.jpg"},
		{"Name":"Colin","Year":2016,"Tagline":"Colin is a Mechanical engineering student that coaches us on building and pneumatics.","Photo":"images/colin.jpg"},
		{"Name":"Laura","Year":2017,"Tagline":"Laura is an electrical engineer who works with TransCanada in the oil and gas industry. In her spare time, she dedicates her time to volunteering with youth intrested in STEM.","Photo":"images/laura.jpg"},
	],
	"alumni": [
		{"Name":"Amanda","Year":"2012-2014","Tagline":"Amanda joined Intimitrons this year driven by her interest in the field of robotics. She is part of the design and fabrication teams, and her goal is to learn the basics of fabrication. At school, she participates in school clubs, such as Amnesty and Science club, as well as playing percussion in Symphonic Band. Other than robotics and clubs, volunteering at the Canadian Blood Services is also a big part of her life. During her free time, she plans to read and exercise, yet ends up watching K-drama and painting. She is very excited to partake in building an amazing robot this season!","Photo":"images/amanda.jpg"}
	]
	};
	if(groupName === "trons") { return data.trons; }
	else if(groupName === "mentors") { return data.mentors; }
	else if(groupName === "alumni") { return data.alumni; }
}


function displayTeamGrid(groupName,divId) {

	var team = getTeamData(groupName);
	team.sort(sortBy("Name"));

	var html = "";
	var dmult = 0;
	for(var i=0; i < team.length; i++) {
		if(i % 4 == 0) { dmult = 0; }
		else { dmult += 1; }
		html += "<div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 center-block text-center\">";
		html += "<div class=\"circle-img animated fadeInUp wow\" data-wow-delay=\"" + 0.1 * dmult + "s\" style=\"background-image:url('" + team[i].Photo + "')\"></div>";
		html += "<h4>" + team[i].Name + "</h4>";
		if(isInt(team[i].Year)) {
			html += "<h5 class=\"heading-separator\">Since " + team[i].Year + "</h5>";
		} else {
			html += "<h5 class=\"heading-separator\">" + team[i].Year + "</h5>";
		}
		html += "<p>" + team[i].Tagline + "</p>";
		html += "</div>";
	}
	document.getElementById(divId).innerHTML = html;
}
