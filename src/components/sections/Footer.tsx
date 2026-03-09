import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-black/5 dark:border-white/5 py-12 bg-black/5 dark:bg-black/40 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-primary/10 dark:bg-white/5 rounded-xl border border-primary/20">
                            <img src="/favicon.png" alt="PasteUI Logo" className="w-6 h-6 object-contain" />
                        </div>
                        <span className="text-lg font-black tracking-tighter text-foreground">PasteUI</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-normal text-neutral-500 dark:text-neutral-400">
                        <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
                        <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
                        <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                    </div>

                    <p className="text-sm text-neutral-500 font-normal flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the community
                    </p>
                </div>
                <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 text-center text-xs text-neutral-500 dark:text-neutral-600 font-medium">
                    © {new Date().getFullYear()} PasteUI. Managed by Shayan Shah.
                </div>
            </div>
        </footer>
    );
};
