import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], isPaused = false) {
  const NAV_HEIGHT = 72;
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (isPaused) return;

    let ticking = false;

    const updateActive = () => {
      const scrollPos = window.scrollY + NAV_HEIGHT + 1;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }

      setActive(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids, isPaused]);

  return active;
}
