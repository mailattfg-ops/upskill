"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimate() {
  const pathname = usePathname();

  useEffect(() => {
    const observed = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
            observed.delete(entry.target);
          }
        });
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

    // Run observation check on initial load
    updateObservation();

    // Set up MutationObserver to detect dynamically mounted components (e.g. after Supabase fetch)
    const mutationObserver = new MutationObserver(() => {
      updateObservation();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
