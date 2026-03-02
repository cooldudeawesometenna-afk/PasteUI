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
                            onClick={() => setActiveCategory(cat)}
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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default function ComponentsPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />
            <div className="container mx-auto px-4">
                <Suspense fallback={<div className="text-foreground">Loading...</div>}>
                    <ComponentsContent />
                </Suspense>
            </div>
        </main>
    );
}

