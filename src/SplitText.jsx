import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete = () => {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = Array.from(containerRef.current.querySelectorAll(".split-letter"));

    gsap.fromTo(
      letters,
      from,
      {
        ...to,
        duration: duration,
        ease: ease,
        delay: delay / 1000, // convert ms to seconds
        stagger: 0.05,
        onComplete: onLetterAnimationComplete,
      }
    );
  }, []);

  const split = () => {
    if (splitType === "chars") {
      return text.split("").map((char, index) => (
        <span key={index} className="split-letter inline-block">
          {char}
        </span>
      ));
    } else if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span key={index} className="split-letter inline-block mr-1">
          {word}
        </span>
      ));
    } else {
      return text;
    }
  };

  return <div ref={containerRef} className={className}>{split()}</div>;
};

export default SplitText;
