import { useEffect, useState } from "react";

const handleScroll = (obj) => (event) => {
  let scrollDirection = obj.scrollDirection;
  let carousel = obj.element.current;
  let start_pos = carousel.scrollLeft;
  // change in the start position -ve or +ve
  scrollDirection = 500 * scrollDirection;
  var duration = 1000;
  var startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, start_pos, scrollDirection, duration);
    // window.scrollTo(0, run);
    carousel.scrollTo(run, 0);
    if (timeElapsed <= duration) requestAnimationFrame(animation);
  }

  // this returns function in animation time duration
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
  // }
};

export default handleScroll;
