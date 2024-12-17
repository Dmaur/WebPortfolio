import Image from "next/image"

interface AboutProps{
    screen:number;
}
export default function About({screen}:AboutProps) {

    const isLarge = screen > 1023;

    return (
        <>
            <div className="m-2 h-[50vh] bg-rich_black rounded overflow-y-auto lg:flex-row">
                <h1 className="justify-self-center font-ibmPlexMono text-2xl font-bold pt-3 text-bittersweet">Derrick Maurais</h1>
                <div className="flex justify-center">
                    <Image
                        className="rounded-md flex pt-4"
                        src="/image/portrait-placeholder-grey.gif"
                        alt="placeholder"
                        height={150}
                        width={150} />

                </div>
                <div className="mt-2 mx-2 text-bittersweet-700">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio, eum id repellendus, 
                    maiores culpa vero optio iusto aliquam qui beatae amet, unde nostrum sint molestiae ab molestias velit laboriosam!
                    Laudantium odio illo in molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate nemo placeat numquam beatae inventore, ex molestias repellat provident consectetur aspernatur
                    psa ab? Dolores ad labore dignissimos qui nam velit distinctio.
                    Nobis soluta pariatur aperiam distinctio, ut harum rerum, nulla ea possimus unde adipisci 
                    excepturi accusamus deleniti illum veniam cupiditate ullam enim repellat tempora, deserunt saepe? Ipsam,
                    aliquid? Et, consequuntur obcaecati.</p>

                

                </div>



            </div>
        </>
    )
}