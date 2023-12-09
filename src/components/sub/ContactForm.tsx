import FormError from "@/components/common/FormError";
import { ContactInputs } from "@/data";
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
                toast.success("Message sent successfully.");
            }
        } catch (error) {
            toast.error("Failed to send message.");
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
            <div className="grid grid-cols-[repeat(auto-fit,minmax(285px,1fr))] gap-x-5 gap-y-4">
                {ContactInputs.map(({ key, placeholder, type }) => (
                    <div
                        key={key}
                        className={cn(
                            "relative",
                            errors[key]?.message && "mb-4"
                        )}
                    >
                        <input
                            className="bg-slate-800/50 py-2 px-4 rounded-full backdrop-blur-lg w-full"
                            placeholder={placeholder}
                            type={type}
                            {...register(key)}
                        />
                        <FormError message={errors[key]?.message} />
                    </div>
                ))}
            </div>
            <div className="relative">
                <textarea
                    className="bg-slate-800/50 backdrop-blur-xl py-2 px-4 rounded-xl max-h-[14rem] min-h-[14rem] w-full"
                    placeholder="Message"
                    {...register("message")}
                />
                <FormError
                    className="top-full"
                    message={errors.message?.message}
                />
            </div>
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
