//Model

var bio = {
    "name": "Daniel Alpers",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "(480) 980-8096",
        "email": "dan.alpers@gmail.com",
        "github": "0Danimal0",
        "location": "Scottsdale, Az"
    },
    "welcomeMessage": "I would love to help your team achieve success.",
    "skills": ["Javascript", "JQuery", "HTML5", "CSS", "GIT", "CMS Design", "UX Experience",],
    "bioPic": "images/handball.jpg"
}

var education = {
    "schools": [{
        "name": "Arizona State University",
        "location": "900 Cady Mall, Tempe, AZ 85287",
        "degree": "BS, Liberal Arts in Community Development",
        "dates": "2011",
        "major": ["Urban Planning & Design", "Economics"]
    }],
    "onlineEd": {
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "April to July, 2016",
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
                        Responsibilities included customer management, data fascilitation, information design, social media \
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
                        financial devises in regards to case-law. This experience gave me an awareness for and strong \
                        opinions of interface design for information search."
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
        "description": "User end content management system information architecture...",
        "images": ["images/editPage.jpg"]
    }, {
        "title": "Vizzda Customer End Product",
        "dates": "Throughout 2015",
        "description": "New product offering",
        "images": ["images/dailyFeed-Land.jpg", "images/propertyPage.jpg"]
    }]
}


////////////////////////////////////////////////

//ViewModel

//header//
var displayHeader = function() {
$("#header").prepend(HTMLheaderRole.replace("%data%","Front End Developer"))
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

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image])
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display();


education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

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
        $(".onlineEd-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineEd.school);
        $(".onlineEd-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineEd.dates);
        $(".onlineEd-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineEd.url);
        $(".onlineEd-entry:last").append(formattedOnlineURL);
  }
}
education.onlineEdDisplay();


$(document).click(function(loc) {  //log our click locations!
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});


//This button changes the format of your name to ±capitalize the last name.
function inName(name) {
    var fullName = name.trim().split(" ");
    var first = fullName[0].slice(0,1).toUpperCase() + fullName[0].slice(1).toLowerCase();
    var last = fullName[1].toUpperCase();
    return first + " " + last;
}


$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);
