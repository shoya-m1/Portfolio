// Animasi Scroll Berubah Warna
$(window).scroll(function () {
  let wscrol = $(this).scrollTop();

  if (wscrol >= 1) {
    $("nav").addClass("nav-black");
  } else {
    $("nav").removeClass("nav-black");
  }
});

// Animasi typing Header
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".typing", {
    loop: true,
  })
    .move(-10, { delay: 10 })
    .delete(1)
    .type("D")
    .pause(3000)
    .move(10, { delay: 100 })
    .delete(".typing", { delay: 200 })
    .type("Web Design")
    .pause(3000)
    .move(-7, { delay: 300 })
    .delete(3, { delay: 100 })
    .type("Grapich")
    .pause(3000)
    .move(null, { to: "END" })
    .go();
});

// Animasi Aos
AOS.init({
  once: true,
});


// Animation Loading Gsap
// Navbar
gsap.from(".brand", {
  duration: 1,
  x: -100,
  opacity: 0,
});
gsap.from(".nav-link", {
  opacity: 0,
  duration: 1,
  x: -100,
  stagger: 0.3,
  delay: 1,
});

// img header
gsap.from(".header-img img", {
  duration: 1,
  x: 100,
  delay: 0.7,
  opacity: 0,
});

//  jumbotron
gsap.from(".jumbotron p:nth-child(1)", {
  opacity: 0,
  duration: 1.5,
  x: -100,
  delay: 0.6,
});
gsap.from(".jumbotron h1", {
  opacity: 0,
  duration: 1.5,
  x: 100,
  delay: 1,
});
gsap.from(".jumbotron p:nth-child(3)", {
  opacity: 0,
  duration: 1.5,
  x: -100,
  delay: 1.4,
});
gsap.from(".jumbotron p:nth-child(4)", {
  opacity: 0,
  duration: 1.5,
  x: 100,
  delay: 1.8,
});
gsap.from(".jumbotron p:nth-child(5)", {
  duration: 2,
  scale: 0.5,
  delay: 2.5,
  opacity: 0,
  ease: "elastic",
  force3D: true,
});

// Style Header
gsap.from(".herro-section span:nth-child(1)", {
  duration: 1,
  y: -100,
  delay: 0.5,
  opacity: 0,
});
gsap.from(".style-header-3",{
  duration: 1,
  scale: 0.5,
  delay: 1,
  opacity: 0,
});

// Resume
gsap.from(".resume-style p",{
  scrollTrigger:".resume-style p",
  duration: 1,
  scale: 0.5,
  delay: 1,
  opacity: 0,
});
