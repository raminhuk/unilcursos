import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "UnilCursos a plataforma líder em divulgação de cursos online",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contato"
        description="UnilCursos a plataforma líder em divulgação de cursos online"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
