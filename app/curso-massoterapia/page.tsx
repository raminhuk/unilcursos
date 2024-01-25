'use client'
import { useEffect } from 'react';

const MassoterapiaCurso = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://go.hotmart.com/Q90205632R';
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-screen bg-white top-0 left-0 fixed z-50 flex items-center justify-center">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-700 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.2s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Carregando...</span>
            </div>
        </div>
    );
};

export default MassoterapiaCurso;
