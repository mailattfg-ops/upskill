"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimate() {
  const pathname = usePathname();

  useEffect(() => {
    const observed = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        // Filter entries that are intersecting
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

        if (intersectingEntries.length > 0) {
          // Sort intersecting elements by DOM order (source order)
          const sortedElements = intersectingEntries.map((e) => e.target).sort((a, b) => {
            return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
          });

          // Stagger class addition one-by-one
          sortedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("is-visible");
            }, index * 150);

            // Clean up observation immediately so they only animate once
            observer.unobserve(el);
            observed.delete(el);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    const updateObservation = () => {
      const elements = document.querySelectorAll(".fade-up:not(.is-visible)");
      elements.forEach((el) => {
        if (!observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });
    };

    // Run initial check
    updateObservation();

    // Listen to domestic updates (e.g. dynamic testimonial/blog loads)
    window.addEventListener("dom-update", updateObservation);

    // Backup timer to handle hydration/loading delays
    const backupTimer = setTimeout(updateObservation, 800);

    return () => {
      observer.disconnect();
      window.removeEventListener("dom-update", updateObservation);
      clearTimeout(backupTimer);
    };
  }, [pathname]);

  return null;
}
