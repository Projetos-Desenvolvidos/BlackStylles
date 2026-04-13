/**
 * Equipe editorial — GSAP entrada + zoom suave nas fotos ao scroll
 */
(function () {
  "use strict";

  var section = document.querySelector(".team-editorial");
  if (!section || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    return;
  }

  var headerBits = section.querySelectorAll("[data-team-intro]");
  var cards = section.querySelectorAll("[data-team-card]");
  var imgSpot = section.querySelector(".team-spot__frame img");
  var imgMinor = section.querySelector(".team-minor__frame img");

  if (headerBits.length) {
    gsap.from(headerBits, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: section.querySelector(".team-editorial__header") || section,
        start: "top 82%",
        once: true,
      },
    });
  }

  cards.forEach(function (card, index) {
    var parts = card.querySelectorAll("[data-team-reveal]");
    gsap.from(parts, {
      opacity: 0,
      y: 52,
      duration: 1,
      stagger: 0.11,
      delay: index * 0.08,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: card,
        start: "top 86%",
        once: true,
      },
    });
  });

  if (imgSpot) {
    gsap.fromTo(
      imgSpot,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: section.querySelector(".team-spot") || section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      }
    );
  }

  if (imgMinor) {
    gsap.fromTo(
      imgMinor,
      { scale: 1 },
      {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: section.querySelector(".team-minor") || section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      }
    );
  }
})();
