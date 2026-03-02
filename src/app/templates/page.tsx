"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Sidebar } from "@/components/sections/Sidebar";
import gsap from "gsap";
import { ExternalLink, ArrowRight, Layout, Star } from "lucide-react";

const templates = [
    {
        id: "saas-pro",
        name: "Nexus SaaS Landing",
        description: "Multi-section SaaS landing page with high-conversion components.",
        stars: 124,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        color: "from-purple-500 to-indigo-600"
    },
    {
        id: "portfolio-minimal",
        name: "Studio Portfolio",
        description: "Clean, agency-style portfolio with project grids and contact flows.",
        stars: 89,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: "dashboard-analytics",
        name: "Vantage Analytics",
        description: "Complete dashboard system with charts, sidebars, and data tables.",
        stars: 256,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-500 to-cyan-600"
    }
];

export default function TemplatesPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".template-header", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power4.out"
            });

            gsap.from(".template-card", {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Sidebar */}
                    <aside className="hidden md:block w-64 shrink-0">
                        <div className="sticky top-24">
                            <Suspense fallback={<div className="animate-pulse space-y-2">{[...Array(6)].map((_, i) => <div key={i} className="h-8 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />)}</div>}>
                                <Sidebar />
                            </Suspense>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <header className="template-header mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary mb-6 uppercase tracking-widest">
                                <Layout className="w-3.5 h-3.5" /> Full Stack Templates
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                                Premium <span className="text-gradient-vibrant">Blueprints.</span>
                            </h1>
                            <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
                                Production-ready templates built strictly with PasteUI components.
                                Deploy your next billion-dollar idea in record time.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {templates.map((tpl) => (
                                <div
                                    key={tpl.id}
                                    className="template-card group bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={tpl.image}
                                            alt={tpl.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl border border-black/10 dark:border-white/10 text-xs font-bold text-foreground">
                                                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {tpl.stars} Stars
                                            </div>
                                            <button className="px-5 py-2.5 bg-foreground text-background text-xs font-black rounded-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                                                LIVE PREVIEW <ExternalLink className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h3 className="text-3xl font-black mb-4 tracking-tight">{tpl.name}</h3>
                                        <p className="text-neutral-500 font-medium mb-8 leading-relaxed">
                                            {tpl.description}
                                        </p>
                                        <button className="flex items-center gap-3 text-primary text-sm font-black tracking-widest uppercase group-hover:gap-5 transition-all">
                                            USE TEMPLATE <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
