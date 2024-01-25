"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

const BtnDetalhes = () => {
    return (
        <>
            <Link className="flex w-full max-lg:hidden" href="https://cursodemassoterapia.com/?ref=Q90205632R" onClick={() => sendGAEvent({ event: 'clickCourseDetails', value: 'Mais detalhes - Massoterapia' })}>
                <button className="flex w-full items-center justify-center rounded-sm bg-gray-200 p-2 text-base text-gray-500 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Mais detalhes
                </button>
            </Link>
</>
    );
};

export default BtnDetalhes;
