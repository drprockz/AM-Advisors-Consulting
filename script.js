document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin);

  /* 
    We'll create GSAP timelines (or just .to() calls) for each circle.
    Each line has 2 circles: 
      - forward (start=0 -> end=1), 
      - backward (start=1 -> end=0, with delay to offset).
  */

  // ===== LEFT: line1 (forward + backward) =====
  gsap.to("#cl1f", {
    duration: 2.5, repeat: -1, ease: "none",
    motionPath: {
      path: "#left-line1", align: "#left-line1",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cl1b", {
    duration: 2.5, repeat: -1, ease: "none", delay: 1.25,
    motionPath: {
      path: "#left-line1", align: "#left-line1",
      start: 1, end: 0, autoRotate: false
    }
  });

  // ===== LEFT: line2 (forward + backward) =====
  gsap.to("#cl2f", {
    duration: 3.0, repeat: -1, ease: "none",
    motionPath: {
      path: "#left-line2", align: "#left-line2",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cl2b", {
    duration: 3.0, repeat: -1, ease: "none", delay: 1.5,
    motionPath: {
      path: "#left-line2", align: "#left-line2",
      start: 1, end: 0, autoRotate: false
    }
  });

  // ===== LEFT: line3 (forward + backward) =====
  gsap.to("#cl3f", {
    duration: 2.2, repeat: -1, ease: "none",
    motionPath: {
      path: "#left-line3", align: "#left-line3",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cl3b", {
    duration: 2.2, repeat: -1, ease: "none", delay: 1.1,
    motionPath: {
      path: "#left-line3", align: "#left-line3",
      start: 1, end: 0, autoRotate: false
    }
  });

  // ===== RIGHT: line1 (forward + backward) =====
  gsap.to("#cr1f", {
    duration: 2.7, repeat: -1, ease: "none",
    motionPath: {
      path: "#right-line1", align: "#right-line1",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cr1b", {
    duration: 2.7, repeat: -1, ease: "none", delay: 1.35,
    motionPath: {
      path: "#right-line1", align: "#right-line1",
      start: 1, end: 0, autoRotate: false
    }
  });

  // ===== RIGHT: line2 (forward + backward) =====
  gsap.to("#cr2f", {
    duration: 3.2, repeat: -1, ease: "none",
    motionPath: {
      path: "#right-line2", align: "#right-line2",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cr2b", {
    duration: 3.2, repeat: -1, ease: "none", delay: 1.6,
    motionPath: {
      path: "#right-line2", align: "#right-line2",
      start: 1, end: 0, autoRotate: false
    }
  });

  // ===== RIGHT: line3 (forward + backward) =====
  gsap.to("#cr3f", {
    duration: 2.4, repeat: -1, ease: "none",
    motionPath: {
      path: "#right-line3", align: "#right-line3",
      start: 0, end: 1, autoRotate: false
    }
  });
  gsap.to("#cr3b", {
    duration: 2.4, repeat: -1, ease: "none", delay: 1.2,
    motionPath: {
      path: "#right-line3", align: "#right-line3",
      start: 1, end: 0, autoRotate: false
    }
  });
});