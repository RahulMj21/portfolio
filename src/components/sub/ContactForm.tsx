import cn from "@/lib/cn";
import { SendMailSchema, TSendMailInput } from "@/schemas";
import { slideInFromRight } from "@/utils/motion";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const ContactForm = () => {
    const [formStatus, setFormStatus] = useState("");
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm<TSendMailInput>({ resolver: zodResolver(SendMailSchema) });

    const onSubmit: SubmitHandler<TSendMailInput> = async (values) => {
        try {
            setFormStatus("loading");
            const resp = await fetch("/api/send-mail", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await resp.json();
            if (data.status === "OK") {
                toast.success("Your message has been sent successfully.");
            }
        } catch (error) {
            toast.error("Failed to send your message.");
        } finally {
            setFormStatus("sent");
            setTimeout(() => {
                setFormStatus("");
            }, 2000);
            reset();
        }
    };
    return (
        <motion.form
            variants={slideInFromRight(1)}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4"
        >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-5 gap-y-4">
                <input
                    className="contact-input"
                    placeholder="Your Name"
                    {...register("name")}
                />
                <input
                    className="contact-input"
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                />
                <input
                    className="contact-input"
                    placeholder="Subject"
                    {...register("subject")}
                />
            </div>
            <textarea
                className="bg-slate-800/50 backdrop-blur-xl py-2 px-4 rounded-xl h-[14rem]"
                placeholder="Message"
                {...register("message")}
            />
            <button
                disabled={formStatus === "loading"}
                className="button-primary overflow-hidden flex items-center gap-3 font-medium tracking-wide rounded-full mt-5 px-7 py-3 w-max cursor-pointer"
            >
                Send Message
                <RocketLaunchIcon
                    className={cn(
                        "h-5 w-5 mt-1",
                        formStatus === "loading" && "rocket-loading",
                        formStatus === "sent" && "rocket-launch"
                    )}
                />
            </button>
        </motion.form>
    );
};

export default ContactForm;
