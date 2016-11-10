//Model

var bio = {
    "name": "Daniel Alpers",
    "role": "Front End Programmer",
    "contacts": {
        "mobile": "(480) 980-8096",
        "email": "dan.alpers@gmail.com",
        "github": "0Danimal0",
        "location": "Scottsdale, Az"
    },
    "welcomeMessage": "Tageting an Entry-Level position in web development.",
    "skills": ["Javascript", "JQuery", "HTML5", "CSS", "GIT", "AJAX", "knockout.js","UX Experience"],
    "bioPic": "images/handball.jpg"
}

var education = {
    "schools": [{
        "name": "Arizona State University",
        "location": "900 Cady Mall, Tempe, AZ 85287",
        "degree": "BS, Liberal Arts in Community Development",
        "dates": "2011 ",
        "major": ["Urban Planning, focus on design & community engagement"],
        "url": "https://geoplan.asu.edu/degree-programs/undergraduate-degrees/urban-planning"
    }],
    "onlineEd": {
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "April to July, 2016 ",
        "description": "Broad introduction to modern front end developer languages and tools. Education includes experience with HTML5, CSS, JavaScript, Python, Git / GitHub, AJAX, Google APIs, Responsive Design, \
                        Grunt, HTML Canvas, website performance optimization, browser rendering optimization, and much more. ",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
}


var work = {
    "jobs": [{
        "employer": "Vizzda: Commercial Real Estate Data",
        "webSite": "https://vizzda.com/",
        "title": "User Manager",
        "dates": "4.5 years",
        "location": "501 S 48th St, Suite 110, Tempe, AZ 85281",
        "description": "Teammate and leader on operations side of the commercial real estate data SAAS product. \
                        Responsibilities included customer service director, data fascilitation, information design, social media \
                        graphic designer, and user advocate on the product design team. Main responsibility as \
                        customer manager honed my sentivity for the users interaction with site design, information \
                        architecture, data element utility."
    }, {
        "employer": "Levine Machine Development",
        "webSite": "http://levinemachine.com/",
        "title": "Research Intern",
        "dates": "3.5 months",
        "location": "605 E Grant St, Phoenix, AZ 85004",
        "description": "Michael Levine of Levine Machine Development is a developer & conservationist of historic \
                        building in downtown Phoenix. I managed his research into economic development \
                        financial devices in regards to case-law. This experience gave me an awareness for and strong \
                        opinions of interface design for information search through using online government data tools."
    }, {
        "employer": "MT Chargot Building Company",
        "webSite": "http://www.mtchargotbuilding.com/",
        "title": "Finish Carpenter",
        "dates": "3 years, seasonally",
        "location": "22510 Hoover Rd, Warren, MI 48089",
        "description": "Mark Chargot is a finish carpenter that practices his craft in historic neighborhood of Grosse \
                        Point, Michigan. It was working with his crew of four highly skilled tradesman that I found an \
                        affinity for focusing on small tasks in order to execute on large projects."
    }]
}


var projects = {
    "projects": [{
        "title": "Vizzda Content Management: Research & Redesign",
        "dates": "2014-2015",
        "description": "Tasked with designing much of the content management system used by the research team to populate \
                        information on commercial real estate assets. Each property, title event, and event actor required \
                        unique information architecture, yet speed and ease of use were essential business requirements.",
        "images": ["images/cms_base.jpg", "images/cms_contact_db.jpg"],
        "link": "https://vizzda.com/",
    }, {
        "title": "Vizzda Customer End Product",
        "dates": "2015",
        "description": "User advocate on design team of a mapping interface that filtered real estate content. Specialized \
                        in translating researched data assets into information stories to help achieve customer goal of \
                        discovering comparable properties to validate property pricing targets. ",
        "images": ["images/map_full.jpg", "images/map_filter.jpg", "images/dailyFeed-Land.jpg"],
        "link": "https://vizzda.com/",
    }, {
        "title": "Arcade Game: Udacity Project",
        "dates": "2016",
        "description": "Intoduction to Javascipt & HTML5 Canvas to make a frogger like 2d video game.",
        "images": ["images/arcade_game.jpg"],
        "link": "https://github.com/0Danimal0/Udacity-Arcade-Game",
    }, {
        "title": "Neighborhood Map: Udacity Project",
        "dates": "2016",
        "description": "Utilize knockout.js to build a neighbood map using the Google Map API,\
                       and maintain Model–View–Viewmodel development patter.",
        "images": ["images/map_app_shot.jpg"],
        "link": "https://github.com/0Danimal0/Neighborhood-Map_Udacity-Project",
    }
  ]
}


////////////////////////////////////////////////

//ViewModel

//header//
var displayHeader = function() {
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
}
displayHeader();


var displayBioPic = function() {
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
}
displayBioPic();


//Replace %data% placeholder with contact content from Model.
bio.display = function() {
    if (bio.contacts) {
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(formattedLocation);
    }
}
bio.display();

bio.displayContactsFooter = function() {
    if (bio.contacts) {
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#footerContacts").append(formattedLocation);
    }
}
bio.displayContactsFooter();


//Replace %data% placeholder with skills content from Model.
bio.displaySkills = function() {
    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(formattedSkill);
    }
}
bio.displaySkills();



//Replace %data% placeholder with work experience content from Model.
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

    var formattedEmployerLink = HTMLworkEmployer.replace("#",work.jobs[job].webSite); //employer
    var formattedEmployer = formattedEmployerLink.replace("%data%",work.jobs[job].employer); //employer
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title); //position
    $(".work-entry:last").append(formattedEmployer + formattedTitle); // concat of employer & position

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates); //dates worked
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location); //location worked
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description); //description of work
    $(".work-entry:last").append(formattedDescription);
    }
}
work.display();  //call the displayWork() function//



//Replace %data% placeholder with projects content from Model.
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedTitleLink = formattedTitle.replace("#", projects.projects[project].link);
        $(".project-entry:last").append(formattedTitleLink);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);


        if (projects.projects[project].images.length > 0) {
          $(".project-entry:last").append(HTMLprojectImageContainerOpen);
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace(/%data%/g, projects.projects[project].images[image])
                $(".row-lightbox:last").append(formattedImage);
            }
        }
    }
}
projects.display();


education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSchoolNameLink = formattedSchoolName.replace("#",education.schools[school].url);
    $(".education-entry:last").append(formattedSchoolNameLink);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
}
education.display();



education.onlineEdDisplay = function() {
  if (education.onlineEd != 0) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineEd.title);
        var formattedOnlineTitleLink = formattedOnlineTitle.replace("#", education.onlineEd.url);
        $(".onlineEd-entry:last").append(formattedOnlineTitleLink);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineEd.school);
        $(".onlineEd-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineEd.dates);
        $(".onlineEd-entry:last").append(formattedOnlineDates);

        var formattedOnlineDescription = HTMLonlineDesciption.replace("%data%", education.onlineEd.description);
        $(".onlineEd-entry:last").append(formattedOnlineDescription);
  }
}
education.onlineEdDisplay();



//Changes the format of the name to ±capitalize the last name.
function inName(name) {
    var fullName = name.trim().split(" ");
    var first = fullName[0].slice(0,1).toUpperCase() + fullName[0].slice(1).toLowerCase();
    var last = fullName[1].toUpperCase();
    return first + " " + last;
}


$("#mapDiv").append(googleMap);
