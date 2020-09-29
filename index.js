function animation() {
  let tl = gsap.timeline({ repeat: 0 });
  let tl1 = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  let tl3 = gsap.timeline({ repeat: 0 });
  let tl4 = gsap.timeline({ repeat: 0 });

  tl.set(".logo", { x: "25%", y: "50%", transform: "rotate(-25deg)" });
  tl1.set(".clover1", {
    display: "inline",
    x: "271%",
    y: "-93%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.14em)",
  });

  tl2.set(".clover2", {
    display: "inline",
    x: "271%",
    y: "-93%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.14em)",
  });

  tl3.set(".clover3", {
    display: "inline",
    x: "271%",
    y: "-93%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.14em)",
  });

  tl4.set(".clover4", {
    display: "inline",
    x: "271%",
    y: "-93%",
    width: "16%",
    transform: "rotate(-26deg)",
    filter: "blur(0.14em)",
  });

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
    y: "-110%",
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
    rotation: 400,
    filter: "blur(0)",
  });
}

animation();
