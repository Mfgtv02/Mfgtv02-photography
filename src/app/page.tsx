"use client";

import Navbar from "@/components/navbar/navbar";
import Heading from "@/components/heading/heading";
import Homegallery from "@/components/homegallery/homegallery";
import { ReactNode } from "react";
import { motion } from "framer-motion";



export default function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Heading />
      <main>{children}</main>
    </>
  );
}

