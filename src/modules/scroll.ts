import { useCallback, useEffect, useRef } from "react";

const Scroll = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef<any>();

  const handleDirection = (name: any) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(1.6rem, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      case "right2":
        return "translate3d(-2.6rem, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    } else {
      current.style.transform = handleDirection(direction);
      current.style.opacity = 0;
    }
  }, []);

  useEffect(() => {
    let observer: any;
    const { current } = element;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default Scroll;
