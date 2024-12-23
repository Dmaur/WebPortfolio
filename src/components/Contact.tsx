"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

interface AboutProps {
    isLarge: boolean;
    setSiteState: (index: number) => void;
}

export default function Contact({ isLarge, setSiteState }: AboutProps) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [messageCont, setMessageCont] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const form = useRef<HTMLFormElement | null>(null);
    const publicKey = "z0BimyDiKPSxpy1dC";
    const serviceId = "service_he1wspt";
    const templateId = "template_bbvcl8u";

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, publicKey)
                .then(() => {
                    setStatus("Message sent!");
                    setUserName("");
                    setUserEmail("");
                    setMessageCont("");
                    if (form.current) {
                        form.current.reset();
                    }
                    setIsAlertVisible(true);
                    setTimeout(() => {
                        setIsAlertVisible(false);
                    }, 3000);
                })
                .catch((err) => {
                    setStatus("Failed to send the message. Please try again.");
                    console.error("EmailJS error:", err);
                });
        }

    };

    return (
        <div className="m-2 p-4 h-[50vh] flex flex-col bg-glaucous-200 text-ash_gray-800 rounded-md overflow-y-auto">


            <div className="relative flex flex-row justify-center items-center">
                <h1 className="mb-5 text-xl  lg:text-4xl font-bold text-center">
                    Say Hi! <span className="text-5xl">&#128075;</span>
                </h1>
                <button
                    onClick={() => setSiteState(0)}
                    className="absolute font-medium top-0 right-0 mr-2 text-s text-white hover:bg-gray-100 hover:text-black hover:text-opacity-100 hover:rounded-full hover:opacity-25 p-3">
                    X
                </button>
            </div>

            <div className="flex flex-col self-center">
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row w-[63vw]">

                    <div className="m-5 flex flex-col self-center lg:flex-none lg:self-baseline ">
                        <label htmlFor="name" className="mb-2 w-[20vw] lg:w-[25vw]">
                            Name:
                        </label>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            className="rounded mb-4 text-black w-[50vw] lg:w-[20vw] h-10  p-2"
                            type="text"
                            id="name"
                            name="name"
                            maxLength={25}
                            placeholder="Jon Doe..."
                            required
                        />
                        <label htmlFor="email" className="mb-2 w-[20vw] lg:w-[25vw]">
                            Email:
                        </label>
                        <input
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="rounded mb-6 text-black w-[50vw] lg:w-[20vw] h-10 p-2"
                            type="email"
                            id="email"
                            name="email"
                            maxLength={50}
                            placeholder="YourEmail@example.com..."
                            required
                        />

                    </div>
                    <div className="flex flex-col lg:mt-4 ">

                        <label htmlFor="message" className="self-center w-[50vw] lg:w-[35vw]">
                            Message:
                        </label>
                        <textarea
                            onChange={(e) => setMessageCont(e.target.value)}
                            className="rounded mb-3 mt-3 self-center text-black w-[50vw] lg:w-[35vw] lg:mb-6 h-32 p-2"
                            name="message"
                            id="message"
                            placeholder="Message..."
                            required
                        ></textarea>

                        <div className="flex flex-col justify-items-center lg:justify-between lg:flex-row">

                            <button
                                type="submit"
                                className="w-40 mt-2 lg:mt-0 self-center py-3 rounded bg-drab-300 hover:bg-drab"
                            >
                                SEND
                            </button>
                            {status && isAlertVisible && <p className="self-center lg:mt-4 text-lg">{status}</p>}
                            {/* <p className=" self-center lg:mt-4 text-lg">Message sent!</p>   */}


                        </div>

                    </div>




                </form>

            </div>



        </div>
    );
}
