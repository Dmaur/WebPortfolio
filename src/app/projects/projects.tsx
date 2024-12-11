import Image from "next/image";

export default function MyProjects() {
    return (
        <>
            <section id="navBar1" className="bg-inherit flex font-robotoMono text-left font-bold">
                <a href="/" className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4">ABOUT</a>
                <a className="bg-teal text-mindaro mt-8 mr-1 w-44 h-10 rounded-t-lg pt-2 pl-4 underline">PROJECTS</a>
                <a href="/contact" className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4">CONTACT</a>
                <a href="/resume" className="bg-cocoa_brown mt-10 mx-1 w-44 rounded-t-lg pt-2 underline pl-4">RESUME</a>
            </section>
            <main className="bg-teal h-[100vh] flex flex-col items-center">
                <h1 className="text-white text-5xl font-extralight italic underline pt-16">
                    My Projects
                </h1>
                {/* Grid container */}
                <div className="grid grid-cols-2 gap-6 pt-8 mx-4">
                    {/* Project Card 1 */}
                    <div className="flex items-center bg-teal p-4 rounded-lg">
                        <Image
                            height={100}
                            width={100}
                            src="/image/drawpad.png"
                            alt="JS Drawpad screenshot"
                            className="w-32 h-32 object-cover rounded"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-mindaro"><a href="">JS Drawpad</a></h3>
                            <h4 className="text-sm text-white">Tech: JS, CSS, HTML</h4>
                            <p className="text-base text-gray-700">
                                This was a great project for learning DOM manipulation, event listeners, and simple UI.
                            </p>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="flex items-center bg-teal p-4 rounded-lg">
                        <Image
                            height={100}
                            width={100}
                            src="/image/calculator.png"
                            alt="Calculator screenshot"
                            className="w-32 h-32 object-cover rounded"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-mindaro"><a href="">JS calculator</a></h3>
                            <h4 className="text-sm text-white">Tech: JS, CSS, HTML</h4>
                            <p className="text-base text-gray-700">
                                Creating this calculator was my first experience using JS to make something more than just a static HTML site.
                            </p>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="flex items-center bg-teal p-4 rounded-lg">
                        <Image
                            height={100}
                            width={100}
                            src="/image/LinksApp.png"
                            alt="To-do App screenshot"
                            className="w-32 h-32 object-cover rounded"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-mindaro"><a href="">Link Launch Pad</a></h3>
                            <h4 className="text-sm text-white">Tech: ASP.NET, C#, Bootstrap</h4>
                            <p className="text-base text-gray-700">
                                This project is the accumulation of all that I have learned in ASP.NET. From model binding to user authentication to working with/ building a  MYSQL DB and using CRUD.
                            </p>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="flex items-center bg-teal p-4 rounded-lg">
                        <Image
                            height={100}
                            width={100}
                            src="/image/photoalbum.png"
                            alt="photo Album"
                            className="w-32 h-32 object-cover rounded"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-mindaro"><a href="">Photo Album</a></h3>
                            <h4 className="text-sm text-white">Tech: JS, Tailwind CSS, React</h4>
                            <p className="text-base text-gray-700">

                                My first “full stack” project  and first time working with functional programming. It was a great learning experience and a lot of fun to build.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
