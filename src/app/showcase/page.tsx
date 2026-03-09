"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Sidebar } from "@/components/sections/Sidebar";
import gsap from "gsap";
import { ExternalLink, Star, Compass } from "lucide-react";

const showcaseItems = [
    {
        title: "Nova Dashboard",
        author: "Shayan Shah",
        stars: 128,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Echo Landing",
        author: "Alex Rivera",
        stars: 84,
        image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Prism UI Kit",
        author: "Elena Moon",
        stars: 215,
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Flow State",
        author: "Marcus Chen",
        stars: 412,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    }
];

export default function ShowcasePage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".showcase-header", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power4.out"
            });

            gsap.from(".showcase-item", {
                opacity: 0,
                scale: 0.95,
                stagger: 0.15,
                duration: 0.8,
                ease: "back.out(1.7)",
                delay: 0.3
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    <aside className="hidden md:block w-64 shrink-0">
                        <div className="sticky top-24">
                            <Suspense fallback={<div className="animate-pulse space-y-2">{[...Array(6)].map((_, i) => <div key={i} className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />)}</div>}>
                                <Sidebar />
                            </Suspense>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <header className="showcase-header mb-20 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-black text-accent mb-6 uppercase tracking-widest">
                                <Compass className="w-3.5 h-3.5" /> Made with PasteUI
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                                Design <span className="text-gradient-vibrant">Spotlight.</span>
                            </h1>
                            <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
                                Curated collection of the best projects built by our community.
                                Submit your work and get featured to thousands of developers.
                            </p>
                            <button className="mt-10 px-8 py-4 bg-foreground text-background font-black rounded-2xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-xl mx-auto md:mx-0">
                                Submit Project <ExternalLink className="w-5 h-5" />
                            </button>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {showcaseItems.map((item, i) => (
                                <div key={i} className="showcase-item group">
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 mb-8 shadow-2xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 right-6 px-4 py-2 bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-2xl flex items-center gap-2 text-xs font-black border border-black/10 dark:border-white/10 shadow-2xl text-foreground">
                                            <Star className="w-4 h-4 text-secondary fill-secondary" />
                                            {item.stars}
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white/90 dark:from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-full py-4 bg-foreground text-background font-black rounded-2xl text-xs flex items-center justify-center gap-2">
                                                VIEW PROJECT <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-4">
                                        <div>
                                            <h3 className="text-2xl font-black text-foreground mb-1 tracking-tight">{item.title}</h3>
                                            <p className="text-neutral-500 font-bold uppercase text-[10px] tracking-[0.2em]">BY {item.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
