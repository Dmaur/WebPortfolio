"use client"
import About from "./About"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

// drilled in siteState for tracking and changing the site state as buttons are pressed and screen width. 
interface stateProps {
    siteState: number;
    setSiteState: (index: number) => void;
    isLarge: boolean;
}

export default function Navigation({ siteState, setSiteState, isLarge }: stateProps) {


    // when the buttons are clicked, it checks the passed in number against the site state and changes state accoridngly. 
    const handleSelect = (n: number) => {
        siteState != n ? setSiteState(n) : setSiteState(0);
    }



    return (
        <>
            {/* under each button is the element that will show if site state is appropriate and isLarge==false */}
            <div className="h-[85vh] flex flex-col justify-evenly  lg:flex-row lg:h-[20vh]">
                <button
                    onClick={() => handleSelect(1)}
                    className={`text-3xl mt-4 mb-1.5 ${siteState == 1 ? "text-white underline decoration-double decoration-white" : "text-inherit"} `}>
                    ABOUT
                </button>
                <div className={` ${siteState == 1 && !isLarge ? "justify-center mx-14" : "hidden"}`}>
                    <About isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>

                <button
                    onClick={() => handleSelect(2)}
                    className={`text-3xl m-6 ${siteState == 2 ? "text-white underline decoration-double decoration-white" : "text-inherit"}`}>
                    SKILLS
                </button>
                <div className={`${siteState == 2 && !isLarge ? "justify-center mx-14 rounded" : "hidden"}`}>
                    <Skills isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>

                <button
                    onClick={() => handleSelect(3)}
                    className={`text-3xl m-6 ${siteState == 3 ? "text-white underline decoration-double decoration-white" : "text-inherit"}`}>
                    PROJECTS
                </button>
                <div className={`${siteState == 3 && !isLarge ? "justify-center mx-14  rounded" : "hidden"}`}>
                    <Projects isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>

                <button
                    onClick={() => handleSelect(4)}
                    className={`text-3xl m-6 ${siteState == 4 ? "text-white underline decoration-double decoration-white" : "text-inherit"}`}>
                    CONTACT</button>
                <div className={`${siteState == 4 && !isLarge ? "justify-center mx-14  rounded" : "hidden"}`}>
                    <Contact isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>
            </div>


            {/* container to hold the elements that show only when site state is appropriate and isLarge==true */}
            <div className="w-[85vw] justify-self-center">
                <div className={` ${siteState == 1 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
                    <About isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>
                <div className={`${siteState == 2 && isLarge ? "justify-center mx-5  rounded" : "hidden"}`}>
                    <Skills isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>
                <div className={`${siteState == 3 && isLarge ? "justify-center mx-5  rounded" : "hidden"}`}>
                    <Projects isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>
                <div className={`${siteState == 4 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
                    <Contact isLarge={isLarge}
                        setSiteState={setSiteState} />
                </div>
            </div>


        </>
    )

}