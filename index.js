let mqls = [
  window.matchMedia("(min-width: 300px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 380px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 500px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 1280px)"),
];

function mediaqueryresponse(mql) {
  
  let tlLogo = gsap.timeline({ repeat: 0 });
  let tlContent = gsap.timeline({ repeat: 0 });
  let tl1 = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  let tl3 = gsap.timeline({ repeat: 0 });
  let tl4 = gsap.timeline({ repeat: 0 });
  let tl5 = gsap.timeline({ repeat: 0 });
  let tl6 = gsap.timeline({ repeat: 0 });
  let tl7 = gsap.timeline({ repeat: 0 });
  let tl8 = gsap.timeline({ repeat: 0 });

  let tlMediaQueryNav = gsap.timeline({ repeat: 0 });
  let tlMediaQuery = gsap.timeline({ repeat: 0 });
  let tlMediaQueryText = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClovers = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover1 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover2 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover3 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover4 = gsap.timeline({ repeat: 0 });

  // Sets Initial Values
  tlContent.set("#clovers", { display: "inline" });
  tlLogo.set(".logo", { display: "inline", padding: "1%", xPercent: -50, yPercent: -50, transform: "rotate(-28deg)", scale: 1.8 });

  // Clovers

  tl1.set(".clover1, .clover2, .clover3, .clover4", {
    display: "inline",
    xPercent: -50,
    yPercent: -50,
    x: "86%",
    y: "-41%",
    width: "28vw",
    transform: "rotate(-28deg)",
    filter: "blur(0.06em)",
  });

  // Setting Clover-Text

  tl5.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    display: "none",
    opacity: 0,
    scale: 0.413,
    width: "250%",
    x: "3.5%",
    y: "-2%"
  });

  
  // Clover Transitions

  tl1.to(".clover1", {
    delay: 2,
    display: "inline",
    x: "64%",
    y: "-168%",
    scale: 1.25,
    rotation: 340,
    filter: "blur(0)",
  });

  tl2.to(".clover2", {
    delay: 2,
    display: "inline",
    x: "-85%",
    y: "-105%",
    scale: 1.25,
    rotation: 365,
    filter: "blur(0)",
  });

  tl3.to(".clover3", {
    delay: 2,
    display: "inline",
    x: "-60%",
    y: "180%",
    scale: 1.25,
    rotation: 370,
    filter: "blur(0)",
  });

  tl4.to(".clover4", {
    delay: 2,
    display: "inline",
    x: "85%",
    y: "125%",
    scale: 1.25,
    rotation: 380,
    filter: "blur(0)",
  });

  // Text-Transition

  tl5.to(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    delay: 2.7,
    display: "inline",
    opacity: 1
  });
  
  // Media Queries

  // if (mqls[0].matches) {
  //   tlMediaQueryNav.set(".nav", {
  //     fontSize: "2em"
  //   })
  //   tlMediaQueryClovers.set(
  //     ".clover1, .clover2, .clover3, .clover4", {
  //       x: "5%",
  //      y: "-23%"
  //     }
  //   );
  //   tlMediaQueryText.to(
  //     ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //     {
  //       x: "30%",
  //       y: "70%",
  //       width: "300%",
  //       scale: 1
  //     }
  //   );
    
  // } else if (mqls[1].matches) {
   
  //   tlMediaQueryClover1.to(".clover1", {
  //     x: "360%",
  //     y: "-110%",
  //     delay: 2,
  //   });
  //   tlMediaQueryClover2.to(".clover2", {
  //     x: "-15%",
  //     y: "-100%",
  //     delay: 2,
  //   });
  //   tlMediaQueryClover3.to(".clover3", {
  //     x: "400%",
  //     delay: 2,
  //   });
  // } else if (mqls[2].matches) {
  //   tlMediaQuery.set("#home", {
  //     backgroundColor: "yellow",
  //   });
  //   tlMediaQueryNav.set(".nav", {
  //     fontSize: "1.7em"
  //   });
  //   tlLogo.set(".logo", {
  //     scale: 1.5,
  //     x: "-15%",
  //     y: "25%"
  //   });
  //   tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
  //     scale: 1.5,
  //     x: "81%",
  //     y: "-28%"
  //   });
  //   tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
  //     delay: 2,
  //     scale: 1.7,
  //   });
  //   tlMediaQueryClover1.to(".clover1", {
  //     x: "50%",
  //     y: "-195%",
  //     rotation: 340,
  //     delay: 2
  //   });
  //   tlMediaQueryClover2.to(".clover2", {
  //     x: "-165%",
  //     y: "-120%",
  //     delay: 2
  //   });
  //   tlMediaQueryClover3.to(".clover3", {
  //     x: "-15%",
  //     y: "208%",
  //     rotation: 360,
  //     delay: 2
  //   });
  //   tlMediaQueryClover4.to(".clover4", {
  //     x: "160%",
  //     y: "120%",
  //     rotation: 370,
  //     delay: 2
      
  //   });
  //   tlMediaQueryText.to(
  //     ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //     {
  //       x: 26,
  //       y: -2,
  //       width: "200%",
  //       fontSize: "1em"
  //     }
  //   );
    
  // } else if (mqls[3].matches) {
  //   tlMediaQuery.set("#home", {
      
  //   });
  //   tlMediaQueryNav.set(".nav", {
  //       scale: 1.8,
  //       flexDirection: "column",
  //       paddingTop: "5%",
  //     });
  //     tlMediaQuery.set(".logo", {
  //       scale: 1.6,
  //       x: "0.1%",
  //     });
  //     tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
  //       scale: 1.6,
  //       x: "136%",
  //       y: "-44%",
  //     });
  //     tlMediaQueryClover1.to(".clover1", {
  //       x: "150%",
  //       y: "-260%",
  //       delay: 2,
  //       scale: 1.8,
  //     });
  //     tlMediaQueryClover2.to(".clover2", {
  //       x: "-130%",
  //       y: "-180%",
  //       delay: 2,
  //       scale: 1.8,
  //     });
  //     tlMediaQueryClover3.to(".clover3", {
  //       x: "150%",
  //       y: "160%",
  //       delay: 2,
  //       scale: 1.8,
  //     });
  //     tlMediaQueryClover4.to(".clover4", {
  //       x: "-65%",
  //       y: "250%",
  //       delay: 2,
  //       scale: 1.8,
  //     });
  //     tlMediaQueryText.to(
  //       ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //       {
  //         fontSize: "0.835em",
  //         width: "250%",
  //         x: 8,
  //       }
  //     );
    
  
  // } else if (mqls[4].matches) {
  //   tlMediaQuery.set("#home", {
  //     backgroundColor: "purple",
  //   });
  //   tlMediaQueryNav.set(".nav", {
  //     scale: 1.8,
  //     flexDirection: "column",
  //     paddingTop: "5%",
  //   });
  //   tlMediaQuery.set(".logo", {
  //     scale: 1.8,
  //     x: "0.1%",
  //   });
  //   tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
  //     scale: 1.8,
  //     x: "153.5%",
  //     y: "-55%",
  //   });
  //   tlMediaQueryClover1.to(".clover1", {
  //     x: "150%",
  //     y: "-260%",
  //     delay: 2,
  //     scale: 2,
  //   });
  //   tlMediaQueryClover2.to(".clover2", {
  //     x: "-130%",
  //     y: "-180%",
  //     delay: 2,
  //     scale: 2,
  //   });
  //   tlMediaQueryClover3.to(".clover3", {
  //     x: "150%",
  //     y: "250%",
  //     delay: 2,
  //     scale: 2,
  //   });
  //   tlMediaQueryClover4.to(".clover4", {
  //     x: "-85%",
  //     y: "288%",
  //     delay: 2,
  //     scale: 2,
  //   });
  //   tlMediaQueryText.to(
  //     ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //     {
  //       fontSize: "0.74em",
  //       width: "200%",
  //       x: 20,
  //     }
  //   );
  // } else if (mqls[5].matches) {
  //   tlMediaQueryNav.set(".nav", {
  //       scale: 1.8,
  //       flexDirection: "column",
  //       paddingTop: "5%",
  //     });
  //     tlMediaQuery.set(".logo", {
  //       scale: 1.8,
  //       x: "0.1%",
  //     });
  //     tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
  //       scale: 1.8,
  //       x: "153.5%",
  //       y: "-55%",
  //     });
  //     tlMediaQueryClover1.to(".clover1", {
  //       x: "150%",
  //       y: "-260%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover2.to(".clover2", {
  //       x: "-130%",
  //       y: "-180%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover3.to(".clover3", {
  //       x: "150%",
  //       y: "250%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover4.to(".clover4", {
  //       x: "-85%",
  //       y: "288%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryText.to(
  //       ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //       {
  //         fontSize: "0.74em",
  //         width: "200%",
  //         x: 18,
  //       }
  //     );
    
  // } else if (mqls[6].matches) {
  //     tlMediaQueryNav.set(".nav", {
  //       scale: 1.8,
  //       flexDirection: "column",
  //       paddingTop: "5%",
  //     });
  //     tlMediaQuery.set(".logo", {
  //       scale: 1.8,
  //       x: "0.1%",
  //     });
  //     tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
  //       scale: 1.8,
  //       x: "153.5%",
  //       y: "-55%",
  //     });
  //     tlMediaQueryClover1.to(".clover1", {
  //       x: "150%",
  //       y: "-260%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover2.to(".clover2", {
  //       x: "-130%",
  //       y: "-180%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover3.to(".clover3", {
  //       x: "150%",
  //       y: "250%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryClover4.to(".clover4", {
  //       x: "-85%",
  //       y: "288%",
  //       delay: 2,
  //       scale: 2,
  //     });
  //     tlMediaQueryText.to(
  //       ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //       {
  //         fontSize: "0.65em",
  //         width: "250%",
  //         x: 7,
  //       }
  //     );
    // }
  }





    for (let i = 0; i < mqls.length; i++) {
      mediaqueryresponse(mqls[i]);
      mqls[i].addEventListener(mediaqueryresponse, {});
    }
  
