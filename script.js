const buttonAbout = document.querySelector('#aboutBtn')
const buttonHome = document.querySelector('#homeBtn')
const buttonWork = document.querySelector('#workBtn')
const buttonSkills = document.querySelector('#skillsBtn')
const buttonProjects = document.querySelector('#projectsBtn')
const buttonTestimonial = document.querySelector('#testimonialBtn')
const buttonContact = document.querySelector('#contactBtn')

var place;



function goToAbout(){

    if(place !== 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
    }
    

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }


    // omw, look at the comparison between the code below and the code above. They do the exact same thing.
//   let menu = document.getElementsByClassName("sections")[0];
//   let menu2 = document.getElementsByClassName("sections")[1];
//   let menu3 = document.getElementsByClassName("sections")[2];
//   let menu4 = document.getElementsByClassName("sections")[3];
//   let menu5 = document.getElementsByClassName("sections")[4];
//   let menu6 = document.getElementsByClassName("sections")[5];
//   let menu7 = document.getElementsByClassName("sections")[6];
  
//   menu.classList.toggle("about")
//   menu2.classList.toggle("about")
//   menu3.classList.toggle("about")
//   menu4.classList.toggle("about")
//   menu5.classList.toggle("about")
//   menu6.classList.toggle("about")
//   menu7.classList.toggle("about")

  
  buttonAbout.disabled = true;
  buttonHome.disabled = false;
  buttonWork.disabled = false;
  buttonSkills.disabled = false;
  buttonProjects.disabled = false;
  buttonTestimonial.disabled = false;
  buttonContact.disabled = false;

   place = 'visitedAbout';
}

function goToHome(){

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = true;
    buttonWork.disabled = false;
    buttonSkills.disabled = false;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = false;

    place = 'visitedHome';

    
}

function goToWork(){

    if(place !== 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
    
    }

    

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = true;
    buttonSkills.disabled = false;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = false;

    place = 'visitedWork';
    
}

function goToSkills(){

    if(place !== 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = false;
    buttonSkills.disabled = true;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = false;

    place = 'visitedSkills';

    
}

function goToProjects(){

    if(place !== 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = false;
    buttonSkills.disabled = false;
    buttonProjects.disabled = true;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = false;

    place = 'visitedProjects';

}

function goToTestimonial(){

    if(place !== 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = false;
    buttonSkills.disabled = false;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = true;
    buttonContact.disabled = false;

    place = 'visitedTestimonial';

    
}

function goToContact(){

    if(place !== 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = false;
    buttonSkills.disabled = false;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = true;

    place = 'visitedContact';

    
}

function goToLast(){

    if(place !== 'visitedLast'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("last")
        }


    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }


    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }


    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }


    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }


    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }


    }

    buttonAbout.disabled = false;
    buttonHome.disabled = false;
    buttonWork.disabled = false;
    buttonSkills.disabled = false;
    buttonProjects.disabled = false;
    buttonTestimonial.disabled = false;
    buttonContact.disabled = false;

    place = 'visitedLast';

    
}