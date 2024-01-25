import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Section from "@/components/Itens";
import Video from "@/components/Video";
import { sendGAEvent } from "@next/third-parties/google";

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
            <div className="pt-40 max-lg:pt-20">
                <div className="container">
                    <div className="flex gap-20 items-start max-lg:flex-col">
                        <div className="flex flex-col w-9/12 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl max-lg:w-full">
                            <div>
                                <h1 className="text-3xl font-bold mb-6 text-pink-600 max-lg:text-2xl">Curso de Massoterapia Profissional</h1>
                                <div>
                                    <p>Descubra o universo da Massoterapia com nosso curso de alta qualidade. Acesso ilimitado, certificado incluso e aulas detalhadas criadas como uma verdadeira OBRA-PRIMA, moldada para todos, desde iniciantes até profissionais ávidos por inovação.</p>
                                </div>

                                <Video />
                            </div>

                            <div className="flex w-full gap-12">
                                <div className="flex flex-col w-full">
                                    
                                    <h3 className="text-xl font-bold mb-6 text-pink-600">
                                    Descubra o Toque que Transforma Vidas: Domine a Massoterapia e Alcance o Inimaginável com as Pontas dos Dedos.
                                    </h3>

                                    <p className="mb-4">Desvende os segredos da Massoterapia com nosso curso abrangente, projetado para catalisar sua transformação profissional. Acesso ilimitado, certificado garantido e aulas detalhadas moldadas para todos os níveis de habilidade.</p>

                                    <Section />
                                    <Link className="flex w-full" href="https://go.hotmart.com/Q90205632R?ap=4fad">

                                    
                                        <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-xl px-8 py-4 text-center mb-6 font-bold">Começar Agora</button>
                                    </Link>

                                    <p className="mb-4">Dos fundamentos às técnicas avançadas, cada módulo é uma jornada envolvente, proporcionando não apenas conhecimento, mas uma experiência prática inigualável. Testemunhe sua evolução, assim como muitos de nossos alunos que já estão colhendo os frutos dessa jornada, conquistando clientes encantados e construindo carreiras sólidas.</p>

                                    <div className="flex justify-center">
                                        <Image className="max-w-full h-auto mb-6" src="/images/course/modelo-massoterapia-02.png" alt="Massoterapia" width="463" height="438"/>
                                    </div>
                                    <p className="mb-4">Nosso compromisso com a excelência e inovação torna nosso Curso de Massoterapia uma oportunidade única para quem busca não apenas aprender, mas dominar a arte da massagem terapêutica. Sua jornada na Massoterapia começa agora — transforme seu futuro profissional conosco!</p>


                                    <div>
                                        <h3 className="text-xl font-bold mb-6 text-pink-600">Certificado Válido em todo território nacional Incluso!</h3>
                                        <p className="mb-4">Você vai ter acesso a este lindo certificado disponível em sua área restrita após concluir o curso.

Nosso curso é associado à ABED (Associação Brasileira de Educação a Distância).

Certificado com carga horária, CNPJ e válido em todo território nacional em conformidade com o Decreto Presidencial N° 5.154.</p>
                                    <div className="flex justify-center">
                                        <Image className="max-w-full h-auto mb-6" src="/images/course/certificado-massoterapia.png" alt="Massoterapia" width="550" height="475"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-3/12 z-50 p-6 border rounded flex flex-col gap-4 sticky top-32 max-lg:fixed max-lg:bottom-0 max-lg:top-auto max-lg:left-0 max-lg:p-1 max-lg:flex-row max-lg:w-full">
                            <div className="max-lg:flex gap-2">
                                <Image className="w-full h-auto mb-6 max-lg:w-16 max-lg:mb-0 max-lg:flex-2" src="/images/course/curso-de-massoterapia-profissional.webp" alt="Massoterapia" width={320} height={320}/>
                                <span className="text-base text-body-color max-lg:text-base max-lg:hidden">de <span className="line-through">R$ 159,90</span> por apenas</span>
                                <div className="flex items-end gap-1 flex-wrap max-lg:flex-col max-lg:items-start max-lg:justify-center max-lg:gap-0">
                                    <h3 className="price max-lg:text-xl text-3xl font-bold text-pink-600 dark:text-white">
                                        <span className="amount">R$ 79,90 </span>
                                    </h3>
                                    <span className="text-base text-body-color max-lg:text-xs">ou 9x de R$ 10,02</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 max-lg:flex-1">
                                <Link className="flex w-full max-lg:hidden" href="https://cursodemassoterapia.com/?ref=Q90205632R" onClick={() => sendGAEvent({ event: 'clickCourseDetails', value: 'Mais detalhes - Massoterapia' })}>
                                    <button className="flex w-full items-center justify-center rounded-sm bg-gray-200 p-2 text-base text-gray-500 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                        Mais detalhes
                                    </button>
                                </Link>
                                <Link className="flex w-full" href="https://go.hotmart.com/Q90205632R?ap=4fad" onClick={() => sendGAEvent({ event: 'clickPayment', value: 'Inscreva-se - Massoterapia' })}>
                                    <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-xl px-2 py-4 text-center font-bold">Inscreva-se</button>
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
