import { useEffect, useState } from "react";

const NAVBAR_OFFSET = 96;

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top =
          el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

        if (scrollY >= top) {
          current = id;
        }
      }

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ids]);

  useEffect(() => {
    if (!active) return;

    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== active) {
      window.history.replaceState(null, "", `#${active}`);
    }
  }, [active]);

  return active;
}
