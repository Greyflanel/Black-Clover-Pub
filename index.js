let mqls = [
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 500px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 380px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 300px)"),
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
    
    
  } else if (mqls[1].matches) {
   
    tlMediaQueryClover1.to(".clover1", {
      x: "360%",
      y: "-110%",
      delay: 2,
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-15%",
      y: "-100%",
      delay: 2,
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "400%",
      delay: 2,
    });
  } else if (mqls[2].matches) {
    tlMediaQuery.set("#home", {
      backgroundColor: "yellow",
    });
    tlMediaQueryNav.set(".nav", {
      fontSize: "2em"
    });
    tlMediaQueryLogo.set(".logo", {
      scale: 2.8,
     x: 15
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1.4,
      x: 15,
    });
    
  } else if (mqls[3].matches) {
    tlMediaQuery.set("#home", {
      backgroundColor: "red",
    });
    tlMediaQueryNav.set(".nav", {
        scale: 1.8,
        flexDirection: "column",
        paddingTop: "5%",
      });
      tlMediaQuery.set(".logo", {
        scale: 1.6,
        x: "0.1%",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        scale: 1.6,
        x: "136%",
        y: "-44%",
      });
      tlMediaQueryClover1.to(".clover1", {
        x: "150%",
        y: "-260%",
        delay: 2,
        scale: 1.8,
      });
      tlMediaQueryClover2.to(".clover2", {
        x: "-130%",
        y: "-180%",
        delay: 2,
        scale: 1.8,
      });
      tlMediaQueryClover3.to(".clover3", {
        x: "150%",
        y: "160%",
        delay: 2,
        scale: 1.8,
      });
      tlMediaQueryClover4.to(".clover4", {
        x: "-65%",
        y: "250%",
        delay: 2,
        scale: 1.8,
      });
      tlMediaQueryText.to(
        ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
        {
          fontSize: "0.84em",
          width: "200%",
          x: 22,
        }
      );
    
  
  } else if (mqls[4].matches) {
    tlMediaQuery.set("#home", {
      backgroundColor: "purple",
    });
    tlMediaQueryNav.set(".nav", {
      scale: 1.8,
      flexDirection: "column",
      paddingTop: "5%",
    });
    tlMediaQuery.set(".logo", {
      scale: 1.8,
      x: "0.1%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1.8,
      x: "153.5%",
      y: "-55%",
    });
    tlMediaQueryClover1.to(".clover1", {
      x: "150%",
      y: "-260%",
      delay: 2,
      scale: 2,
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-130%",
      y: "-180%",
      delay: 2,
      scale: 2,
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "150%",
      y: "250%",
      delay: 2,
      scale: 2,
    });
    tlMediaQueryClover4.to(".clover4", {
      x: "-85%",
      y: "288%",
      delay: 2,
      scale: 2,
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        fontSize: "0.74em",
        width: "200%",
        x: 20,
      }
    );
  } else if (mqls[5].matches) {
    tlMediaQueryNav.set(".nav", {
        scale: 1.8,
        flexDirection: "column",
        paddingTop: "5%",
      });
      tlMediaQuery.set(".logo", {
        scale: 1.8,
        x: "0.1%",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        scale: 1.8,
        x: "153.5%",
        y: "-55%",
      });
      tlMediaQueryClover1.to(".clover1", {
        x: "150%",
        y: "-260%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover2.to(".clover2", {
        x: "-130%",
        y: "-180%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover3.to(".clover3", {
        x: "150%",
        y: "250%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover4.to(".clover4", {
        x: "-85%",
        y: "288%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryText.to(
        ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
        {
          fontSize: "0.74em",
          width: "200%",
          x: 18,
        }
      );
    
  } else if (mqls[6].matches) {
      tlMediaQueryNav.set(".nav", {
        scale: 1.8,
        flexDirection: "column",
        paddingTop: "5%",
      });
      tlMediaQuery.set(".logo", {
        scale: 1.8,
        x: "0.1%",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        scale: 1.8,
        x: "153.5%",
        y: "-55%",
      });
      tlMediaQueryClover1.to(".clover1", {
        x: "150%",
        y: "-260%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover2.to(".clover2", {
        x: "-130%",
        y: "-180%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover3.to(".clover3", {
        x: "150%",
        y: "250%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryClover4.to(".clover4", {
        x: "-85%",
        y: "288%",
        delay: 2,
        scale: 2,
      });
      tlMediaQueryText.to(
        ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
        {
          fontSize: "0.65em",
          width: "250%",
          x: 7,
        }
      );
    }
  }





    for (let i = 0; i < mqls.length; i++) {
      mediaqueryresponse(mqls[i]);
      mqls[i].addEventListener(mediaqueryresponse, {});
    }
  
