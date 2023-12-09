import cn from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
    message?: string;
}

const FormError = ({ message, className, ...props }: Props) => {
    return (
        <p
            className={cn(
                "text-sm absolute top-[115%] left-4 text-red-500",
                className
            )}
            {...props}
        >
            {message}
        </p>
    );
};

export default FormError;
