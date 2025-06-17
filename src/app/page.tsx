import React from "react";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <AboutUs />
      <Contact />
    </>
  );
}
