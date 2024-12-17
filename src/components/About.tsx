import Image from "next/image"

interface AboutProps {
    screen: number;
}
export default function About({ screen }: AboutProps) {

    const isLarge = screen > 1023;

    return (
        <>
            <div className={`m-2 h-[50vh] bg-rich_black rounded-md overflow-y-auto`}>
                <h1 className="font-changa justify-self-center mb-5 text-4xl font-bold ">Derrick Maurais</h1>

                <div className={`flex flex-nowrap overflow-hidden justify-self-center ${isLarge ? "flex-row" : "flex-col justify-items-center"}`} >

                    <Image
                        className="p-0 mr-5 object-cover justify-self-center"
                        src="/image/betterimage.png"
                        alt="placeholder"
                        height={300}
                        width={300} />


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