interface Props {
    text: string;
    subText: string;
    icon: JSX.Element;
}

const ContactItem = ({ text, subText, icon }: Props) => {
    return (
        <div className="flex items-start gap-2 lg:gap-5">
            {icon}
            <div>
                <h3 className="font-medium mb-1">{text} :</h3>
                <p className="text-gray-400">{subText}</p>
            </div>
        </div>
    );
};

export default ContactItem;
