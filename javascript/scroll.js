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
    
  }) 
 
}

scrollAnimation();


