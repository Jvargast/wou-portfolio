import React from "react";

import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div />,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => <div />,
});
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), {
  loading: () => <div />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div />,
});

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
