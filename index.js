let mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 760px)"),
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
  tlLogo.set(".logo", {
    display: "inline",
    padding: "1%",
    xPercent: -50,
    yPercent: -50,
    transform: "rotate(-28deg)",
    scale: 1.85,
  });

  // Clovers

  tl1.set(".clover1, .clover2, .clover3, .clover4", {
    display: "inline",
    xPercent: -50,
    yPercent: -50,
    x: "83%",
    y: "-41%",
    width: "30vw",
    transform: "rotate(-28deg)",
    filter: "blur(0.06em)",
  });

  // Setting Clover-Text

  tl5.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    display: "none",
    opacity: 0,
    scale: 0.413,
    width: "200%",
    x: "-68%",
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
    y: "195%",
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
    rotation: 355,
    filter: "blur(0)",
  });

  // Text-Transition

  tl5.to(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    delay: 2.7,
    display: "inline",
    opacity: 1,
  });

  // Media Queries

  if (mqls[0].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1.5em",
    });
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
    tlMediaQueryText.to(".clover2-text, .clover3-text, .clover4-text", {
      x: "42%",
      y: "160%",
      scale: 1.54,
    });
    tlMediaQuery.to(".clover1-text", {
      scale: 1.5,
      x: "41%",
      y: "130%",
    });
    tlMediaQuery.to(".clover2-text", {
      x: "43.5%",
      y: "160%",
    });
  } else if (mqls[1].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1.4em",
    });
    tlLogo.set(".logo", {
      scale: 0.55,
      x: "-16%",
      y: "8%",
      padding: "0.6%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 0.55,
      x: "-5%",
      y: "-13%",
    });
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 0.66,
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      x: "-128%",
      y: "-30%",
      rotation: -370,
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      x: "85%",
      y: "-28%",
      rotation: -350,
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      x: "45%",
      y: "40%",
      rotation: -360,
    });
    tlMediaQueryClover4.to(".clover4", {
      delay: 2,
      x: "128%",
      y: "40%",
      rotation: -350,
    });
    tlMediaQueryText.to(".clover3-text, .clover4-text", {
      x: "-10%",
      y: "150%",
      scale: 1.54,
    });
    tlMediaQuery.to(".clover1-text", {
      scale: 1.54,
      x: "-11%",
      y: "-135%",
    });
    tlMediaQuery.to(".clover2-text", {
      scale: 1.54,
      x: "-10%",
      y: "-145%",
    });
  } else if (mqls[2].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1.3em",
    });
    tlMediaQuery.set(".logo", {
      scale: 0.75,
      x: "-12%",
      y: "5%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 0.75,
      x: "25%",
      y: "-25%",
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      scale: 0.9,
      y: "-65%",
      x: "110%",
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      scale: 0.9,
      y: "-65%",
      x: "-105%",
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      scale: 0.9,
      y: "85%",
      x: "15%",
    });
    tlMediaQueryClover4.to(".clover4", {
      delay: 2,
      scale: 0.9,
      y: "40%",
      x: "115%",
      rotation: 370,
    });
    tlMediaQuery.to(".clover1-text, .clover2-text", {
      y: "-70%",
      x: "-41%",
    });
    tlMediaQueryText.set(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.94,
        x: "-40%",
        y: "75%",
      }
    );
  } else if (mqls[3].matches) {
    tlMediaQuery.set(".logo", {
      scale: 0.8,
      x: "-10%",
      y: "20%",
    });
    tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
      scale: 0.8,
      x: "36%",
      y: "-7%",
    });
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 1.05,
    });
    tlMediaQueryClover1.to(".clover1", {
      delay: 2,
      y: "-120%",
      x: "100%",
    });
    tlMediaQueryClover2.to(".clover2", {
      delay: 2,
      y: "-70%",
    });
    tlMediaQueryClover3.to(".clover3", {
      delay: 2,
      x: "-20%",
      y: "140%",
      rotation: 365,
    });
    tlMediaQueryClover4.to(".clover4", {
      delay: 2,
      x: "100%",
      y: "80%",
      rotation: 380,
    });
    tl8.set(".clover1-text, .clover2-text", {
      scale: 0.72,
      x: "-53%",
      y: "-30%",
    });
    tlMediaQueryText.set(".clover3-text, .clover4-text", {
      scale: 0.65,
      x: "-56%",
      y: "30%",
    });
  } else if (mqls[4].matches) {
    tlMediaQueryNav.set(".nav", {
      fontSize: "1em",
    });
    tl7.set(".clover1-text, .clover2-text", {
      scale: 0.58,
      x: "-60%",
      y: "-16%",
    });
    tlMediaQueryText.set(".clover3-text, .clover4-text", {
      scale: 0.58,
      x: "-60%",
      y: "15%",
    });
  } else if (mqls[5].matches) {
    tlMediaQueryClovers.to(".clover1, .clover2, .clover3, .clover4", {
      delay: 2,
      scale: 1.3,
    });
    tlMediaQueryNav.set(".nav", {
      fontSize: "1em",
      paddingTop: "1%",
    });
    tlMediaQuery.to(".clover1-text, .clover2-text", {
      scale: 0.5,
      x: "-64%",
      y: "-10%",
    });
    tlMediaQueryText.to(".clover3-text, .clover4-text", {
      scale: 0.49,
      x: "-64%",
      y: "10%",
    });
  } else if (mqls[6].matches) {
    tlMediaQueryText.to(
      ".clover1-text, .clover2-text, .clover3-text, .clover4-text",
      {
        scale: 0.41,
      }
    );
  }
}

for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse, {});
}
