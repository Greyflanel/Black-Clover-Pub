let mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 850px)"),
  window.matchMedia("(min-width: 650px)"),
  window.matchMedia("(min-width: 450px)"),
  window.matchMedia("(min-width: 300px)"),
  window.matchMedia("(min-width: 200px)"),
 ];

 

function mediaqueryresponse(mql) {
  let tlScroll = gsap.timeline({ repeat: 0 })
  let tl = gsap.timeline({ repeat: 0 });
  let tlContent = gsap.timeline({ repeat: 0 });
  let tl1 = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  let tl3 = gsap.timeline({ repeat: 0 });
  let tl4 = gsap.timeline({ repeat: 0 });
  let tl5 = gsap.timeline({ repeat: 0 });
  let tl6 = gsap.timeline({ repeat: 0 });
  let tl7 = gsap.timeline({ repeat: 0 });
  let tl8 = gsap.timeline({ repeat: 0 });


  let tlMediaQuery = gsap.timeline({ repeat: 0 });
  let tlMediaQueryText = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClovers = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover1 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover2 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover3 = gsap.timeline({ repeat: 0 });
  let tlMediaQueryClover4 = gsap.timeline({ repeat: 0 });

  // Sets Initial Values

  tlContent.set("#clovers", { display: "block" });
  tl.set(".logo", { x: "25%", y: "52%", transform: "rotate(-25deg)" });
  tlScroll.to(".container", {
    scrollTrigger: {
      trigger: ".container",
    },
  });
  // Clovers

  tl1.set(".clover1", {
    display: "inline",
    x: "271%",
    y: "-89%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.1em)",
  });

  tl2.set(".clover2", {
    display: "inline",
    x: "271%",
    y: "-89%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.1em)",
  });

  tl3.set(".clover3", {
    display: "inline",
    x: "271%",
    y: "-89%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.1em)",
  });

  tl4.set(".clover4", {
    display: "inline",
    x: "271%",
    y: "-89%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.1em)",
  });

  // Text

  tl5.set(".clover1-text", {
    display: "none",
    opacity: 0,
  });

  tl6.set(".clover2-text", {
    display: "none",
    opacity: 0,
  });

  tl7.set(".clover3-text", {
    display: "none",
    opacity: 0,
  });

  tl8.set(".clover4-text", {
    display: "none",
    opacity: 0,
  });

  // Transitions

  tl1.to(".clover1", {
    delay: 2,
    display: "inline",
    x: "340%",
    y: "-100%",
    width: "20%",
    rotation: 360,
    filter: "blur(0)",
  });

  tl2.to(".clover2", {
    delay: 2,
    display: "inline",
    x: "10%",
    y: "-108%",
    width: "20%",
    rotation: 370,
    filter: "blur(0)",
  });

  tl3.to(".clover3", {
    delay: 2,
    display: "inline",
    x: "380%",
    y: "10%",
    width: "20%",
    rotation: 380,
    filter: "blur(0)",
  });

  tl4.to(".clover4", {
    delay: 2,
    display: "inline",
    x: "250%",
    y: "18%",
    width: "20%",
    rotation: 375,
    filter: "blur(0)",
  });

  tl5.to(".clover1-text", { delay: 2.7, display: "inline", opacity: 1 });
  tl6.to(".clover2-text", { delay: 2.7, display: "inline", opacity: 1 });
  tl7.to(".clover3-text", { delay: 2.7, display: "inline", opacity: 1 });
  tl8.to(".clover4-text", { delay: 2.7, display: "inline", opacity: 1 });
  
if (mqls[0].matches) {
  tlMediaQuery.set("#clovers", {
    scale: "0.9",
    fontSize: "1.5em",
    paddingTop: "5%"
  });
  tlMediaQueryClover1.to(".clover1", {
    x: "350%",
    delay: 2
  });
  tlMediaQueryClover2.to(".clover2", {
    x: "-3%",
    y: "-120%", 
    delay: 2
  });
  tlMediaQueryClover3.to(".clover3", {
    x: "410%",
    delay: 2,
  });
  tlMediaQueryClover4.to(".clover4", {
    x: "270%",
    delay: 2,
  });

} else if (mqls[1].matches) {
  tlMediaQuery.set("#clovers", {
    fontSize: "1em",
    scale: "0.9",
    paddingTop: "5%"
  });
  tlMediaQueryClover1.to(".clover1", {
    x: "360%",
    y: "-110%",
    delay: 2
  });
  tlMediaQueryClover2.to(".clover2", {
    x: "-15%",
    y: "-100%",
    delay: 2
  })

    } else if (mqls[2].matches) {
tlMediaQuery.set("#clovers", {
  backgroundColor: "yellow"
});
    } else if (mqls[3].matches) {
  tlMediaQuery.set("#clovers", {
    backgroundColor: "red"
  })
    } else if (mqls[4].matches) {
  tlMediaQuery.set("#clovers", {
    backgroundColor: "purple"
  })
} else if (mqls[5].matches) {
  tlMediaQuery.set("#clovers", {
    backgroundColor: "magenta",
    paddingTop: "60%",
    scale: 1.3
  });
  tlMediaQueryText.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    fontSize: "0.0999em",
    lineHeight: "90%"
  });
  tlMediaQueryClover2.to(".clover2", {
    x: "60%",
    y: "-150%",
    delay: 2,
    scale: 1.5
  });

} else if (mqls[6].matches) {
  tlMediaQuery.set("#clovers", {
    paddingTop: "49%"
  });
  tlMediaQueryText.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
    fontSize: "0.0001em",
    lineHeight: "80%",
    
  })
}

}

for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse, {});
}

