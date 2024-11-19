function showme(){

    const smNav = document.getElementById("sm-nav");

    console.log("working")
    
    smNav.classList.toggle("active");
    //  navMenu.classList.toggle("active");


    
 }



var swiper = new Swiper(".mySwiper", {
  loop:true,
  
  autoplay: {
          delay: 2000,
  },
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });




    AOS.init({
      duration: 800,
      delay: 400
    });

