"use client"

import Image from "next/image"




interface AboutProps {
    isLarge: boolean;
}
export default function Projects({ isLarge }: AboutProps) {

  
    return (
        <>
            <div className="m-2 p-4 h-[50vh] bg-space_cadet text-ash_gray-800 rounded-md overflow-y-auto">
                <h1 className="justify-self-center mb-5 text-xl text- lg:text-4xl font-bold ">Projects</h1>

                <div className="flex flex-col lg:flex-row justify-self-center" >

                    <Image
                        className="p-0 flex lg:mr-5 rounded-full self-center"
                        src="/image/betterimage.png"
                        alt="selfImage"
                        height={isLarge? 250 : 150}
                        width={isLarge? 250 : 150} />


                    <p className="pt-6 justify-self-center max-w-2xl ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio, eum id repellendus,
                        maiores culpa vero optio iusto aliquam qui beatae amet, unde nostrum sint molestiae ab molestias velit laboriosam!
                        Laudantium odio illo in molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate nemo placeat numquam beatae inventore, ex molestias repellat provident consectetur aspernatur
                        psa ab? Dolores ad labore dignissimos qui nam velit distinctio.
                        Nobis soluta pariatur aperiam distinctio, ut harum rerum, nulla ea possimus unde adipisci
                        excepturi accusamus deleniti illum veniam cupiditate ullam enim repellat tempora, deserunt saepe? Ipsam,
                        aliquid? Et, consequuntur obcaecati.
                    </p>

                </div>



            </div>
        </>
    )
}