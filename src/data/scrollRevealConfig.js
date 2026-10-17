export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "20px",
  duration: 450,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 60,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 80,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 160,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 80,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 140,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 60,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 120,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".cert-card-wrap",
    animation: {
      delay: 60,
      interval: 90,
      origin: "bottom",
    },
  },
  {
    element: ".endorsement-card",
    animation: {
      delay: 80,
      origin: "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 100,
      origin: "bottom",
    },
  },
];
