function animation() {
  let tl = gsap.timeline({ repeat: 0 });

  // tl.to(".landing-page", {
  //   backgroundColor: " #84dd05",
  //   borderRadius: "15%",
  //   width: "400px",
  //   height: "400px",
  //   duration: 2,
  //   border: "3px solid green",
  // });
  tl.set(".h2", { x: 700, y: 100 });
  tl.to(".h2", {
   
    x: 700,
    scale: 1.6,
    filter: "brightness: 1.2",
  });
}
animation();
