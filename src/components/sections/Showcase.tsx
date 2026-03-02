"use client";

import React, { useEffect, useRef } from "react";
import { componentsData } from "@/data/components";
import { ComponentCard } from "../ui/ComponentCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const Showcase = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".showcase-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-black/5 dark:bg-black/40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            The <span className="text-gradient-vibrant">Essential</span> Collection
                        </h2>
                        <p className="text-neutral-500 text-lg md:text-xl font-medium leading-relaxed">
                            A curated selection of our most popular components.
                            Build high-end interfaces in minutes instead of hours.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {componentsData.slice(0, 6).map((comp, i) => (
                        <div key={comp.id} className="showcase-card">
                            <ComponentCard
                                name={comp.name}
                                description={comp.description}
                                code={comp.code}
                                preview={comp.preview}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
