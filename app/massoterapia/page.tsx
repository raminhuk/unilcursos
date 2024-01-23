import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
                        <div className="flex flex-col w-7/12 gap-12 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                            <div>
                                <h1 className="text-3xl font-bold mb-6 text-blue-600">Curso de Massoterapia Profissional</h1>
                                <div>
                                    Descubra o Toque que Transforma Vidas: Domine a Massoterapia e Alcance o Inimaginável com as Pontas dos Dedos.
                                    Desperte a(o) Massoterapeuta Excepcional em Você, Mesmo que esteja Começando do Zero: Junte-se à Comunidade de pessoas que Estão Redefinindo a Arte da Massoterapia.
                                </div>
                            </div>

                            <div className="flex w-full gap-12">
                                <div className="flex flex-col w-full gap-12">
                                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-13667ee6" data-id="13667ee6" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-2ecc17f2 elementor-widget elementor-widget-image" data-id="2ecc17f2" data-element_type="widget" data-widget_type="image.default">
                                                <div className="elementor-widget-container">
                                                    <Image width="463" height="438" src="/images/course/modelo-massoterapia-02.png" alt="Nosso curso é uma OBRA-PRIMA" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3517476f" data-id="3517476f" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-element elementor-element-7b0004f2 elementor-widget elementor-widget-text-editor" data-id="7b0004f2" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div className="elementor-widget-container">
                                                    <p>Formação em Massoterapia</p>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-6db74204 elementor-widget elementor-widget-heading" data-id="6db74204" data-element_type="widget" data-widget_type="heading.default">
                                                <div className="elementor-widget-container">
                                                    <h2 className="elementor-heading-title elementor-size-default">Torne-se expert em Massoterapia com aulas detalhadas, acesso por tempo ilimitado e certificado incluso. </h2>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-6c8b4559 elementor-widget elementor-widget-text-editor" data-id="6c8b4559" data-element_type="widget" data-widget_type="text-editor.default">
                                                <div className="elementor-widget-container">
                                                    <p><strong>Nosso curso é uma OBRA-PRIMA</strong>, meticulosamente esculpido para <strong>cada aspirante</strong> ao mundo da Massoterapia!</p><p>Do <strong>absoluto iniciante</strong> ao profissional experiente sedento por <strong>inovação</strong>, cada módulo é uma porta para técnicas inexploradas e sabedoria profunda.</p><p><strong>Muitos de nossos alunos</strong> já estão vivendo a revolução, aplicando as pérolas de conhecimento adquiridas e, como resultado? <strong>Uma enxurrada de clientes encantados!</strong></p><p>Concebido com uma visão de excelência, nosso <strong>Curso de Formação Profissional em Massoterapia</strong> é a chave para que <strong>TODOS</strong> possam não apenas aprender, mas <strong>florescer</strong> na arte e no negócio da Massoterapia. Sua transformação profissional começa aqui e agora!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-5/12 p-6 border rounded flex flex-col gap-4 sticky top-32">
                            <div>
                                <span>de R$ 159,90 Por Apenas</span>
                                <div className="flex items-end gap-2">
                                    <h3 className="price text-3xl font-bold text-primary dark:text-white">
                                        <span className="amount">R$ 79,90 </span>
                                    </h3>
                                    <span className="text-base text-body-color">ou 9x de R$ 10,02</span>
                                </div>
                            </div>
                            <Link href="https://cursodemassoterapia.com/?ref=Q90205632R">
                                <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                    Comprar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Massoterapia;
