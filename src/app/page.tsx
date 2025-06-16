import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/components/sections/Hero"));
const Projects = React.lazy(() => import("@/components/sections/Projects"));
const Services = React.lazy(() => import("@/components/sections/Services"));
const AboutUs = React.lazy(() => import("@/components/sections/AboutUs"));
const Contact = React.lazy(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Services/>
        <Projects/>
        <AboutUs/>
        <Contact/>
      </Suspense>
    </>
  );
}
