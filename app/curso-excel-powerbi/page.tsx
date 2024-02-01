import BtnComprar from "@/components/Buttons/BtnComprar";
import BtnDetalhes from "@/components/Buttons/BtnDetalhes";
import Section from "@/components/Itens";
import Video from "@/components/Video";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Curso de Excel e Power BI - UnilCursos",
    description: "Domine Excel e Power BI com Cursos Online de Alta Qualidade em Tempo Recorde",
};

const CursoExcel = () => {
    return (
        <>
            <div className="pt-40 max-lg:pt-20">
                <div className="container">
                    <div className="flex gap-20 items-start max-lg:flex-col">
                        <div className="flex flex-col w-9/12 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl max-lg:w-full">
                            <div>
                                <h1 className="text-3xl font-bold mb-6 text-green-600 max-lg:text-2xl">Curso de Excel e Power BI</h1>
                                <div>
                                    <p>Domine Excel e Power BI com Cursos Online de Alta Qualidade em Tempo Recorde</p>
                                </div>

                                <Video urlCapa="/images/video/curso-excel-powerbi.webp" videoId="6IIirlrgQUo" />
                            </div>

                            <div className="flex w-full gap-12">
                                <div className="flex flex-col w-full">

                                    <h3 className="text-xl font-bold mb-6 text-green-600">
                                        Descubra o Caminho para a Maestria em Excel e Power BI
                                    </h3>

                                    <p className="mb-4">Descubra a maneira mais eficiente de aprender Excel e Power BI, com cursos online especialmente desenvolvidos para otimizar seu tempo. Nossas videoaulas são estruturadas em segmentos de até 25 minutos, garantindo aprendizado direto e eficaz.</p> <p>Com uma abordagem passo a passo, nossos módulos incluem exercícios práticos para reforçar o conhecimento adquirido.</p>

                                    <Section />
                                    <Link className="flex w-full" href="https://go.hotmart.com/Q90205632R?ap=4fad">
                                        <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-xl px-8 py-4 text-center mb-6 font-bold">Começar Agora</button>
                                    </Link>


                                    <h3 className="text-xl font-bold mb-6 text-green-600">
                                        Conteúdo abrangente:
                                    </h3>
                                    <p className="mb-4">
                                        Desde o básico até o avançado, explore todos os aspectos essenciais do Excel e Power BI.
                                    </p>

                                    <h3 className="text-xl font-bold mb-6 text-green-600">Metodologia de Ensino Inovadora:</h3>
                                    <p className="mb-4">Explore nossa abordagem de ensino dinâmica e interativa, projetada para maximizar sua compreensão e retenção de conhecimento.</p>

                                    <h3 className="text-xl font-bold mb-6 text-green-600">Acesso Vitalício ao Material:</h3>
                                    <p className="mb-4">Tenha acesso ilimitado ao conteúdo do curso, permitindo que você aprenda no seu próprio ritmo e revise o material sempre que necessário.</p>

                                    <div className="flex justify-center my-10">
                                        <Image className="max-w-full h-auto mb-6" src="/images/course/curso-excel-profissional.webp" alt="Curso Excel Profissional" width="460" height="320" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-6 text-green-600">Tutoriais Práticos Passo a Passo:</h3>
                                    <p className="mb-4">Siga nossos tutoriais detalhados que fornecem orientações claras e simples para ajudá-lo a dominar as habilidades do Excel e do Power BI, desde as operações básicas até as avançadas.</p>

                                    <h3 className="text-xl font-bold mb-6 text-green-600">Integração de Ferramentas Avançadas:</h3>
                                    <p className="mb-4">Aprenda a integrar e utilizar eficientemente as mais recentes ferramentas e recursos do Excel e do Power BI para análise de dados avançada e visualização de informações.</p>

                                    <h3 className="text-xl font-bold mb-6 text-green-600">Experiência do Instrutor:</h3>
                                    <p className="mb-4">Beneficie-se da vasta experiência de nossos instrutores especializados, que são profissionais experientes no campo do Excel e do Power BI, prontos para compartilhar seus insights e melhores práticas.</p>


                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-6 text-green-600">Certificados Reconhecidos</h3>
                                        <p className="mb-4">Certificados emitidos de forma online em PDF. Válidos em todo território nacional na comprovação de atividades de capacitação profissional, aperfeiçoamento e atividades complementares.

(Lei 9394/96, Decreto 5154, Deliberação CEE 14/97)</p>
                                        <div className="flex justify-center">
                                            <Image className="max-w-full h-auto mb-6" src="/images/course/certificado_excel.webp" alt="Curso Excel" width="375" height="265" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-3/12 z-50 p-6 border rounded flex flex-col gap-4 sticky top-32 max-lg:fixed max-lg:bottom-0 max-lg:top-auto max-lg:left-0 max-lg:p-1 max-lg:flex-row max-lg:w-full">
                            <div className="max-lg:flex gap-2">
                                <Image className="w-full h-auto mb-6 max-lg:w-16 max-lg:mb-0 max-lg:flex-2" src="/images/course/curso-excel.webp" alt="Curso Excel" width={320} height={320} />
                                <span className="text-base text-body-color max-lg:text-base max-lg:hidden">de <span className="line-through">R$ 297,00</span> por apenas</span>
                                <div className="flex items-end gap-1 flex-wrap max-lg:flex-col max-lg:items-start max-lg:justify-center max-lg:gap-0">
                                    <h3 className="price max-lg:text-xl text-3xl font-bold text-green-600 dark:text-white">
                                        <span className="amount">R$ 97,00 </span>
                                    </h3>
                                    <span className="text-base text-body-color max-lg:text-xs">ou 12x de R$ 9,45</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 max-lg:flex-1">
                                <BtnDetalhes linkBtn="https://go.hotmart.com/L90321502H" />
                                <BtnComprar linkBtn="https://go.hotmart.com/L90321502H?ap=2867" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CursoExcel;
