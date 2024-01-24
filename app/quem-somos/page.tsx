import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quem somos - UnilCursos",
    description: "Descubra o poder da educação digital com UnilCursos, a maior plataforma de divulgação de cursos online",
    // other metadata
};

const AboutPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Quem Somos"
                description="UnilCursos a plataforma líder em divulgação de cursos online"
            />
            {/* <AboutSectionOne /> */}
            {/* <AboutSectionTwo /> */}

            <div className="container">
                <div className="mb-20">

                    <h1 className="text-3xl font-bold mb-6 text-blue-600">Quem Somos - UnilCursos a plataforma líder em divulgação de cursos online</h1>
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Missão e Foco</h2>
                        <p className="text-gray-700">Na UnilCursos, nossa missão é simples e clara: ser a sua referência primária para encontrar cursos online que atendam às suas necessidades educacionais e aspirações de carreira. Não oferecemos os cursos, mas sim concentramos nossos esforços em proporcionar a você acesso fácil e organizado às melhores opções disponíveis.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Catálogo Aberto de Cursos Online</h2>
                        <p className="text-gray-700">Explore nosso catálogo aberto de cursos online, abrangendo diversas áreas de conhecimento. Nossa plataforma simplifica a busca, reunindo informações detalhadas sobre uma variedade de cursos, permitindo que você tome decisões informadas sobre seu caminho educacional.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Parceria com Instituições Renomadas</h2>
                        <p className="text-gray-700">Trabalhamos em colaboração com instituições educacionais e especialistas em todo o mundo para garantir que você tenha acesso a cursos online de alta qualidade. Ao promover parcerias sólidas, oferecemos uma gama diversificada de cursos, desde os fundamentais até os mais avançados.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Facilidade e Acesso</h2>
                        <p className="text-gray-700">A UnilCursos é projetada para ser fácil de usar, proporcionando uma experiência de navegação intuitiva. Seja você um profissional em busca de aprimoramento contínuo ou um estudante ávido por novos conhecimentos, a UnilCursos é a sua janela para o mundo de oportunidades educacionais online.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Sem Complicações, Apenas Escolhas Educativas Sólidas</h2>
                        <p className="text-gray-700">Diferente de outras plataformas, não oferecemos os cursos diretamente. Em vez disso, concentramos nossos esforços em fornecer informações claras e imparciais, permitindo que você tome decisões educativas sólidas, adaptadas às suas metas e interesses.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3 text-blue-600">Explore o Mundo de Cursos Online Conosco</h2>
                        <p className="text-gray-700">Descubra, aprenda e avance em sua jornada educacional sem complicações. Explore o mundo de cursos online conosco na UnilCursos.</p>
                    </section>
                </div>

            </div>
        </>
    );
};

export default AboutPage;
