function animation() {
  let tl = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  
  
  tl2.set(".hellyeah", { x: 100, y: 20,  });
  tl2.to(".hellyeah", { x: 50, y: 300, rotation: 360, width: "35%", duration: 2.5, delay: 1 })
}
animation();
