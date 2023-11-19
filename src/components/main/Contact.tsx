"use client";

import { motion } from "framer-motion";
import ContactItem from "@/components/sub/ContactItem";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactSocial from "@/components/sub/ContactSocial";
import ContactForm from "@/components/sub/ContactForm";

const Contact = () => {
    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 flex flex-col gap-10"
        >
            <motion.h1 className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] font-semibold text-center">
                CONTACT <span className="text-purple-500">ME</span>
            </motion.h1>
            <div className="flex flex-col lg:flex-row items-start gap-20">
                <div className="flex flex-col gap-4 w-full lg:w-[30%]">
                    <h2 className="text-[1.563rem] font-semibold">
                        GET IN TOUCH
                    </h2>
                    <p className="text-gray-400 mb-6">
                        If you want to collaborate or have any project in your
                        mind, feel free to contact me.
                    </p>
                    <div className="flex align-center flex-wrap lg:flex-col w-full gap-8 lg:gap-5">
                        <ContactItem
                            text="Address"
                            subText="Baruipur Kolkata, India"
                            icon={
                                <MapPinIcon className="h-5 w-5 mt-1 text-purple-500" />
                            }
                        />
                        <ContactItem
                            text="Email"
                            subText="rahulmondar@gmail.com"
                            icon={
                                <EnvelopeIcon className="h-5 w-5 mt-1 text-purple-500" />
                            }
                        />
                        <ContactItem
                            text="Number"
                            subText="+91 6291502667"
                            icon={
                                <PhoneIcon className="h-4 w-5 mt-1 text-purple-500" />
                            }
                        />
                    </div>
                    <ContactSocial />
                </div>
                <div className="w-full  lg:w-[70%]">
                    <ContactForm />
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
