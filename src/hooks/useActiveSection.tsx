import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], isPaused = false) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (isPaused) return; 

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, isPaused]);

  return active;
}
