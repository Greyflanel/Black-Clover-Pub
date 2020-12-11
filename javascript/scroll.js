gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: ".home-container",
});


function scrollAnimation() {
  
  gsap.to(".navbar-links a", {
    color: "white",
    
    scrollTrigger: {
      trigger: "#home",
      scroller: ".home-container",
      scrub: true,
      ease: "power1-in",
      start: "bottom 25%", //when top  passes the bottom viewport height
      

      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart complete reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  });
  gsap.to(".gallery-filler img", {
    y: "-200%",
    scrollTrigger: {
      trigger: "#gallery",
      scroller: ".home-container",
      scrub: true,
      
      start: "top 10%",
      toggleActions: "restart complete reverse reset"
    }
  }) 
 gsap.to(".gallery-filler img", {
   y: "220%",
   
   scrollTrigger: {
     trigger: "#gallery",
     scroller: ".home-container",
     scrub: true,
     ease: "elastic-inOut",
     start: "top 30%",
     toggleActions: "restart complete reverse reset",
   },
 });
}

scrollAnimation();


