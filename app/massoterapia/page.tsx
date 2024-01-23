import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Video from "@/components/Video";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cursos de Massoterapia",
    description: "Curso Formação Profissional em Massoterapia, Aprenda Tudo Sobre as Técnicas Mais Atuais de Massoterapia",
    // other metadata
};

const Massoterapia = () => {
    return (
        <>
            <div className="pt-40">
                <div className="container">


                    <div className="flex gap-20 items-start">
                        <div className="flex flex-col w-9/12 gap-12 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                            <div>
                                <h1 className="text-3xl font-bold mb-6 text-blue-600">Curso de Massoterapia Profissional</h1>
                                <div>
                                    <p>Descubra o universo da Massoterapia com nosso curso de alta qualidade. Acesso ilimitado, certificado incluso e aulas detalhadas criadas como uma verdadeira OBRA-PRIMA, moldada para todos, desde iniciantes até profissionais ávidos por inovação.</p>
                                </div>

                                <Video />
                            </div>

                            <div className="flex w-full gap-12">
                                <div className="flex flex-col w-full">
                                    
                                    <h3 className="text-xl font-bold mb-4 ">
                                    Descubra o Toque que Transforma Vidas: Domine a Massoterapia e Alcance o Inimaginável com as Pontas dos Dedos.
                                    </h3>

                                    <p className="mb-4">Desvende os segredos da Massoterapia com nosso curso abrangente, projetado para catalisar sua transformação profissional. Acesso ilimitado, certificado garantido e aulas detalhadas moldadas para todos os níveis de habilidade.</p>

                                    <p className="mb-4">Dos fundamentos às técnicas avançadas, cada módulo é uma jornada envolvente, proporcionando não apenas conhecimento, mas uma experiência prática inigualável. Testemunhe sua evolução, assim como muitos de nossos alunos que já estão colhendo os frutos dessa jornada, conquistando clientes encantados e construindo carreiras sólidas.</p>

                                    <p className="mb-4">Nosso compromisso com a excelência e inovação torna nosso Curso de Massoterapia uma oportunidade única para quem busca não apenas aprender, mas dominar a arte da massagem terapêutica. Sua jornada na Massoterapia começa agora — transforme seu futuro profissional conosco!</p>

                                    <Image className="max-w-full h-auto mb-6" src="/images/course/modelo-massoterapia-02.png" alt="Massoterapia" width="463" height="438"/>

                                </div>
                            </div>
                        </div>
                        <div className="w-5/12 p-6 border rounded flex flex-col gap-4 sticky top-32">
                            <div>
                                <Image className="w-full h-auto mb-6" src="/images/course/curso-de-massoterapia-profissional.webp" alt="Massoterapia" width={320} height={320}/>
                                <span className="text-base text-body-color">de <span className="line-through">R$ 159,90</span> por apenas</span>
                                <div className="flex items-end gap-2">
                                    <h3 className="price text-3xl font-bold text-primary dark:text-white">
                                        <span className="amount">R$ 79,90 </span>
                                    </h3>
                                    <span className="text-base text-body-color">ou 9x de R$ 10,02</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Link className="flex w-full" href="https://cursodemassoterapia.com/?ref=Q90205632R">
                                    <button className="flex w-full items-center justify-center rounded-sm bg-gray-200 p-2 text-base text-gray-500 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                        Mais detalhes
                                    </button>
                                </Link>
                                <Link className="flex w-full" href="https://cursodemassoterapia.com/?ref=Q90205632R">
                                    <button className="flex w-full items-center justify-center rounded-sm bg-primary p-4 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                        Comprar
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Massoterapia;
