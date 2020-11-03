

gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: ".home-container",
});


function scrollAnimation() {
  
  gsap.to(".navbar-links a", {
    color: "yellow",
    filter: "brightness(300%)",
    scrollTrigger: {
      trigger: "#home",
      scroller: ".home-container",
      scrub: true,
      ease: "power1-in",
      start: "bottom 25%", //when top  passes the bottom viewport height
      end: "center 100%", //when bottom of herman passes the bottom viewport height

      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart complete reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  });
  gsap.to(".navbar-links a", {
    color: "white",
    scrollTrigger: {
      trigger: "#gallery",
      scroller: ".home-container",
      scrub: true,
      start: "top 25%",
      end: "bottom top",
      toggleActions: "restart complete reverse reset",
    },
  });
  gsap.to(".navbar", {
    backgroundColor: "rgba(0, 0, 0, 1)",
    ease: "power1-out",
    scrollTrigger: {
      trigger: "#contact",
      scroller: ".home-container",
      scrub: true,
      start: "top 25%",
      end: "bottom 5%",
      toggleActions: "restart complete reverse reset",
    },
  });
  gsap.set(".three-d-clover", {
    rotation: 45,
    
  });
  
}

scrollAnimation();

