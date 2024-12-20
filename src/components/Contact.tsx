"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface AboutProps {
    isLarge: boolean;
    setSiteState: (index: number) => void;
}

export default function Contact({ isLarge, setSiteState }: AboutProps) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [messageCont, setMessageCont] = useState<string>("");
    const [status, setStatus] = useState<string>("");

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
                    setStatus("Message sent successfully!");
                    setUserName("");
                    setUserEmail("");
                    setMessageCont("");
                    if (form.current) {
                        form.current.reset();
                    }
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
                <h1 className="mb-5 text-xl mt-2 lg:text-4xl font-bold text-center">
                    Say Hi! <span className="text-6xl">&#128075;</span>
                </h1>
                <button
                    onClick={() => setSiteState(0)}
                    className="absolute top-0 right-0 mr-2 text-3xl">
                    X
                </button>
            </div>

            <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col self-center w-[50vw]"
            >
                <label htmlFor="name" className="mb-2 self-center">
                    Name:
                </label>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    className="rounded mb-6 text-black w-[25vw] h-8 self-center p-2"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jon Doe..."
                    required
                />

                <label htmlFor="email" className="mb-2 self-center">
                    Your email:
                </label>
                <input
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="rounded mb-6 text-black w-[25vw] h-8 self-center p-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com..."
                    required
                />

                <label htmlFor="message" className="mb-2 self-center">
                    Message:
                </label>
                <textarea
                    onChange={(e) => setMessageCont(e.target.value)}
                    className="rounded mb-6 text-black w-[35vw] h-30 self-center p-2"
                    name="message"
                    id="message"
                    placeholder="Message..."
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-40 self-center py-3 rounded bg-drab hover:bg-drab-dark"
                >
                    SEND
                </button>
            </form>
            {status && <p className="self-center mt-4 text-lg">{status}</p>}
        </div>
    );
}
