gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: ".content",
});


function scrollAnimation() {
  
  gsap.to(".nav", {
    color: "blue",
    filter: "brightness(500%)",
    scrollTrigger: {
      trigger: "#live-music",
      scroller: ".container",
      scrub: true,
      ease: "power1-in",
      start: "top center", //when top  passes the bottom viewport height
      end: "bottom 75%", //when bottom of herman passes the bottom viewport height

      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart complete reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  });
  gsap.to(".nav", {
    color: "blue",
    filter: "brightness(500%)",
    ease: "power1-in",
    scrollTrigger: {
      trigger: "#gallery",
      scroller: ".container",
      scrub: true,
      start: "top center",
      end: "bottom 75%",
      toggleActions: "restart complete reverse reset",
    },
  });
  gsap.to(".nav", {
    color: "blue",
    filter: "brightness(500%)",
    ease: "power1-in",
    scrollTrigger: {
      trigger: "#contact",
      scroller: ".container",
      scrub: true,
      start: "top center",
      end: "bottom 75%",
      toggleActions: "restart complete reverse reset",
    },
  });
  
}

scrollAnimation();