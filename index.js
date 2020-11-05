let mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 950px)"),
  window.matchMedia("(min-width: 760px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 500px)"),
  window.matchMedia("(min-width: 375px)"),
  window.matchMedia("(min-width: 359px)"),
  window.matchMedia("(min-width: 300px)"),
];
window.onload = function () {
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
    let tlMediaQueryLogo = gsap.timeline({ repeat: 0 });
    let tlMediaQueryText = gsap.timeline({ repeat: 0 });
    let tlMediaQueryClovers = gsap.timeline({ repeat: 0 });
    let tlMediaQueryClover1 = gsap.timeline({ repeat: 0 });
    let tlMediaQueryClover2 = gsap.timeline({ repeat: 0 });
    let tlMediaQueryClover3 = gsap.timeline({ repeat: 0 });
    let tlMediaQueryClover4 = gsap.timeline({ repeat: 0 });

    // Sets Initial Values
    tlContent.set("#clovers", { display: "flex" });
    tlLogo.set(".logo", {
      xPercent: -50,
      yPercent: -50,
      transform: "rotate(-28deg)",
    });

    // Clovers

    tl1.set(".clover1, .clover2, .clover3, .clover4", {
      xPercent: -50,
      yPercent: -50,
      x: "85%",
      y: "-43%",
      transform: "rotate(-28deg)",
      filter: "blur(0.06em)",
    });

    // Setting Clover-Text

    tl5.set(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
      opacity: 0,
    });

    // Clover Transitions

    tl1.to(".clover1", {
      delay: 2,
      x: "-65%",
      y: "-88%",
      rotation: 705,
      filter: "blur(0)",
      width: "8rem",
    });

    tl2.to(".clover2", {
      delay: 2,
      x: "65%",
      y: "-140%",
      rotation: 710,
      filter: "blur(0)",
      width: "8rem",
    });

    tl3.to(".clover3", {
      delay: 2,
      x: "-50%",
      y: "140%",
      rotation: 720,
      filter: "blur(0)",
      width: "8rem",
    });

    tl4.to(".clover4", {
      delay: 2,
      x: "67%",
      y: "82%",
      rotation: 730,
      filter: "blur(0)",
      width: "8rem",
    });

    // Text-Transition

    tl5.to(".clover1-text, .clover2-text, .clover3-text, .clover4-text", {
      delay: 2.7,
      display: "block",
      opacity: 1,
    });

    // Media Queries

    if (mqls[0].matches) {
      tlMediaQueryLogo.set(".logo", {
        x: "-6rem",
        y: "2rem",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        x: "-1.4rem",
        y: "-0.4rem",
      });
      tlMediaQueryClover1.to(".clover1", {
        delay: 2,
        x: "-180%",
        y: "-55%",
        rotation: 730,
      });
      tlMediaQueryClover2.to(".clover2", {
        delay: 2,
        x: "140%",
        y: "-40%",
      });
      tlMediaQueryClover3.to(".clover3", {
        delay: 2,
        x: "190%",
        y: "70%",
      });
      tlMediaQueryClover4.to(".clover4", {
        delay: 2,
        x: "60%",
        y: "75%",
      });
    } else if (mqls[1].matches) {
      tlMediaQueryLogo.set(".logo", {
        x: "-6rem",
        y: "2rem",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        x: "-1.4rem",
        y: "-0.4rem",
      });
      tlMediaQueryClover1.to(".clover1", {
        delay: 2,
        x: "-200%",
        y: "-35%",
        rotation: 730,
      });
      tlMediaQueryClover2.to(".clover2", {
        delay: 2,
        x: "105%",
        y: "-40%",
      });
      tlMediaQueryClover3.to(".clover3", {
        delay: 2,
        x: "198%",
        y: "32%",
        rotation: -700
      });
      tlMediaQueryClover4.to(".clover4", {
        delay: 2,
        x: "60%",
        y: "72%",
      });
    } else if (mqls[2].matches) {
      tlMediaQueryLogo.set(".logo", {
        x: "-6rem",
        y: "2rem",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        x: "-1.4rem",
        y: "-0.4rem",
      });
      tlMediaQueryClover1.to(".clover1", {
        delay: 2,
        x: "-200%",
        y: "-35%",
        rotation: 730,
      });
      tlMediaQueryClover2.to(".clover2", {
        delay: 2,
        x: "105%",
        y: "-40%",
      });
      tlMediaQueryClover3.to(".clover3", {
        delay: 2,
        x: "198%",
        y: "32%",
        rotation: -700,
      });
      tlMediaQueryClover4.to(".clover4", {
        delay: 2,
        x: "60%",
        y: "72%",
      });
    } else if (mqls[3].matches) {
      tlMediaQueryLogo.set(".logo", {
        x: "-6rem",
        y: "2rem",
      });
      tlMediaQueryClovers.set(".clover1, .clover2, .clover3, .clover4", {
        x: "-1.4rem",
        y: "-0.4rem",
      });
      tlMediaQueryClover1.to(".clover1", {
        delay: 2,
        x: "-160%",
        y: "-75%",
        rotation: 730,
      });
      tlMediaQueryClover2.to(".clover2", {
        delay: 2,
        x: "110%",
        y: "-70%",
      });
      tlMediaQueryClover3.to(".clover3", {
        delay: 2,
        x: "160%",
        y: "70%",
      });
      tlMediaQueryClover4.to(".clover4", {
        delay: 2,
        x: "30%",
        y: "105%",
      });
    } else if (mqls[4].matches) {
      
    } else if (mqls[5].matches) {
    } else if (mqls[6].matches) {
    }
  }

  for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addEventListener(mediaqueryresponse, {});
  }

  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
};