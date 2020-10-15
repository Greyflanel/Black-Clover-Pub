let mqls = [
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 380px)"),
  window.matchMedia("(min-width: 650px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 1000px)"),
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

  let tlMediaQueryNav = gsap.timeline({ repeat: 0});
  let tlMediaQuery = gsap.timeline({ repeat: 0 });
  let tlMediaQueryText = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClovers = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover1 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover2 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover3 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover4 = gsap.timeline({ repeat: 0 });

  // Sets Initial Values
  tlContent.set("#clovers", { display: "inline" });
  tlLogo.set(".logo", { display: "inline", padding: "1%", xPercent: -50, yPercent: -50, x: "-25%", y: "14%", transform: "rotate(-28deg)" });

  // Clovers

  tl1.set(".clover1, .clover2, .clover3, .clover4", {
    display: "inline",
    xPercent: -50,
    yPercent: -50,
    x: "5.8%",
    y: "-25%",
    width: "16vw",
    transform: "rotate(-28deg)",
    filter: "blur(0.06em)",
  });

  // Setting Clover-Text

  tl5.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    display: "none",
    opacity: 0,
    scale: 0.43,
    
  });

  
  // Clover Transitions

  tl1.to(".clover1", {
    delay: 2,
    display: "inline",
    x: "140%",
    y: "-46%",
    width: "19%",
    rotation: 350,
    filter: "blur(0)",
  });

  tl2.to(".clover2", {
    delay: 2,
    display: "inline",
    x: "-185%",
    y: "-45%",
    width: "19%",
    rotation: 365,
    filter: "blur(0)",
  });

  tl3.to(".clover3", {
    delay: 2,
    display: "inline",
    x: "200%",
    y: "60%",
    width: "19%",
    rotation: 370,
    filter: "blur(0)",
  });

  tl4.to(".clover4", {
    delay: 2,
    display: "inline",
    x: "80%",
    y: "65%",
    width: "19%",
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

  if (mqls[0].matches) {
    tlMediaQueryNav.set(".nav", {
      scale: 1.8,
      flexDirection: "column",
      paddingTop: "5%"
    })
    tlMediaQuery.set(".logo", {
      scale: 1.8,
      x: "0.1%"
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1.8,
      x: "153.5%",
      y: "-55%",
      
    })
    tlMediaQueryClover1.to(".clover1", {
      x: "150%",
      y: "-260%",
      delay: 2,
      scale: 2
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-130%",
      y: "-180%",
      delay: 2,
      scale: 2
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "150%",
      y: "250%",
      delay: 2,
      scale: 2
    });
    tlMediaQueryClover4.to(".clover4", {
      x: "-85%",
      y: "288%",
      delay: 2,
      scale: 2
    });
    tlMediaQueryText.to(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
      fontSize: "0.74em",
      width: "200%",
     x: 22
    });
    
  } else if (mqls[1].matches) {
    tlMediaQuery.set(
      ".clover2",
      {
       
       
      }
    );
  }
    
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
  //   tlMediaQuery.set("#clovers", {
  //     backgroundColor: "yellow",
  //     paddingTop: "15%",
  //     fontSize: "0.68em",
  //   });
  // } else if (mqls[3].matches) {
  //   tlMediaQuery.set("#clovers", {
  //     backgroundColor: "red",
  //     scale: "1",
  //     paddingTop: "20%",
  //     fontSize: "0.6em",
  //   });
  // } else if (mqls[4].matches) {
  //   tlMediaQuery.set("#clovers", {
  //     backgroundColor: "purple",
  //     paddingTop: "30%",
  //     fontSize: "0.51em",
  //     scale: 1.25,
  //   });
  //   tlMediaQueryClovers.set(".bottom-logo", {
  //     scale: 1.6,
  //     margin: "5% 6%"
  //   })
  //   tlMediaQueryClover1.to(".clover1", {
  //     x: "335%",
  //     y: "-130%",
  //     delay: 2
  //   })
  //   tlMediaQueryClover2.to(".clover2", {
  //     x: "55%",
  //     y: "-150%",
  //     delay: 2,
  //   });
  //   tlMediaQueryClover3.to(".clover3", {
  //     x: "340%",
  //     delay: 2
  //   });
  //   tlMediaQueryClover4.to(".clover4", {
  //     x: "200%",
  //     y: "55%",
  //     delay: 2
  //   })
  // } else if (mqls[5].matches) {
  //   tlMediaQuery.set("#clovers", {
  //     backgroundColor: "magenta",
  //     paddingTop: "60%",
  //     scale: 1.4,
  //     fontSize: "0.3em"
  //   });
   
  //   tlMediaQueryClover2.to(".clover2", {
  //     x: "60%",
  //     y: "-150%",
  //     delay: 2
  //   });
  // } else if (mqls[6].matches) {
  //   tlMediaQuery.set("#clovers", {
  //     paddingTop: "100%",
  //     backgroundColor: "orange"
  //   });
  //   tlMediaQueryText.set(
  //     ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
  //     {
  //       fontSize: "0.0001em",
  //     }
  //   );
};

for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse, {});
}

