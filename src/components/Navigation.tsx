"use client"
import About from "./About"
import { useState, useEffect } from "react";

interface stateProps {
    siteState: number;
    setSiteState: (index: number) => void;
}

export default function Navigation({ siteState, setSiteState }: stateProps) {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isLarge = screenWidth > 1023;

    const handleSelect = (n: number) => {
        siteState != n ? setSiteState(n) : setSiteState(0);
    }



    return (
        <>
            <div className="h-[65vh] flex flex-col justify-evenly lg:flex-row lg:h-[30vh]">
                <button
                    onClick={() => handleSelect(1)}
                    className="text-3xl text-beige mb-1.5">_ABOUT</button>
                <div className={` ${siteState == 1 && !isLarge ? "justify-center mx-14 bg-glaucous rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(2)}
                    className="text-3xl text-beige m-6">_PROJECTS</button>
                <div className={`${siteState == 2 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(3)}
                    className="text-3xl text-beige m-6">_SKILLS</button>
                <div className={`${siteState == 3 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <button
                    onClick={() => handleSelect(4)}
                    className="text-3xl text-beige m-6">_CONTACT</button>
                <div className={`${siteState == 4 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
            </div>

            <div className="w-[85vw] justify-self-center">
                <div className={` ${siteState == 1 && isLarge ? "justify-center mx-5 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 2 && isLarge ? "justify-center mx-5 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 3 && isLarge ? "justify-center mx-5 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>
                <div className={`${siteState == 4 && isLarge ? "justify-center mx-5 bg-bittersweet rounded" : "hidden"}`}>
                    <About screen={screenWidth} />
                </div>

            </div>


        </>
    )

}