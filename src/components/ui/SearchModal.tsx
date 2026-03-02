"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Box, ArrowRight } from "lucide-react";
import { componentsData } from "@/data/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                if (isOpen) onClose();
                else {
                    // This is handled in Navbar now, but we can also handle it here if it's rendered globally. 
                }
            }
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const filteredComponents = componentsData.filter(
        (comp) =>
            comp.name.toLowerCase().includes(query.toLowerCase()) ||
            comp.description.toLowerCase().includes(query.toLowerCase()) ||
            comp.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 6);

    const handleSelect = (category: string) => {
        onClose();
        router.push(`/components?category=${category}`);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-white/70 dark:bg-black/80 backdrop-blur-2xl z-[100]"
                    />
                    <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[10vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="bg-background border border-black/10 dark:border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_0_80px_rgba(124,58,237,0.15)] pointer-events-auto"
                        >
                            <div className="flex items-center px-4 py-4 border-b border-black/5 dark:border-white/5">
                                <Search className="w-5 h-5 text-neutral-500 mr-3 shrink-0" />
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search components or docs..."
                                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-neutral-500 text-lg"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors text-neutral-500 hover:text-foreground shrink-0 ml-2"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-2 max-h-[60vh] overflow-y-auto">
                                {query.length === 0 ? (
                                    <div className="p-8 text-center text-neutral-500">
                                        <div className="inline-flex p-3 bg-black/5 dark:bg-white/5 rounded-2xl mb-4">
                                            <Search className="w-6 h-6 text-neutral-400" />
                                        </div>
                                        <p className="font-medium">Type to start searching...</p>
                                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                                            <span className="text-xs font-bold text-neutral-600 block w-full mb-2">QUICK LINKS</span>
                                            {["Buttons", "Cards", "Dashboards"].map(cat => (
                                                <button
                                                    key={cat}
                                                    onClick={() => handleSelect(cat)}
                                                    className="px-3 py-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-xs font-bold transition-colors"
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : filteredComponents.length > 0 ? (
                                    <div className="space-y-1">
                                        {filteredComponents.map((comp) => (
                                            <button
                                                key={comp.id}
                                                onClick={() => handleSelect(comp.category)}
                                                className="w-full text-left p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl flex items-center justify-between group transition-colors"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                        <Box className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{comp.name}</h4>
                                                        <p className="text-xs text-neutral-500">{comp.description}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{comp.category}</span>
                                                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-primary transition-colors" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-12 text-center text-neutral-500">
                                        <p className="font-medium text-lg">No results found.</p>
                                        <p className="text-sm mt-2">Try searching for something else.</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.01] flex items-center justify-between text-xs font-medium text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <span>Search powered by</span>
                                    <span className="font-black text-primary">PasteUI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <kbd className="px-1.5 py-0.5 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10 text-[10px] font-sans">esc</kbd>
                                    <span>to close</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
