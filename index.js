function animation() {
  let tl = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  
  
  
  tl2.to(".hellyeah", {
    x: 50,
    y: 100,
    rotation: -25,
    width: "40%",
    duration: 1,
    delay: 1,
  });
  
}
animation();
