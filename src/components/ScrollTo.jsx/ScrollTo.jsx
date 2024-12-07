import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function ScrollTo({ id, label, setActiveSection, activeSection }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id); // Mark this section as active
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const target = document.getElementById(id);
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [id, setActiveSection]);

  const isInView = activeSection === id;
  
  return (
    <Link
      to={id}
      smooth={true}
      duration={400}
      offset={-60}
      className={`text-base w-fit flex items-center capitalize cursor-pointer hover:text-dark_color dark:hover:text-light_color ${
        !isInView ? "text-dark_color_weak dark:text-light_color_weak" : "text-dark_color dark:text-light_color"
      }`}
    >
      {label}
    </Link>
  );
}

export default ScrollTo;
