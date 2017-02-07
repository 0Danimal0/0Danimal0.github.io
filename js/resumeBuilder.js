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
    "welcomeMessage": "Strong work ethic, lifelong learner, driven for success, and great teammate.",
    "skills": ["JS/HTML/CSS", "JQuery", "React.js", "Backbone.js", "knockout.js", "Bootstrap", "GIT", "AJAX", "UX Experience"],
    "biopic": "images/danheadshot.jpg"
};

var education = {
    "schools": [{
        "name": "Arizona State University",
        "location": "900 Cady Mall, Tempe, AZ 85287",
        "degree": "BS, Liberal Arts in Community Development",
        "dates": "2011 ",
        "majors": ["Urban Planning, focus on design & community engagement"],
        "url": "https://geoplan.asu.edu/degree-programs/undergraduate-degrees/urban-planning"
    }],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "April to July, 2016 ",
        "description": "Broad introduction to modern front end developer languages and tools. Education includes experience with HTML5, CSS, JavaScript, Python, Git / GitHub, AJAX, Google APIs, Responsive Design, \
                        Grunt, HTML Canvas, website performance optimization, browser rendering optimization, and much more. ",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};


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
                        architecture, data element utility. -- Exposure to UX research & design, agile Scrum methodologies, Lean UX & Start-Up,\
                        public speaking, quality assurance, and continuously learning new technologies while working through projects."
    }]
};


var projects = {
    "projects": [{
        "title": "Vizzda, Version 3",
        "dates": "2014-15",
        "description": "Usability specialist on UX design team. Experience conducting user research and designing information architecture \
                        to create a SaaS mapping interface for a company that produces the most accurate and timely commercial real estate data possible.",
        "images": [{"image": "images/dailyFeed.jpg", "caption": "This is the Vizzda home map filter set that is used to visualize the entire database for real estate brokers."},
                  {"image": "images/propertyPage.jpg", "caption": "Individual property details page that reflect respecitve property type, events, and stakeholders."}
                  ],
        "url": "https://vizzda.com/"
    },{
        "title": "Social Media Template Design",
        "dates": "2015-2016",
        "description": "As we expanded into the Miami market in 2015, I took charge of the social media efforts by designing templates for future automation\
                        as well as drafting the conetent strategy for each media platform. Our marketing campaign used blogs, Infusionsoft emails, and all major social\
                        outlets.",
        "images": [
            {"image": "images/grandcanyon.jpg", "caption": "Social media content."},
            {"image": "images/proposedlots.jpg",  "caption": "Social media content."},
            {"image": "images/derito.jpg",  "caption": "Infusionsoft email campaign."}
          ],
        "url": "https://github.com/0Danimal0/Traverse-City-Hotspot-Map",
    },{
        "title": "Neighborhood Map: Udacity Project",
        "dates": "2016",
        "description": "The fifth project for the Udacity FEND program. The goal is to create a Google Maps API webapp using knockout.js\
                         and display information from a third party API; I used Yelp). The packages I utilized include knockout.js for \
                         declarative bindings, Bootstrap, jQuery, and a Oauth-Signature generator by bettiolo. This project is built mobile\
                         first.",
        "images": [
            {"image": "images/drawer_closed.jpg", "caption": "Filter drawer is closed in this picture."},
            {"image": "images/drawer_open.jpg",  "caption": "Filter drawer is open in the picture."},
            {"image": "images/drawer_filter.jpg",  "caption": "Filter drawer is open and filtering is in action."}
          ],
        "url": "https://github.com/0Danimal0/Traverse-City-Hotspot-Map",
    },  {
        "title": "Vizzda Data Entry Interface UX",
        "dates": "2014-2015",
        "description": "Tasked with designing much of the content management system used by the research team to populate a database \
                        of commercial real estate properties. Each input item in the CMS was uniquely researched. Optimizing user ease \
                        of use and speed through form completion were essential business requirements.",
        "images": [{"image": "images/cms_base.jpg", "caption": "This is the initial page of the content management system. All of the tabs additional forms can be seen."}],
        "url": "https://vizzda.com/",
    }
  ]
};


////////////////////////////////////////////////

//ViewModel

//Replace %data% placeholder with contact content from Model.
bio.display = function() {
        //Display header.
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        //Display biopics.
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedbiopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);
    if (bio.contacts) {
        //Display contact info at header and footer.
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);
    }
    if (bio.skills) {
        //Display skills.
        $("#header").append(HTMLskillsStart);
          //loop through each skill and append it to the placeholder in helper.js
          for (i = 0; i<bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
          }
    }
};
bio.display();




//Replace %data% placeholder with work experience content from Model.
work.display = function() {
  //Loop through each job and append it to the placeholder in helper.js
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployerLink = HTMLworkEmployer.replace("#", job.webSite); //employer
    var formattedEmployer = formattedEmployerLink.replace("%data%", job.employer); //employer
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title); //position
    $(".work-entry:last").append(formattedEmployer + formattedTitle); // concat of employer & position

    var formattedDates = HTMLworkDates.replace("%data%", job.dates); //dates worked
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", job.location); //location worked
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description); //description of work
    $(".work-entry:last").append(formattedDescription);
  })
}
work.display();



//Replace %data% placeholder with projects content from Model.
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedTitleLink = formattedTitle.replace("#", project.url);
        $(".project-entry:last").append(formattedTitleLink);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
          $(".project-entry:last").append(HTMLprojectImageContainerOpen);
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace(/%data%/g, image.image);
                var formattedImageCaption = formattedImage.replace("%caption%", image.caption);
                $(".row-lightbox:last").append(formattedImageCaption);
            });
//            project.images.forEach(function(caption) {

//            })
          };
        });
      }

projects.display();


education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolNameLink = formattedSchoolName.replace("#", school.url);
    $(".education-entry:last").append(formattedSchoolNameLink);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  });
  education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLonlineStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedOnlineTitleLink = formattedOnlineTitle.replace("#", course.url);
      $(".onlineEd-entry:last").append(formattedOnlineTitleLink);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      $(".onlineEd-entry:last").append(formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
      $(".onlineEd-entry:last").append(formattedOnlineDates);

      var formattedOnlineDescription = HTMLonlineDesciption.replace("%data%", course.description);
      $(".onlineEd-entry:last").append(formattedOnlineDescription);
  });
}
education.display();



//Changes the format of the name to ±capitalize the last name.
function inName(name) {
    var fullName = name.trim().split(" ");
    var first = fullName[0].slice(0,1).toUpperCase() + fullName[0].slice(1).toLowerCase();
    var last = fullName[1].toUpperCase();
    return first + " " + last;
}


$("#mapDiv").append(googleMap);
