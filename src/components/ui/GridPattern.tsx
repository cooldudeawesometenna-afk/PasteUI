"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: string;
    className?: string;
}

export const GridPattern = ({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = "0",
    className,
    ...props
}: GridPatternProps) => {
    return (
        <svg
            className={cn(
                "absolute inset-0 h-full w-full pointer-events-none fill-neutral-400/30 stroke-neutral-400/30",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={`grid-pattern`}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#grid-pattern)`} />
        </svg>
    );
};
