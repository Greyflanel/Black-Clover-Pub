

gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: ".content",
});


function scrollAnimation() {
  
  gsap.to(".nav", {
    color: "red",
    scrollTrigger: {
      trigger: "#live-music",
      scroller: ".container",
      scrub: true,
      ease: "power1-in",
      start: "top 25%", //when top  passes the bottom viewport height
      end: "bottom 5%", //when bottom of herman passes the bottom viewport height

      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart complete reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  });
  gsap.to("nav", {
   
    // ease: "power1-in",
    scrollTrigger: {
      trigger: "#gallery",
      scroller: ".container",
      scrub: true,
      start: "top 25%",
      end: "bottom 5%",
      toggleActions: "restart complete reverse reset",
    },
  });
  gsap.to(".nav", {
    
    backgroundColor: "rgb(18, 22, 0.5)",
    ease: "power1-out",
    scrollTrigger: {
      trigger: "#contact",
      scroller: ".container",
      scrub: true,
      start: "top center",
      end: "bottom 5%",
      toggleActions: "restart complete reverse reset",
    },
  });
  gsap.set(".three-d-clover", {
    rotation: 45,
    
  });
  // gsap.to(".three-d-clover", {
  //   y: "2rem",
  //   scrollTrigger: {
  //     trigger: "#contact",
  //     scroller: ".container",
  //     scrub: 4,
  //     start: "top top",
  //     end: "bottom bottom",
  //     toggleActions: "restart complete reverse reset",
  //   },
  // });
    
}

scrollAnimation();