import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex items-center gap-4">
            <Image
                src="/images/logo/icon-logo.svg"
                alt="logo"
                width={65}
                height={65}
                className="dark:hidden max-sm:w-12 max-sm:h-auto"
            />
            <span className="text-3xl font-extrabold text-secondary max-sm:text-2xl">UnilCursos</span>
        </div>
    );
};

export default Logo;
