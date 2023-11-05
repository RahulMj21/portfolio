export const slideInFromLeft = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 },
    },
});
export const slideInFromRight = (delay: number) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 },
    },
});

export const slideInFromTop = (delay: number) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.5 },
    },
});
export const slideInFromBottom = (delay: number) => ({
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay, duration: 0.5 },
    },
});
