"use client"
import About from "./About"
import Feature from "./FeatureProject";
import { useState, useEffect } from "react";

// drilled in siteState for tracking and changing the site state as buttons are pressed. 
interface stateProps {
    siteState: number;
    setSiteState: (index: number) => void;
}

export default function Navigation({ siteState, setSiteState }: stateProps) {

    // variable for keeping track of screen width for dynamically showing/hiding different elements. 
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    // listens for screen size change and updates accordingly 
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // const for checking if the screen is large or not
    const isLarge = screenWidth > 1023;


    // when the buttons are clicked, it checks the passed in number against the site state and changes state accoridngly. 
    const handleSelect = (n: number) => {
        siteState != n ? setSiteState(n) : setSiteState(0);
    }



    return (
        <>
            {/* unber each button is the element that will show if site state is appropriate and isLarge==false */}
            <div className="h-[85vh] flex flex-col justify-evenly  lg:flex-row lg:h-[30vh]">
                <button
                    onClick={() => handleSelect(1)}
                    className="text-3xl text-beige mt-4 mb-1.5">_ABOUT</button>
                <div className={` ${siteState == 1 && !isLarge ? "justify-center mx-14" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(2)}
                    className="text-3xl text-beige m-6">_SKILLS</button>
                <div className={`${siteState == 2 && !isLarge ? "justify-center mx-14 rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(3)}
                    className="text-3xl text-beige m-6">_PROJECTS</button>
                <div className={`${siteState == 3 && !isLarge ? "justify-center mx-14  rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(4)}
                    className="text-3xl text-beige m-6">_CONTACT</button>
                <div className={`${siteState == 4 && !isLarge ? "justify-center mx-14  rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
            </div>


            {/* container to hold the elements that show only when site state is appropriate and isLarge==true */}
            <div className="w-[85vw] justify-self-center">
                <div className={` ${siteState == 1 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 2 && isLarge ? "justify-center mx-5  rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 3 && isLarge ? "justify-center mx-5  rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 4 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
            </div>

            {/* feature project that is only visible when no other buttons are pressed (states used) and screen size is large */}
            <div className={`${siteState == 0 && isLarge ? "justify-center mx-5 rounded" : "hidden"}`}>
                <Feature />
            </div>


        </>
    )

}