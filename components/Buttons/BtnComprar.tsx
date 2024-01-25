"use client";

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

const BtnComprar = ({ linkBtn }) => {
    return (
        <>
            <Link className="flex w-full" href={linkBtn} onClick={() => sendGAEvent({ event: 'clickPayment', value: 'Inscreva-se - Massoterapia' })}>
                <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm text-xl px-2 py-4 text-center font-bold">Inscreva-se</button>
            </Link>
        </>
    );
};

export default BtnComprar;
