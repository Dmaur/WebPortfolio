"use client"

import Image from "next/image"




interface AboutProps {
    isLarge: boolean;
    setSiteState: (index: number) => void;
}
export default function About({ isLarge, setSiteState }: AboutProps) {


    return (
        <>
            <div className="m-2 p-4 h-[50vh] bg-ash_gray-100 text-ash_gray-800 rounded-md shadow-md shadow-ash_gray-200 overflow-y-auto">

                <div className="relative mt-4 flex flex-row justify-center items-center">
                    <h1 className="mb-5 text-xl mt-2 lg:text-4xl font-bold text-center">Derrick Maurais</h1>
                    <button
                        onClick={() => setSiteState(0)}
                        className="absolute font-medium top-0 right-0 mr-2 text-s text-white hover:bg-gray-100 hover:text-black hover:text-opacity-100 hover:rounded-full hover:opacity-25 p-3">
                        X
                    </button>
                </div>



                <div className="flex flex-col lg:flex-row justify-self-center" >

                    <Image
                        className="p-0 shadow-lg shadow-ash_gray-200 flex lg:mr-8 rounded-full self-center"
                        src="/image/betterimage.png"
                        alt="selfImage"
                        height={isLarge ? 250 : 150}
                        width={isLarge ? 250 : 150} />


                    <div className=" mt-5 lg:mt-2 just justify-self-center flex flex-col lg:justify-between max-w-2xl">
                        <p >2025 NSCC Truro Web Development graduate</p>
                        <br/>
                        <p >Passionate about back-end development</p>
                        <br/>
                        <p >Eager to embrace new challenges and expand my skill set</p>
                        <br/>
                        <p >Want to know more? Download my resume <a href="/dwnld/placeholderfor resume.pdf" download={"DMaurais_Resume"} className="underline hover:text-blue-800">here </a>&#128072; </p>

        
                       
                    </div>

                   


                </div>



            </div>
        </>
    )
}