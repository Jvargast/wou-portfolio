import { useEffect, useMemo, useState } from "react";

export function useActiveSection(ids: string[], isPaused = false) {
  const [active, setActive] = useState(ids[0] ?? "");

  const observedIds = useMemo(() => ids.filter(Boolean), [ids]);

  useEffect(() => {
    if (isPaused || !observedIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 1],
      }
    );

    observedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [observedIds, isPaused]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && observedIds.includes(hash)) {
      setActive(hash);
    }

    const handleHashChange = () => {
      const next = window.location.hash.replace("#", "");
      if (observedIds.includes(next)) setActive(next);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [observedIds]);

  return active;
}
