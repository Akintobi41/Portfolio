let menuToggle = document.querySelector('.hamburger-menu');
let hamburger = document.querySelector('.menu-toggle');
let navigation = document.querySelector('.navigation');
 

menuToggle.addEventListener('click', function (e) {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
});

document.body.addEventListener('click',closeMenu)

function closeMenu(e){
    if(e.target !== hamburger && e.target !== menuToggle){ 
        navigation.classList.remove('active');
        hamburger.classList.remove('active');
    } 
}



  let form = document.querySelector('form');
  let email = document.querySelector('.mail');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  form.addEventListener('submit',sendEmail)

  function sendEmail(e){ 

      e.preventDefault();
   
    // e.preventDefault();
    if(email.value.match(pattern)){ 
     console.log("goodd")     
    }
    else{ 
         console.log("bad")

    }

  }