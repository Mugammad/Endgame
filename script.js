const buttonAbout = document.querySelector('#aboutBtn')
const buttonHome = document.querySelector('#homeBtn')
const buttonWork = document.querySelector('#workBtn')
const buttonSkills = document.querySelector('#skillsBtn')
const buttonProjects = document.querySelector('#projectsBtn')
const buttonTestimonial = document.querySelector('#testimonialBtn')
const buttonContact = document.querySelector('#contactBtn')

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

function goToAbout(){

    if(place !== 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")
    }
    

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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
        indicate.classList.toggle("indicatorAbout")


    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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

        indicate.classList.toggle("indicatorWork")
    
    }

    

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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
        indicate.classList.toggle("indicatorTest")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedContact'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("contact")
        }
        indicate.classList.toggle("indicatorContact")

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
        indicate.classList.toggle("indicatorContact")

    }

    if(place == 'visitedAbout'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("about")
        }
        indicate.classList.toggle("indicatorAbout")

    }

    if(place == 'visitedWork'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("work")
        }
        indicate.classList.toggle("indicatorWork")

    }

    if(place == 'visitedSkills'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("skills")
        }
        indicate.classList.toggle("indicatorSkills")

    }

    if(place == 'visitedProjects'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("projects")
        }
        indicate.classList.toggle("indicatorProjects")

    }

    if(place == 'visitedTestimonial'){
        for (let i = 0; i < 8; i++) {
            let location = document.getElementsByClassName("sections")[i];
            location.classList.toggle("testimonial")
        }
        indicate.classList.toggle("indicatorTest")

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