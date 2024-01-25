import BtnComprar from "@/components/Buttons/BtnComprar";
import BtnDetalhes from "@/components/Buttons/BtnDetalhes";
import Section from "@/components/Itens";
import Video from "@/components/Video";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Automaquiagem com Lucas Vieira - UnilCursos",
    description: "Descubra a arte da automaquiagem com Lucas Vieira, renomado maquiador de celebridades como Giovanna Antonelli e Bruna Marquezine",
};

const Automaquiagem = () => {
    return (
        <>
            <div className="pt-40 max-lg:pt-20">
                <div className="container">
                    <div className="flex gap-20 items-start max-lg:flex-col">
                        <div className="flex flex-col w-9/12 dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl max-lg:w-full">
                            <div>
                                <h1 className="text-3xl font-bold mb-6 text-pink-600 max-lg:text-2xl">Automaquiagem com Lucas Vieira</h1>
                                <div>
                                    <p>Descubra o fascinante universo da beleza e aprimore suas habilidades de maquiagem com o renomado curso de Automaquiagem ministrado por Lucas Vieira. Neste programa envolvente e prático, Lucas, um talentoso profissional da área, compartilhará seus segredos e técnicas exclusivas para transformar sua rotina de beleza. </p>
                                </div>

                                <Video urlCapa="/images/video/capa-automaquiagem.png" videoId="kg0mVI5jOys" />
                            </div>

                            <div className="flex w-full gap-12">
                                <div className="flex flex-col w-full">

                                    <h3 className="text-xl font-bold mb-6 text-pink-600">
                                        O segredo da Automaquiagem
                                    </h3>

                                    <p className="mb-4">Aprenda a realçar seus traços naturais, escolher os produtos certos para sua pele e dominar as últimas tendências em maquiagem. Com aulas dinâmicas e interativas, este curso proporcionará não apenas conhecimentos teóricos, mas também experiências práticas que permitirão que você se destaque na arte da automaquiagem. Seja você uma iniciante ou uma entusiasta da maquiagem, o curso de Automaquiagem com Lucas Vieira é a oportunidade perfeita para aprimorar suas habilidades, elevando sua confiança e expressão pessoal.</p>

                                    <Section />
                                    <Link className="flex w-full" href="https://go.hotmart.com/Q90205632R?ap=4fad">
                                        <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-xl px-8 py-4 text-center mb-6 font-bold">Começar Agora</button>
                                    </Link>

                                    <p className="mb-4">Explore o mundo encantador da maquiagem com Lucas Vieira, um talentoso maquiador com uma trajetória extraordinária. Iniciando sua carreira em 2007 na pitoresca cidade de Governador Dix-Sept Rosado, no Rio Grande do Norte, Lucas viu sua paixão pela maquiagem crescer, impulsionada por seu talento, habilidade e determinação.</p>

                                    <p className="mb-4">Em busca de novos horizontes, ele tomou a ousada decisão de se mudar para o Rio de Janeiro há seis anos, onde sua carreira decolou. Hoje, Lucas é requisitado para projetos importantes ao lado de celebridades como Giovanna Antonelli, Bruna Marquezine, Deborah Secco, Gio Ewbank, Adriane Galisteu e Mariana Ximenez.</p>

                                    <div className="flex justify-center my-10">
                                        <Image className="max-w-full h-auto mb-6" src="/images/course/curso-de maquiagem.png" alt="Automaquiagem" width="400" height="400" />
                                    </div>
                                    <p className="mb-4">Seu compromisso com a excelência não se limita apenas aos holofotes, pois Lucas Vieira também realiza o sonho das noivas, tornando seus momentos especiais ainda mais incríveis. Com uma técnica única, que combina a harmonia das cores e o toque sutil dos pincéis, Lucas se tornou o maquiador mais desejado para casamentos, destacando-se por criar maquiagens e penteados atemporais, sem exageros.</p>


                                    <div>
                                        <h3 className="text-xl font-bold mb-6 text-pink-600">Certificado Válido em todo território nacional Incluso!</h3>
                                        <p className="mb-4">Você vai ter acesso a este lindo certificado disponível em sua área restrita após concluir o curso.

                                            Nosso curso é associado à ABED (Associação Brasileira de Educação a Distância).

                                            Certificado com carga horária, CNPJ e válido em todo território nacional em conformidade com o Decreto Presidencial N° 5.154.</p>
                                        <div className="flex justify-center">
                                            <Image className="max-w-full h-auto mb-6" src="/images/course/certificado-automaquiagem.jpg" alt="Massoterapia" width="538" height="380" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mt-10 text-2xl font-bold mb-6 text-pink-600">Descrição das aulas</div>
                                        {/* Módulo 1: Apresentação */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 1: Apresentação</h3>
                                            <p className="text-base">Aula preparatória para tudo que você irá aprender</p>
                                        </div>

                                        {/* Módulo 2: Processo da Automaquiagem */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 2: Processo da Automaquiagem</h3>
                                            <ul className="text-base">
                                                <li>Passo a passo para a maquiagem perfeita;</li>
                                                <li>Como transformar uma maquiagem do dia para a noite;</li>
                                            </ul>
                                        </div>

                                        {/* Módulo 3: Maquiagem com Produtos Nacionais */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 3: Maquiagem com Produtos Nacionais</h3>
                                            <ul className="text-base">
                                                <li>Pele de Celebridade com produtos acessíveis;</li>
                                                <li>Maquiagem monocromática (rosa);</li>
                                                <li>Delineador dos Sonhos;</li>
                                                <li>Esfumado Black poderoso;</li>
                                                <li>Cut Crease.</li>
                                            </ul>
                                        </div>

                                        {/* Módulo 4: Maquiagem para Pele Negra */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 4: Maquiagem para Pele Negra</h3>
                                            <ul className="text-base">
                                                <li>Preparação para Pele Negra;</li>
                                                <li>Maquiagem para o Dia em Pele Negra;</li>
                                                <li>Maquiagem para a Noite em Pele Negra;</li>
                                            </ul>
                                        </div>

                                        {/* Módulo 5: Maquiagem para Pele Madura */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 5: Maquiagem para Pele Madura</h3>
                                            <ul className="text-base">
                                                <li>Preparação da Pele Madura 45+;</li>
                                                <li>Maquiagem para Pele Madura 45+;</li>
                                                <li>Maquiagem para pele madura 55+;</li>
                                            </ul>
                                        </div>

                                        {/* Módulo 6: Pincéis e Materiais */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 6: Pincéis e Materiais</h3>
                                            <ul className="text-base">
                                                <li>Tipos de Pincéis;</li>
                                                <li>Tipos de Materiais;</li>
                                                <li>Como Limpar seus Pincéis.</li>
                                            </ul>
                                        </div>

                                        {/* Módulo 7: Penteados */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo 7: Penteados</h3>
                                            <ul className="text-base">
                                                <li>Cabelo Podrinho;</li>
                                                <li>Coque Alto;</li>
                                                <li>Trança Boxeadora;</li>
                                            </ul>
                                        </div>

                                        {/* Módulo Extra 1: Maquiagem Glam com Glitter */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo Extra 1: Maquiagem Glam com Glitter</h3>
                                            <ul className="text-base">
                                                <li>Passo a passo da Maquiagem (parte 1);</li>
                                                <li>Passo a passo da Maquiagem (parte 2);</li>
                                                <li>Passo a passo da Maquiagem (parte 3);</li>
                                            </ul>
                                        </div>

                                        {/* Módulo Extra 2: Aulas Para Marcas Diversas */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2">Módulo Extra 2: Aulas Para Marcas Diversas</h3>
                                            <ul className="text-base">
                                                <li>Maquiagem Fresh para o Verão;</li>
                                                <li>Maquiagem Glam;</li>
                                                <li>Maquiagem Metálica;</li>
                                                <li>Maquiagem Violeta;</li>
                                                <li>Delineador Gatinho com Deborah Secco;</li>
                                                <li>Quiz da Beleza com Deborah Secco;</li>
                                                <li>Vilã vs. Mocinha com Deborah Secco;</li>
                                                <li>Trança Coração com Nívea Stelmann.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-3/12 z-50 p-6 border rounded flex flex-col gap-4 sticky top-32 max-lg:fixed max-lg:bottom-0 max-lg:top-auto max-lg:left-0 max-lg:p-1 max-lg:flex-row max-lg:w-full">
                            <div className="max-lg:flex gap-2">
                                <Image className="w-full h-auto mb-6 max-lg:w-16 max-lg:mb-0 max-lg:flex-2" src="/images/course/automaquiagem-lucas-vieira.png" alt="Massoterapia" width={320} height={320} />
                                <span className="text-base text-body-color max-lg:text-base max-lg:hidden">de <span className="line-through">R$ 147,00</span> por apenas</span>
                                <div className="flex items-end gap-1 flex-wrap max-lg:flex-col max-lg:items-start max-lg:justify-center max-lg:gap-0">
                                    <h3 className="price max-lg:text-xl text-3xl font-bold text-pink-600 dark:text-white">
                                        <span className="amount">R$ 87,00 </span>
                                    </h3>
                                    <span className="text-base text-body-color max-lg:text-xs">ou 9x de R$ 10,91</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 max-lg:flex-1">
                                <BtnDetalhes linkBtn="https://go.hotmart.com/F89870399Q" />
                                <BtnComprar linkBtn="https://go.hotmart.com/F89870399Q?ap=e0c0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Automaquiagem;
