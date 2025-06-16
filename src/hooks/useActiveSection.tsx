import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], isPaused = false) {
  const NAV_HEIGHT = 72;
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (isPaused) return;

    const handler = () => {
      const scrollPos = window.scrollY + NAV_HEIGHT + 1; 
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, isPaused]);

  return active;
}
