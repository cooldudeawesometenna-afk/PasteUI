"use client";

import React, { useRef, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Mail, Github, Twitter, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSubmitting(true);
        setStatus('idle');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );
            setStatus('success');
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "hello@pasteui.online",
            description: "For support or business inquiries.",
            link: "mailto:hello@pasteui.online"
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            title: "Twitter",
            value: "@PasteUI",
            description: "Follow us for updates and news.",
            link: "https://twitter.com/PasteUI"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "PasteUI Issues",
            description: "Report bugs or request features.",
            link: "https://github.com/shayanshahDeveloper/PasteUI/issues"
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            Contact <span className="text-gradient-vibrant">Us</span>
                        </h1>
                        <p className="text-xl text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed">
                            Have questions or suggestions? We'd love to hear from you. 
                            Choose your preferred way to reach out.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {contactMethods.map((method, i) => (
                            <a 
                                key={i} 
                                href={method.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group p-8 bg-black/[0.02] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] rounded-[2.5rem] hover:border-primary/50 transition-all hover:translate-y-[-4px]"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    {method.icon}
                                </div>
                                <h2 className="text-2xl font-bold mb-2 tracking-tight">{method.title}</h2>
                                <p className="text-neutral-600 dark:text-neutral-400 font-normal mb-4">{method.description}</p>
                                <span className="text-primary font-bold">{method.value}</span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Form Section */}
                    <div className="p-8 md:p-12 bg-black/[0.02] dark:bg-white/[0.01] border border-black/[0.05] dark:border-white/[0.05] rounded-[3rem]">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4 tracking-tight">Send us a <span className="text-gradient-vibrant">message</span></h2>
                                <p className="text-neutral-500 font-normal leading-[1.8] mb-8">
                                    Fill out the form and we'll get back to you as soon as possible. 
                                    Average response time is within 24 hours.
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-neutral-400 font-normal">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <span>San Francisco, California</span>
                                    </div>
                                </div>
                            </div>

                            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                                <div className="grid gap-4">
                                    <input 
                                        type="text" 
                                        name="user_name"
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-6 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-normal"
                                    />
                                    <input 
                                        type="email" 
                                        name="user_email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-6 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-normal"
                                    />
                                </div>
                                <textarea 
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    className="w-full px-6 py-4 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-colors font-normal resize-none"
                                />
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>

                                {status === 'success' && (
                                    <div className="flex items-center gap-2 text-green-500 font-bold bg-green-500/10 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        Message sent successfully!
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-500 font-bold bg-red-500/10 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                                        <AlertCircle className="w-5 h-5" />
                                        Failed to send message. Please try again.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
