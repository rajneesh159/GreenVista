const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

gsap.from(".nlink", {
  stagger: .2,
  y: 10,
  duration: 1,
  ease: Power3,
  opacity: 0
})


Shery.textAnimate("#headings h1", {

  style: 2,
  y: 10,
  delay: .3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,

});

gsap.from(".anim2", {
  y: 50,
  stagger: .3,
  opacity: 0,
  ease: Expo,
  duration: 1,


})


Shery.imageEffect("#sustain img ", {
  style: 3,
})


Shery.imageEffect("#imgntext img ", {
  style: 3,


});


gsap.from("imgntext img", {
  y: "70",
  opacity: 0,
  duration: 2,
  ease: Expo,

})


Shery.imageEffect(".imgeff img ", {
  style: 3,
})

Shery.imageEffect("#bimg img", {
  style: 5,

  gooey: true,
})




document.querySelector("#ftext button")
  .addEventListener("mouseover", function () {
    gsap.to("#future video", {
      opacity: 1,
      duration: 1,
      ease: Power4.easeOut  // Specify the correct easing function
    });
  });

document.querySelector("#ftext button")
  .addEventListener("mouseleave", function () {
    gsap.to("#future video", {
      opacity: 0,
      duration: 1,
      ease: Power4.easeOut  // Specify the correct easing function
    });
  });










