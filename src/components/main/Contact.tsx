"use client";

import { motion } from "framer-motion";
import ContactItem from "@/components/sub/ContactItem";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactSocial from "@/components/sub/ContactSocial";
import ContactForm from "@/components/sub/ContactForm";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const Contact = () => {
    return (
        <section id="contact" className="py-20 flex flex-col gap-14">
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromTop(0.5)}
                className="text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] font-semibold text-center"
            >
                CONTACT
                <span className="ml-4 bg-gradient-to-br bg-clip-text text-transparent from-purple-600 to-cyan-700">
                    ME
                </span>
            </motion.h1>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-20"
            >
                <div className="flex flex-col gap-4 w-full lg:w-[30%]">
                    <motion.h2
                        variants={slideInFromLeft(0.8)}
                        className="text-[1.563rem] font-semibold"
                    >
                        GET IN TOUCH
                    </motion.h2>
                    <motion.p
                        variants={slideInFromLeft(0.9)}
                        className="text-gray-400 mb-6"
                    >
                        If you want to collaborate or have any project in your
                        mind, feel free to contact me.
                    </motion.p>
                    <motion.div
                        variants={slideInFromLeft(1)}
                        className="flex align-center flex-wrap lg:flex-col w-full gap-8 lg:gap-5"
                    >
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
                    </motion.div>
                    <ContactSocial />
                </div>
                <div className="w-full  lg:w-[70%]">
                    <ContactForm />
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
