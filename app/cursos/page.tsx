import Breadcrumb from "@/components/Common/Breadcrumb";
import Courses from "@/components/Courses";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Torne-se especialista com nossos cursos online: Explore uma variedade de programas educacionais de alta qualidade, projetados para impulsionar seu conhecimento e avançar em sua carreira",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cursos"
        description="UnilCursos a plataforma líder em divulgação de cursos online"
      />
      <Courses />
    </>
  );
};

export default AboutPage;
