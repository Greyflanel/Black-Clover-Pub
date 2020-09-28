function animation() {
  let tl = gsap.timeline({ repeat: 0 });
  let tl2 = gsap.timeline({ repeat: 0 });
  
  
  
  tl.set(".logo", { x: "10%", y: "50%",  transform: "rotate(-25deg)" });
  tl2.set(".clover", { x: "222%", y: "-92%", width: "16%", transform: "rotate(-26deg)", filter: "blur(0.11em)" });

  tl2.to(".clover", {
    x: "168%", y: "-50%", width: "35%", duration: 2, delay: 2, filter: "blur(0)"
  })

}


animation();
