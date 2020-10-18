let mqls = [
  window.matchMedia("(min-width: 1280px)"),
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
    x: "95%",
    y: "-168%",
    scale: 1.25,
    rotation: 350,
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
    rotation: 380,
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

  if (mqls[0].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1.5em"
    });
    tlLogo.set(".logo", {
      scale: 1,
      x: "-28%",
      y: "12%",
      padding: "1%"
    })
    tlMediaQueryClovers.set(
      ".clover1, .clover2, .clover3, .clover4", {
      scale: 0.58,
      x: "-4%",
      y: "-15%"
    }
    );
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 0.7
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      x: "-130%",
      y: "-35%"
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      x: "100%",
      y: "-35%",
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      x: "45%",
      y: "48%",
    });
    tlMediaQueryClover4.to(".clover4", {
      delay: 2,
      x: "128%",
      y: "46%",
      rotation: 350
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        x: "85%",
        y: "235%",
        scale: 2
       
      }
    );
    
  } else if (mqls[1].matches) {
    // tlMediaQueryText.to(
    //   ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
    //   {
    //     x: "10%",
    //     scale: 3
    //   }
    // );
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
      fontSize: "1.7em"
    });
    tlLogo.set(".logo", {
      scale: 1.5,
      x: "-15%",
      y: "25%"
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1.5,
      x: "81%",
      y: "-28%"
    });
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 1.7,
    });
    tlMediaQueryClover1.to(".clover1", {
      x: "50%",
      y: "-195%",
      rotation: 340,
      delay: 2
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-165%",
      y: "-120%",
      delay: 2
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "-15%",
      y: "208%",
      rotation: 360,
      delay: 2
    });
    tlMediaQueryClover4.to(".clover4", {
      x: "160%",
      y: "120%",
      rotation: 370,
      delay: 2
      
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        x: "10%",
        backgroundColor: "red",
        width: "200%",
          
      }
    );
    
  } else if (mqls[3].matches) {
    tlMediaQueryNav.set(".nav", {
          
          
    });
    tlMediaQuery.set(".logo", {
      scale: 1.8,
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1,
      x: "83%",
    });
    tlMediaQueryClover1.to(".clover1", {
      x: "38%",
      y: "-165%",
      delay: 2,
      scale: 1.28,
      rotation: 355
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-95%",
      y: "-100%",
      delay: 2,
      scale: 1.28,
      rotation: 370
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "98%",
      y: "110%",
      delay: 2,
      scale: 1.28,
      rotation: 350
    });
    tlMediaQueryClover4.to(".clover4", {
      x: "-35%",
      y: "165%",
      delay: 2,
      scale: 1.28,
      rotation: 375
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
            
        width: "250%",
        scale: 0.5,
        x: "8%",
        y: "14%"
      }
    );
    
  
  } else if (mqls[4].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1em"
    });
    tlMediaQuery.set(".logo", {
      scale: 1.8,
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      x: "83%"
    });
    tlMediaQueryClover1.to(".clover1", {
      x: "85%",
      y: "-180%",
      delay: 2,
      scale: 1.4,
    });
    tlMediaQueryClover2.to(".clover2", {
      x: "-80%",
      y: "-120%",
      delay: 2,
      scale: 1.4,
    });
    tlMediaQueryClover3.to(".clover3", {
      x: "85%",
      y: "120%",
      delay: 2,
      scale: 1.4,
    });
    tlMediaQueryClover4.to(".clover4", {
      x: "-85%",
      y: "130%",
      delay: 2,
      scale: 1.4,
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.46,
        x: "6%",
        y: "8%"
      }
    );
  } else if (mqls[5].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "0.8em",
      paddingTop: "2%",
    });
    tlMediaQuery.set(".logo", {
          
          
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      x: "84%"
         
    });
        
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.48,
        x: "6.8%",
        y: "7%"
            
            
      }
    );
    
  } else if (mqls[6].matches) {
    tlMediaQueryNav.set(".nav", {
          
      paddingTop: "2%",
    });
    tlMediaQuery.set(".logo", {
      scale: 1.8,
      x: "0.1%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 1,
      x: "86%",
      y: "-40%",
    });
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.37,
        x: "0.8%",
        y: "-5%"
      })
  }
}




    for (let i = 0; i < mqls.length; i++) {
      mediaqueryresponse(mqls[i]);
      mqls[i].addEventListener(mediaqueryresponse, {});
    }
  
