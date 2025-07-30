import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedDiv = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  // State to control when the animation class is actually applied
  const [shouldAnimateNow, setShouldAnimateNow] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is visible
    triggerOnce: false, // Animation should run only ONCE per entry for the useInView
    rootMargin: "0px",
  });

  useEffect(() => {
    let timeoutId;

    // Condition 1: If the element comes into view, schedule the animation
    if (inView) {
      // Only schedule if it's not already set to animate (or already animated this cycle)
      // This prevents multiple timeouts if 'inView' stays true for a long time
      if (!shouldAnimateNow) {
        // Check if we haven't already started animating this cycle
        timeoutId = setTimeout(() => {
          setShouldAnimateNow(true);
        }, delay);
      }
    } else {
      // Condition 2: If the element is OUT of view, reset the animation state
      // This prepares it to animate again the next time it scrolls into view
      if (shouldAnimateNow) {
        // Only reset if it was previously set to animate
        setShouldAnimateNow(false);
      }
    }

    // Cleanup function: Clear the timeout if the component unmounts
    // or if 'inView' changes before the timeout fires (e.g., scrolled away quickly)
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [inView, delay, shouldAnimateNow]); // Add shouldAnimateNow to dependencies

  // Apply the custom animation class when shouldAnimateNow is true
  const animationClasses = `
    transform // Ensure transform is present for base transformations
    ${shouldAnimateNow ? "animate-in-and-out-on-scroll" : ""}
    // Optional: If you want it to always start from rotate-x-0 rotate-y-0
    // before the animation triggers, you could add:
    ${!shouldAnimateNow ? "rotate-x-0 rotate-y-0" : ""}
  `;

  return (
    <div
      ref={ref}
      className={`
        ${className}
        ${animationClasses}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
