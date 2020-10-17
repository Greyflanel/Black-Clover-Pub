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
  
  gsap.set(".contact-clover", {
    x: "40vw",
    y: "40vh",
  });
  gsap.to(".contact-clover", {
    x: "50vw",
    scale: 3,
    scrollTrigger: {
      trigger: "#contact",
      scroller: ".container",
      scrub: 3.5,
      ease: "power2",
      start: "top center",
      end: "top 85%",
      toggleActions: "restart complete none reset",
    },
  });
  gsap.set(".bottom-logo", {
    x: "-8vw",
    y: "10vh"
  })
  gsap.set(".bottom-clover", {
    x: "60vw",
    y: "10vh"
  })
  gsap.set("footer", {
    y: "160vh",
    scale: 0.8
  })
};
gsap.to("footer", {
  y: "-11vh",
  scrollTrigger: {
    trigger: "#contact",
    scroller: ".container",
    scale: 1,
    scrub: 7,
    ease: "power2-in",
    start: "top 25%",
    end: "bottom bottom",
    toggleActions: "restart complete reverse reset"
  },
});


ScrollTrigger.addEventListener("scrollEnd", () =>
  console.log("scrolling ended!")
);

scrollAnimation();