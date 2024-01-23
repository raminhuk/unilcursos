import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

const CoursesBox = (props: {
    title: string;
    subtitle: string;
    price: string;
    subPrice: string;
    image: string;
    link: string;
    children: React.ReactNode;
}) => {
    const { title, subtitle, price, subPrice, image, link, children } = props;

    return (
        <div className="w-full">
            <Link href={link} target="_blank">
                <div
                    className="wow fadeInUp shadow-three overflow-hidden dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-md bg-white hover:shadow-one"
                    data-wow-delay=".1s"
                    onClick={() => sendGAEvent({ event: 'click_course', value: title})}
                >
                    <div className="relative">
                        <Image className="w-full h-auto" src={image} alt={title} width={320} height={320} />
                    </div>
                    <div className="w-full px-6 py-4 ">
                        <h2 className="mb-2 leading-7 text-xl font-bold text-black dark:text-white ">
                            {title}
                        </h2>
                        <div className="flex flex-col mb-2">
                            <h3 className="price text-2xl font-bold text-primary dark:text-white">
                                R$ <span className="amount">{price}</span>
                            </h3>
                            <p className="text-sm text-gray-500">{subPrice}</p>
                        </div>
                        <p className="mb-4 text-sm text-body-color h-28 overflow-hidden">{subtitle}</p>
                        <div className="mb-4 dark:border-white dark:border-opacity-10">
                            <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                Comprar
                            </button>
                        </div>
                        {/* <div>{children}</div>
                    <div className="absolute bottom-0 right-0 z-[-1]">
                        <svg
                            width="179"
                            height="158"
                            viewBox="0 0 179 158"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.5"
                                d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                                fill="url(#paint0_linear_70:153)"
                            />
                            <path
                                opacity="0.3"
                                d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                                fill="url(#paint1_linear_70:153)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_70:153"
                                    x1="69.6694"
                                    y1="29.9033"
                                    x2="196.108"
                                    y2="83.2919"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_70:153"
                                    x1="165.348"
                                    y1="-75.4466"
                                    x2="-3.75136"
                                    y2="103.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoursesBox;
