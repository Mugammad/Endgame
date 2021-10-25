const buttonAbout = document.querySelector('#aboutBtn')
const buttonHome = document.querySelector('#homeBtn')

var place;


function goToAbout(){

    for (let i = 0; i < 6; i++) {
        let location = document.getElementsByClassName("sections")[i];
        location.classList.toggle("about")
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

  
  buttonAbout.disabled = true
  buttonHome.disabled = false

   place = 'visited';
}

function goToHome(){

    if(place == 'visited'){
        for (let i = 0; i < 6; i++) {
        let location = document.getElementsByClassName("sections")[i];
        location.classList.toggle("about")
    }


  buttonHome.disabled = true
  buttonAbout.disabled = false
    }

    
}