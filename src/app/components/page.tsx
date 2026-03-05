"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Sidebar } from "@/components/sections/Sidebar";
import { componentsData } from "@/data/components";
import { ComponentCard } from "@/components/ui/ComponentCard";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";

const categories = ["All", "Buttons", "Inputs", "Cards", "Navigation", "Headers", "Dashboards", "Landing Pages", "Footers", "FAQ", "Badges", "Feedback", "Typography"];

function ComponentsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const [activeCategory, setActiveCategory] = useState("All");
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory("All");
        }
    }, [categoryParam]);

    const filteredComponents = activeCategory === "All"
        ? componentsData
        : componentsData.filter(c => c.category === activeCategory);

    useEffect(() => {
        if (gridRef.current) {
            gsap.fromTo(
                gridRef.current.children,
                { opacity: 0, y: 30, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: "power2.out", clearProps: "all" }
            );
        }
    }, [activeCategory]);

    return (
        <div className="flex flex-col md:flex-row gap-10">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 shrink-0">
                <div className="sticky top-24">
                    <Sidebar />
                </div>
            </aside>

            <div className="flex-1 min-w-0">
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-black text-secondary mb-6 uppercase tracking-widest">
                        Components Library
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
                        Building Blocks.
                    </h1>
                    <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
                        Browse our extensive collection of {componentsData.length}+ premium Tailwind CSS components.
                        Designed to be modular, accessible, and high-performance.
                    </p>
                </header>

                {/* Filter Bar */}
                <div className="flex gap-2 mb-12 overflow-x-auto pb-4 custom-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                window.dispatchEvent(new CustomEvent("close-all-code-modals", { detail: null }));
                            }}
                            className={`px-6 py-2 rounded-2xl border text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(124,58,237,0.3)] scale-105"
                                : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20 text-neutral-500 dark:text-neutral-400 hover:text-foreground"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div ref={gridRef} className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {filteredComponents.map((comp) => (
                        <div key={comp.id}>
                            <ComponentCard
                                name={comp.name}
                                description={comp.description}
                                code={comp.code}
                                preview={comp.preview}
                                category={comp.category}
                                hasSidebar={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-8">
                <div className="relative flex flex-col items-center gap-6">
                    {/* Glowing background effect */}
                    <div className="absolute inset-x-0 inset-y-0 bg-primary/20 blur-[50px] rounded-full animate-pulse" />

                    {/* Logo Section */}
                    <div className="relative p-6 bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-4 animate-in zoom-in duration-700">
                        <div className="p-3 bg-primary/10 dark:bg-white/5 rounded-2xl border border-primary/20">
                            <img src="/favicon.png" alt="PasteUI Logo" className="w-12 h-12 object-contain" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-400">
                                PasteUI
                            </h2>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mt-1">
                                Premium Components
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading Indicator */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative w-48 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary w-1/2 rounded-full animate-loading-progress" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 animate-pulse">
                        Library Loading...
                    </span>
                </div>
            </div>

            {/* Custom Animation Keyframes Injection */}
            <style jsx global>{`
                @keyframes loading-progress {
                    0% { transform: translateX(-100%); width: 20%; }
                    50% { transform: translateX(100%); width: 80%; }
                    100% { transform: translateX(300%); width: 20%; }
                }
                .animate-loading-progress {
                    animation: loading-progress 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
                }
            `}</style>
        </div>
    );
}

export default function ComponentsPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force a minimum loading time to show off the beautiful animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />
            <div className="container mx-auto px-4">
                <Suspense fallback={<LoadingScreen />}>
                    <ComponentsContent />
                </Suspense>
            </div>
        </main>
    );
}
