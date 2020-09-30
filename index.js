// let mqls = [
//   window.matchMedia("(min-width: 1200px)"),
//   window.matchMedia("(min-width: 1000px)"),
//   window.matchMedia("(min-width: 800px)"),
//   window.matchMedia("(min-width: 600px)"),
//   window.matchMedia("(min-width: 400px)"),
//   window.matchMedia("(min-width: 280px)"),
//   window.matchMedia("(min-width: 200px)"),
// ];

// function mediaqueryresponse() {

// }

// if (mqls[0].matches) {
    
//   } else if (mqls[1].matches) {
    
//   } else if (mqls[2].matches) {
    
//   } else if (mqls[3].matches) {
//     t
//   } else if (mqls[4].matches) {
    
//   } else if (mqls[5].matches) {
    
//   } else if (mqls[6].matches) {
    
//   }

// for (let i = 0; i < mqls.length; i++) {
//   mediaqueryresponse(mqls[i]);
//   mqls[i].addEventListener(mediaqueryresponse);
// }


function animation() {
  let tl = gsap.timeline({ repeat: 0 });
  let tlContent = gsap.timeline({ repeat: 0 })
  let tl1 = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  let tl3 = gsap.timeline({ repeat: 0 });
  let tl4 = gsap.timeline({ repeat: 0 });
  let tl5 = gsap.timeline({ repeat: 0 });
  let tl6 = gsap.timeline({ repeat: 0 });
  let tl7 = gsap.timeline({ repeat: 0 });
  let tl8 = gsap.timeline({ repeat: 0 });

  // Sets Initial Values

  tlContent.set("#clovers", { display: "block" });

  tl.set(".logo", { x: "25%", y: "52%", transform: "rotate(-25deg)" });

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
    opacity: 0
  });

  tl6.set(".clover2-text", {
    display: "none",
    opacity: 0
  });


  tl7.set(".clover3-text", {
    display: "none",
    opacity: 0
  });

  tl8.set(".clover4-text", {
    display: "none",
    opacity: 0
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
}

animation();
