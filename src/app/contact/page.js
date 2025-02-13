"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "@/assets/brand/contact.jpg"
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Title from "@/components/home/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Log form values
        // console.log("Name:", form.current.user_name.value);
        // console.log("Email:", form.current.user_email.value);
        console.log("Message:", form.current);
        emailjs
            .sendForm(
                "service_w894j2t",
                "template_e6kbbk8",
                form.current,
                "Aqh28jQq2xlNjpKZB"
            )
            // .sendForm(
            //     "service_ngj61pm",
            //     "template_39d1qga",
            //     form.current,
            //     "fYc9OsJqwXNOnP2_w"
            // )
            .then(
                (result) => {
                    toast.success('Message Sent')
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (

        <div id="contact" className="mb-16 mt-16 w-11/12 md:w-10/12 mx-auto">
            <Title heading={'Contact Me'} />
            <Toaster />
            <div className="md:flex md:gap-20 justify-between items-center">
                <form className="flex-1 md:w-1/2 mx-auto space-y-8" ref={form} onSubmit={sendEmail}>
                    <div>
                        <Input label="Name" color="blue" required type="text" name="user_name" />
                    </div>
                    <div>
                        <Input label="Email" color="purple" required type="email" name="user_email" />
                    </div>
                    <div>
                        <Textarea label="Message" color="indigo" required name="message" />
                    </div>
                    <Button color="blue" className="btn w-full " type="submit" >Send Message</Button>
                </form>
                <div className="flex-1">
                    <Image src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;

