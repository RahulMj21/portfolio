import cn from "@/lib/cn";
import { ComponentPropsWithoutRef } from "react";

const Container = ({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={cn("max-w-7xl px-5 md:px-6 mx-auto relative", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
