"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBoxes = ({ className, ...rest }: { className?: string }) => {
    const rows = new Array(80).fill(1);
    const cols = new Array(80).fill(1);
    let colors = [
        "#8b5cf6", // Bright Violet (Primary)
        "#d946ef", // Bright Fuchsia (Secondary)
        "#06b6d4", // Bright Cyan (Accent)
        "#ec4899", // Bright Pink
        "#3b82f6", // Bright Blue
        "#10b981", // Bright Emerald
        "#f59e0b", // Bright Amber
    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-25%,-25%) skewX(-12deg) skewY(4deg) scale(2.5) translateZ(0)`,
            }}
            className={cn(
                "absolute -left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <div
                    key={`row` + i}
                    className="w-8 h-6  border-l  border-black/[0.06] dark:border-white/[0.03] relative"
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: getRandomColor(),
                                scale: 1.2,
                                boxShadow: `0 0 30px 4px rgba(124, 58, 237, 0.6)`,
                                zIndex: 50,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                backgroundColor: "rgba(0,0,0,0)",
                                scale: 1,
                                boxShadow: "0 0 0px 0px rgba(0,0,0,0)",
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                            key={`col` + j}
                            className="w-8 h-6  border-r border-t border-black/[0.1] dark:border-white/[0.05] relative pointer-events-auto"
                        >
                            {(j % 6 === 0 && i % 6 === 0) ? (
                                <div className="absolute h-[2px] w-[2px] -top-[1px] -left-[1px] bg-black/[0.15] dark:bg-white/[0.15] rounded-full" />
                            ) : null}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
};
