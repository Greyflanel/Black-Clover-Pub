let mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 500px)"),
  window.matchMedia("(min-width: 410px)"),
  window.matchMedia("(min-width: 375px)"),
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
  tlLogo.set(".logo", { display: "inline", padding: "1%", xPercent: -50, yPercent: -50, transform: "rotate(-28deg)", scale: 1.83 });

  // Clovers

  tl1.set(".clover1, .clover2, .clover3, .clover4", {
    display: "inline",
    xPercent: -50,
    yPercent: -50,
    x: "85%",
    y: "-41%",
    width: "29vw",
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
    y: "-1%"
  });

  
  // Clover Transitions

  tl1.to(".clover1", {
    delay: 2,
    display: "inline",
    x: "78%",
    y: "-180%",
    scale: 1.3,
    rotation: 350,
    filter: "blur(0)",
  });

  tl2.to(".clover2", {
    delay: 2,
    display: "inline",
    x: "-85%",
    y: "-125%",
    scale: 1.3,
    rotation: 365,
    filter: "blur(0)",
  });

  tl3.to(".clover3", {
    delay: 2,
    display: "inline",
    x: "-60%",
    y: "185%",
    scale: 1.3,
    rotation: 380,
    filter: "blur(0)",
  });

  tl4.to(".clover4", {
    delay: 2,
    display: "inline",
    x: "85%",
    y: "125%",
    scale: 1.3,
    rotation: 365,
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
      fontSize: "1.5em"
    });
    
  } else if (mqls[1].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1.4em"
    })
    tlLogo.set(".logo", {
      scale: 1,
      x: "-28%",
      y: "12%",
      padding: "0.5%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 0.55,
      x: "-3%",
      y: "-15%",
    });
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 0.68,
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      x: "-130%",
      y: "-30%",
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      x: "95%",
      y: "-28%",
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      x: "45%",
      y: "42%",
    });
    tlMediaQueryClover4.to(".clover4", {
      delay: 2,
      x: "128%",
      y: "40%",
      rotation: 350,
    });
    tlMediaQueryText.to(
      ".clover2-text, .clover3-text, .clover4-text",
      {
        x: "42%",
        y: "160%",
        scale: 1.54,
      }
    );
    tlMediaQuery.to(".clover1-text", {
      scale: 1.5,
      x: "41%",
      y: "130%"
    });
    tlMediaQuery.to(".clover2-text", {
      x: "43.5%",
      y: "160%"
    })
  } else if (mqls[3].matches) {
    tlMediaQuery.set(".logo", {
      scale: 1.6
    })
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 0.9,
      x: "86px",
      y: "-45px"
    });
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 1.2
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      y: "-160%"
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      y: "-100%"
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      y: "168%"
    })
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.53,
        y: "17px"
      }
    );
    
  
  } else if (mqls[4].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1em"
    });
    
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.49,
        y: "10px"
      }
    );
  } else if (mqls[5].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "0.8em",
      paddingTop: "2%",
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.48,
        y: "8px"
      }
    );
   } else if (mqls[6].matches) {
    tlMediaQueryText.to(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
      scale: 0.41
     
    })
  }
}

    for (let i = 0; i < mqls.length; i++) {
      mediaqueryresponse(mqls[i]);
      mqls[i].addEventListener(mediaqueryresponse, {});
    }
  
