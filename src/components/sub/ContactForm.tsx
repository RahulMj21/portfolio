import { RocketLaunchIcon } from "@heroicons/react/20/solid";

const ContactForm = () => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full gap-4"
        >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-5 gap-y-4">
                <input className="contact-input" placeholder="Your Name" />
                <input
                    className="contact-input"
                    type="email"
                    placeholder="Your Email"
                />
                <input className="contact-input" placeholder="Subject" />
            </div>
            <textarea
                className="bg-slate-800/50 backdrop-blur-xl py-2 px-4 rounded-xl h-[14rem]"
                placeholder="Message"
            />
            <button
                type="submit"
                className="button-primary flex items-center gap-3 font-medium tracking-wide rounded-full mt-5 px-7 py-3 w-max cursor-pointer"
            >
                Send Message
                <RocketLaunchIcon className="h-5 w-5 mt-1" />
            </button>
        </form>
    );
};

export default ContactForm;
