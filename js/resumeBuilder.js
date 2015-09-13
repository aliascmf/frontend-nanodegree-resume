var bio = {
	"name" : "Christina",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "555-5555",
      	"email": "aliascmf@gmail.com",
      	"github": "aliascmf",
      	"twitter": "none",
      	"location": "Washington, DC"
      },
  	"welcomeMessage": "Hello! Ciao! 3drasti!",
	"skills": ["doing things", "punching zombies in The Last of Us", "SharePoint","C#", "VB", ".Net", "HTML5", "CSS", "javascript"],
	"biopic": "images/me.jpg",
  	"display": function (){
  		var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var HTMLskillsList ="";
		$.each(bio.skills, function(key,value){
			HTMLskillsList= HTMLskillsList + HTMLskills.replace("%data%", value);
		});
		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedEmail + formattedMobile + formattedGitHub + formattedTwitter + formattedLocation);
		$("#header").append(formattedpic + formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		$("#skills").html(HTMLskillsList);
	  }
};
var runBio =bio.display;
runBio();

var education = {
	"schools" : [
		{
			"name": "Smith College",
			"location":"Northampton, MA",
			"degree": "Bachelor of Arts",
			"majors": [
				"Computer Science",
				"Italian"
			],
			"dates": 2005,
			"url": "http:smith.edu"
		}
	],
	"onlineCourses" : [
		{
			"title":"Front-end Web Developer Nanodegree",
			"school":"Udacity",
			"date": 2015,
			"url":"http://www.udacity.com"
		},
		{
			"title":"MS",
			"school":"CBT Nuggets",
			"date": 2015,
			"url":"http://www.cbtnuggets.com"
		}
	],
	"display": function() {
			$.each(education.schools, function(key,school){
			    var educationEntry = HTMLschoolName.replace("%data%", school.name);
				educationEntry = educationEntry.replace("#", school.url);
				educationEntry = educationEntry +  HTMLschoolLocation.replace("%data%", school.location);
				educationEntry = educationEntry + HTMLschoolDegree.replace("%data%", school.degree );
			    $.each(school.majors, function(key, major) {
			        educationEntry = educationEntry +  HTMLschoolMajor.replace("%data%", major);
			    });
			educationEntry = educationEntry + HTMLschoolDates.replace("%data%", school.dates);
			var schoolStart =$(HTMLschoolStart).html(educationEntry);
			$("#education").append(schoolStart);
		});
		if(education.onlineCourses.length>0){
			$("#education").append(HTMLonlineClasses);
		}
				$.each(education.onlineCourses, function(key,onlineCourse) {
				var onlineCourseEntry=HTMLonlineTitle.replace("%data%",onlineCourse.title);
				onlineCourseEntry=onlineCourseEntry + HTMLonlineSchool.replace("%data%",onlineCourse.school);
				onlineCourseEntry=onlineCourseEntry + HTMLonlineDates.replace("%data%",onlineCourse.date);
				 var onlineURL=HTMLonlineURL.replace("#", onlineCourse.url);
				 onlineURL=onlineURL.replace("%data%", onlineCourse.url);
				 onlineCourseEntry=onlineCourseEntry + onlineURL
				 var schoolStart =$(HTMLschoolStart).html(onlineCourseEntry);
				$("#education").append(schoolStart);
			});
	}
}
var educationFunc = education.display;
educationFunc();
var work = {
	"jobs":[
	{
		"employer": "Acuity, Inc.",
		"title":"Consultant",
		"location":"Washington, DC",
		"dates":"July 2014 - present",
		"description":"SharePoint and .NET developer supporting the DoS"
	},
	{
		"employer": "Five Stones Research Corporation",
		"title":"Developer",
		"location":"Bethesda, MD",
		"dates":"July 2011 - July 2014",
		"description":"SharePoint and .NET developer"
	},
	{
		"employer": "Mid South Building Supply, Inc.",
		"title":"IT",
		"location":"Springfield, VA",
		"dates":"February 2006 - July 2011",
		"description":".NET, SXe, EDI development"
	}
	],
	"display":function() {
		$.each(work.jobs, function(key,value) {
			var workEmployer = HTMLworkEmployer.replace("%data%", value.employer);
			var workTitle = HTMLworkTitle.replace("%data%", value.title);
			var workDates =HTMLworkDates.replace("%data%", value.dates);
			var workLocation = HTMLworkLocation.replace("%data%", value.location);
			var workDescription =HTMLworkDescription.replace("%data%", value.description);
			var job = workEmployer + workTitle + workDates + workLocation + workDescription;
			var workStart = $(HTMLworkStart).html(job);
			$("#workExperience").append(workStart);

		});
	}
}
var workFunc = work.display;
workFunc();
var projects = {
	"projects": [
		{
			"title": "Rent2Military.com",
			"dates":"May 2008 - November 2008",
			"description":"insert resume description",
			"images":[
				"images/rent2militaryHome.png",
				"images/rent2militaryRoommateSearch.png",
				"images/rent2militaryPostListings.png",
			]
		},
		{
			"title": "Udacity, Project 1",
			"dates":"July 2015 - August 2015",
			"description":"Responsive web design",
			"images":[
				"images/P1-wide.png",
				"images/P1-phone.png"
			]
		}
	],
	"display": function() {
		$.each(projects.projects, function(key, project) {

			var projectEntry = HTMLprojectTitle.replace("%data%", project.title);
			projectEntry = projectEntry + HTMLprojectDates.replace("%data%", project.dates);
			projectEntry = projectEntry + HTMLprojectDescription.replace('%data%', project.description);
			$.each(project.images, function(key,image) {
				projectEntry = projectEntry +  HTMLprojectImage.replace("%data%", image);
			});
			var projectStart = $(HTMLprojectStart).html(projectEntry);
			$("#projects").append(projectStart);
		});
	}
}
var projectFunc = projects.display;
projectFunc();
$("#mapDiv").append(googleMap);


