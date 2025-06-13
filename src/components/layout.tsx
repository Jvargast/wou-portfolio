"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <motion.main
        className="flex-1 container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
