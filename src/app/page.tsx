"use client"
import Image from "next/image";
import StackIcon from "tech-stack-icons";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {

  const [siteState, changeSiteState] = useState("0");


  return (
    <>
    

      <Navigation />
      <div className="flex justify-evenly justify-self-end p-4 shadow-lg bg-Dgray-300">
                <div className="techStack">
                    <StackIcon name="java" />
                </div>
                <div className="techStack">
                    <StackIcon name="js" />
                </div>
                <div className="techStack">
                    <StackIcon name="csharp" />
                </div>
                <div className="techStack">
                    <StackIcon name="linux" />
                </div>
                <div className="techStack">
                    <StackIcon name="npm" />
                </div>
                <div className="techStack">
                    <StackIcon name="bootstrap4" />
                </div>
                <div className="techStack">
                    <StackIcon name="nextjs" />
                </div>
            </div>

    </>
  );
}
