
import Image from "next/image";


export default function Feature() {

    return (
        <>
           <div className="m-2 p-4 h-[50vh] mx-5 text-ash_gray-800 rounded-md overflow-y-auto">
                <h1 className="justify-self-center text-2xl font-bold">What I'm Working on</h1>
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <a href="https://live-example-link.com" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden">
                        <Image 
                            src="/image/LinksApp.png" 
                            alt="Project Screenshot" 
                            className="transform transition-transform hover:scale-105 duration-300"
                            height={100}
                            width={100} />
                    </a>

                    <div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            This project is a brief description of the work, highlighting the purpose, features, and any interesting challenges solved during its development.
                        </p>
                        <div>
                            <h4 className="text-lg font-medium mb-2">Technologies Used:</h4>
                            <ul className="flex flex-wrap gap-2">
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">HTML</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">CSS</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">JavaScript</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">React</li>
                                <li className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md">Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>

    );

}