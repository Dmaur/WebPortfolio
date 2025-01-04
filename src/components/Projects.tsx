"use client"

import Image from "next/image";



interface AboutProps {
    isLarge: boolean;
    setSiteState: (index: number) => void;
}
export default function Projects({ isLarge, setSiteState }: AboutProps) {


    return (
        <>
            <div className="m-2 p-4 h-[50vh] bg-space_cadet text-ash_gray-800 rounded-md shadow-md shadow-ash_gray-200 overflow-y-auto">
                <div className="relative mt-4 flex flex-row justify-center items-center">
                    <h1 className="mb-5 text-xl mt-2 lg:text-4xl font-bold text-center">Projects</h1>
                    <button
                        onClick={() => setSiteState(0)}
                        className="absolute font-medium top-0 right-0 mr-2 text-s text-white hover:bg-gray-100 hover:text-black hover:text-opacity-100 hover:rounded-full hover:opacity-25 p-3">
                        X
                    </button>
                </div>
                <section className="m-3">
                    
                    <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start lg:text-start">
                        <a href="https://www.amazon.com" target="_blank">
                        <Image
                            className="mb-4 mx-auto"
                            height={isLarge ? 250 : 150}
                            width={isLarge ? 250 : 150}
                            src={"/image/LinksApp.png"}
                            alt={"test img"}
                        />
                        </a>
                       
                        <div className="w-[55vw] lg:w-[45vw]">
                            <h1 className="text-2xl mb-2">Title</h1>
                            <ul className="flex flex-wrap-reverse content-center gap-2 mb-2 lg:mb-10">
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">HTML</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">CSS</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">JavaScript</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">React</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">Tailwind CSS</li>
                            </ul>

                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur eligendi! Totam unde qui veniam voluptates! Fugiat nisi ex dolorum saepe impedit iusto?</p>
                        </div>
                    </div>
                </section>





            </div>
        </>
    )
}