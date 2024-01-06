import cn from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

const Container = ({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn(
                "w-[80rem] max-w-full px-5 desktop-px-0 overflow-x-hidden mx-auto relative",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
