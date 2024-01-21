import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnilCursos - Desperte seu Potencial com a Maior Plataforma de Cursos Online",
  description: "Descubra a Excelência Educativa na Unilcursos: Sua Maior Plataforma de Divulgação e Acesso a Cursos Digitais de Qualidade",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Pricing />
      <Features />
      {/* <Testimonials /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
