"use client"
import About from "./About"
import { useState, useEffect } from "react";

interface stateProps {
    siteState: number;
    setSiteState: (index: number) => void;
}

export default function Navigation({ siteState, setSiteState }: stateProps) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isLarge = screenWidth > 1023;

    const handleSelect = (n: number) => {
        console.log(screenWidth)
        if (siteState != n) {
            setSiteState(n)
        } else {
            setSiteState(0)
        }
    }



    return (
        <>
            <div className="h-[65vh] flex flex-col justify-evenly lg:flex-row">
                <button
                    onClick={() => handleSelect(1)}
                    className="text-3xl font-ibmPlexMono text-beige">ABOUT ME</button>
                <div className={` ${siteState == 1 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About />
                </div>
                <button
                    onClick={() => handleSelect(2)}
                    className="text-3xl font-ibmPlexMono text-beige">WORKING</button>
                <div className={`${siteState == 2 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About />
                </div>
                <button
                    onClick={() => handleSelect(3)}
                    className="text-3xl font-ibmPlexMono text-beige">OTHER</button>
                <div className={`${siteState == 3 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About />
                </div>
                <button
                    onClick={() => handleSelect(4)}
                    className="text-3xl font-ibmPlexMono text-beige">GET IN TOUCH</button>
                <div className={`${siteState == 4 && !isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                    <About />
                </div>
            </div>

            <div className={` ${siteState == 1 && isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                <About />
            </div>
            <div className={`${siteState == 2 && isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                <About />
            </div>
            <div className={`${siteState == 3 && isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                <About />
            </div>
            <div className={`${siteState == 4 && isLarge ? "justify-center mx-14 bg-bittersweet rounded" : "hidden"}`}>
                <About />
            </div>

        </>
    )

}