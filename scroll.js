gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: ".content",
});


function scrollAnimation() {
   gsap.to(".nav", {
     color: "yellow",
     filter: "brightness(500%)",
     scrollTrigger: {
       trigger: "#live-music",
       scroller: ".container",
       scrub: true,
       ease: "power1-in",
       start: "top center", //when top of herman passes the bottom viewport height
       end: "bottom 75%", //when bottom of herman passes the bottom viewport height

       //events: onEnter onLeave onEnterBack onLeaveBack
       toggleActions: "restart complete reverse reset",
       //options: play, pause, resume, reset, restart, complete, reverse,none
     },
   }); 
  gsap.to(".nav", {
    color: "white",
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
    color: "white",
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
  gsap.from(".bottom-clover", {
    rotate: "25deg",
    scrollTrigger: {
       trigger: "#footer",
       scroller: ".container",
       scrub: true,
       ease: "none",
       //events: onEnter onLeave onEnterBack onLeaveBack
       toggleActions: "play reverse none reset",
       //options: play, pause, resume, reset, restart, complete, reverse,none
     }
     
  });
  gsap.to(".bottom-clover", {
    x: "160vw",
    scale: 0.4,
    scrollTrigger: {
      trigger: "#footer",
      scroller: ".container",
      scrub: true,
      ease: "none",
      
      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "play reverse none reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  });
  // gsap.to(".bottom-clover", {
  //   rotation: 96,
  //   duration: 10,
  //   repeat: 10
  // })
}


ScrollTrigger.addEventListener("scrollEnd", () =>
  console.log("scrolling ended!")
);

scrollAnimation();
