const buttonAbout = document.querySelector('#aboutBtn')
const buttonHome = document.querySelector('#homeBtn')
const buttonWork = document.querySelector('#workBtn')
const buttonSkills = document.querySelector('#skillsBtn')
const buttonProjects = document.querySelector('#projectsBtn')
const buttonTestimonial = document.querySelector('#testimonialBtn')
const buttonContact = document.querySelector('#contactBtn')

document.getElementById('About').addEventListener("click", goToAbout)
document.getElementById('WorkandEducation').addEventListener("click", goToWork)
document.getElementById('Skills').addEventListener("click", goToSkills)
document.getElementById('Projects').addEventListener("click", goToProjects)
document.getElementById('Testimonials').addEventListener("click", goToTestimonial)
document.getElementById('Contact').addEventListener("click", goToContact)
document.getElementById('last').addEventListener("click", goToLast)

var place;

// function indicatorFunction(){
//     let indicate = document.getElementsByClassName("indicator")[0]
    
//     if(place !== 'visitedAbout'){
        
//     }
// }

function wordShuffle (words, id){
  var target = document.getElementById(id);
  var i = 0;
  var shuffleShow = document.getElementById('theWords');
  var visible = true;
   window.setInterval(function(){
      target.innerHTML = words[i];
      i++;
      if(i == words.length){
      i = 0;
    }
  }, 4000)
  window.setInterval(function() {
    if (visible === true) {
      shuffleShow.className = 'shuffling hidden'
      visible = false;

    } else {
      shuffleShow.className = 'shuffling'

      visible = true;
    }
  }, 2000)
}

wordShuffle(['INTROVERT.', 'CODER.', 'ARTIST.', 'GAMER.', 'KINDA CRINGE?', 'WHAT IS THIS BG?'], "text")


function myFunction() {
    let barOne = document.getElementsByClassName("bar1")[0];
    let barTwo = document.getElementsByClassName("bar2")[0];
    let barThree = document.getElementsByClassName("bar3")[0];
    let conTain = document.getElementsByClassName("container1")[0];

    barOne.classList.toggle("change");
    barTwo.classList.toggle("change");
    barThree.classList.toggle("change");
    conTain.classList.toggle("change");
  }

  function openMenu(){
    let menu = document.getElementsByClassName("navigation")[0];
    

    menu.classList.toggle("active")
    
  }

let indicate = document.getElementsByClassName("indicator")[0]
let indicate1 = document.getElementsByClassName("indicator")[1]
let indicate2 = document.getElementsByClassName("indicator")[2]
let indicate3 = document.getElementsByClassName("indicator")[3]
let indicate4 = document.getElementsByClassName("indicator")[4]
let indicate5 = document.getElementsByClassName("indicator")[5]
let indicate6 = document.getElementsByClassName("indicator")[6]

function goToAbout(){

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")
    }
    

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place != 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }

        indicate2.classList.toggle("indShow")
    
    }

    

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

    if(place !== 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

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

    if(place == 'visitedHome'){
        indicate.classList.toggle("indShow")
    }

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
        indicate1.classList.toggle("indShow")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate2.classList.toggle("indShow")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate3.classList.toggle("indShow")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate4.classList.toggle("indShow")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate5.classList.toggle("indShow")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate6.classList.toggle("indShow")

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