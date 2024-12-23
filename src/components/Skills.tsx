"use client"

import Image from "next/image"




interface AboutProps {
    isLarge: boolean;
    setSiteState: (index: number) => void;
}
export default function Skills({ isLarge, setSiteState }: AboutProps) {

  
    return (
        <>
            <div className="m-2 p-4 h-[50vh] bg-brown_sugar-200 text-ash_gray-800 rounded-md overflow-y-auto">
            <div className="relative flex flex-row justify-center items-center">
                    <h1 className="mb-5 text-xl mt-2 lg:text-4xl font-bold text-center">Skills</h1>
                    <button
                        onClick={() => setSiteState(0)}
                        className="absolute font-medium top-0 right-0 mr-2 text-s text-white hover:bg-gray-100 hover:text-black hover:text-opacity-100 hover:rounded-full hover:opacity-25 p-3">
                        X
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row justify-self-center" >


                    <p className="pt-6 justify-self-center max-w-2xl ">
                       
                    </p>

                </div>



            </div>
        </>
    )
}