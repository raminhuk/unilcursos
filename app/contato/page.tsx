import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato - UnilCursos",
    description: "Entre em contato conosco para esclarecer suas dúvidas, obter informações detalhadas sobre nossos cursos ou compartilhar suas sugestões. Nossa equipe dedicada está pronta para fornecer suporte personalizado",
};

const ContactPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Contato"
                description="Entre em contato conosco"
            />

            {/* <Contact /> */}
            <div className="container text-center my-20">
                <h1>Entre em contato com a UnilCursos</h1>
                <>Em breve...</>
            </div>
        </>
    );
};

export default ContactPage;
