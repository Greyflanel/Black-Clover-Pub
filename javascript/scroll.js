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
  gsap.from(".gallery-filler img", {
   
  })
  gsap.to(".gallery-filler img", {
    
    rotate: "-80deg",
    scrollTrigger: {
      trigger: "#gallery",
      scroller: ".container",
      scrub: 2,
      start: "top 1%",
      toggleActions: "restart complete reverse reset"
    }
  }) 
 gsap.to(".gallery-filler img", {
   y: "180%",
   
   scrollTrigger: {
     trigger: "#gallery",
     scroller: ".container",
     scrub: true,
     ease: "elastic-inOut",
     start: "top 1%",
     toggleActions: "restart complete reverse reset",
   },
 });
}

scrollAnimation();


