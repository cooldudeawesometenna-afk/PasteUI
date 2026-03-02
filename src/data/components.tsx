import React from "react";

export interface UIComponent {
    id: string;
    name: string;
    description: string;
    category: "Buttons" | "Inputs" | "Cards" | "Navigation" | "Headers" | "Dashboards" | "Footers" | "Badges" | "Typography" | "Feedback";
    code: string;
    preview: React.ReactNode;
}

export const componentsData: UIComponent[] = [
    // --- BUTTONS ---
    {
        id: "shiny-button",
        name: "Shiny Button",
        description: "A button with a smooth gradient animation on hover.",
        category: "Buttons",
        code: `<button className="relative px-6 py-3 font-bold text-foreground group outline-none overflow-hidden rounded-lg">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="absolute inset-0 w-full h-full border-2 border-black/20 dark:border-white/20 rounded-lg"></span>
  <span className="relative z-10 transition-colors group-hover:text-white">Hover Me</span>
</button>`,
        preview: (
            <button className="relative px-6 py-3 font-bold text-foreground group outline-none overflow-hidden rounded-lg">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full border-2 border-black/20 dark:border-white/20 rounded-lg"></span>
                <span className="relative z-10 transition-colors group-hover:text-white">Hover Me</span>
            </button>
        )
    },
    {
        id: "bouncing-button",
        name: "Bouncing Button",
        description: "A button that bounces when clicked.",
        category: "Buttons",
        code: `<button className="px-6 py-3 bg-primary text-white font-bold rounded-xl active:scale-90 transition-transform">Click Me</button>`,
        preview: <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl active:scale-95 transition-transform">Click Me</button>
    },
    {
        id: "outline-glow",
        name: "Outline Glow",
        description: "Border glow effect on hover.",
        category: "Buttons",
        code: `<button className="px-6 py-3 border border-primary/50 text-primary rounded-xl hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">Glow</button>`,
        preview: <button className="px-6 py-3 border border-primary/50 text-foreground rounded-xl hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all">Glow</button>
    },

    // --- INPUTS ---
    {
        id: "search-input-glass",
        name: "Glass Search",
        description: "Search bar with blurred background.",
        category: "Inputs",
        code: `<div className="relative group">
  <input type="text" placeholder="Search..." className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-12 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
</div>`,
        preview: (
            <div className="relative w-full max-w-[240px]">
                <input type="text" placeholder="Search..." className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-10 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
        )
    },
    {
        id: "modern-toggle",
        name: "Modern Toggle",
        description: "Animated switch component.",
        category: "Inputs",
        code: `<div className="w-12 h-6 bg-black/10 dark:bg-white/10 rounded-full p-1 cursor-pointer">
  <div className="w-4 h-4 bg-primary rounded-full transition-all"></div>
</div>`,
        preview: (
            <div className="w-12 h-6 bg-black/10 dark:bg-white/10 rounded-full p-1 cursor-pointer">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
        )
    },

    // --- CARDS ---
    {
        id: "nft-card",
        name: "NFT Display Card",
        description: "Premium card for assets.",
        category: "Cards",
        code: `<div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
  <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4"></div>
  <h4 className="text-foreground font-bold">Cyber Punk #42</h4>
  <p className="text-primary text-sm font-bold mt-1">2.5 ETH</p>
</div>`,
        preview: (
            <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl w-full max-w-[240px]">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4"></div>
                <h4 className="text-foreground font-bold text-sm">Cyber Punk #42</h4>
                <p className="text-primary text-xs font-bold mt-1">2.5 ETH</p>
            </div>
        )
    },

    // --- DASHBOARDS ---
    {
        id: "activity-chart-stub",
        name: "Activity Bars",
        description: "Animated height bars for stats.",
        category: "Dashboards",
        code: `<div className="flex items-end gap-1 h-20">
  <div className="w-2 bg-primary h-1/2 rounded-full"></div>
  <div className="w-2 bg-primary h-3/4 rounded-full"></div>
  <div className="w-2 bg-primary h-full rounded-full"></div>
</div>`,
        preview: (
            <div className="flex items-end gap-1 h-12">
                <div className="w-2 bg-primary h-1/2 rounded-full"></div>
                <div className="w-2 bg-primary h-3/4 rounded-full"></div>
                <div className="w-2 bg-primary h-full rounded-full"></div>
                <div className="w-2 bg-primary h-2/3 rounded-full"></div>
                <div className="w-2 bg-primary h-1/3 rounded-full"></div>
            </div>
        )
    },

    // --- HEADERS ---
    {
        id: "announcement-bar",
        name: "Announcement Bar",
        description: "Top bar for notices.",
        category: "Headers",
        code: `<div className="bg-primary/20 border-b border-primary/30 text-primary text-center py-2 text-sm font-medium">New features released! Check them out.</div>`,
        preview: (
            <div className="w-full bg-primary/20 border border-primary/30 text-primary text-center py-2 text-[10px] font-medium rounded-lg">
                New features released! Check them out.
            </div>
        )
    },

    // --- FEEDBACK ---
    {
        id: "circular-progress",
        name: "Circular Progress",
        description: "Animated ring loader.",
        category: "Feedback",
        code: `<div className="w-12 h-12 border-4 border-black/10 dark:border-white/10 border-t-primary rounded-full animate-spin"></div>`,
        preview: <div className="w-8 h-8 border-3 border-black/10 dark:border-white/10 border-t-primary rounded-full animate-spin"></div>
    },

    // --- NAVIGATION ---
    {
        id: "breadcrumb",
        name: "Breadcrumbs",
        description: "Modern navigation path.",
        category: "Navigation",
        code: `<div className="flex gap-2 text-sm text-neutral-500">
  <span>Home</span> / <span>Docs</span> / <span className="text-foreground">Buttons</span>
</div>`,
        preview: (
            <div className="flex gap-2 text-xs text-neutral-500">
                <span>Home</span> / <span>Docs</span> / <span className="text-foreground">Buttons</span>
            </div>
        )
    },

    // --- TYPOGRAPHY ---
    {
        id: "code-block",
        name: "Inline Code",
        description: "Styled code snippet.",
        category: "Typography",
        code: `<code className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded text-purple-600 dark:text-purple-400 font-mono text-sm">npm install</code>`,
        preview: <code className="px-2 py-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded text-purple-600 dark:text-purple-400 font-mono text-[10px]">npm install</code>
    },
    {
        id: "feature-title",
        name: "Impact Head",
        description: "High impact section title.",
        category: "Typography",
        code: `<h2 className="text-4xl font-black tracking-tight"><span className="text-primary mr-2">//</span>Main Feature</h2>`,
        preview: <h2 className="text-xl font-black tracking-tight text-foreground"><span className="text-primary mr-2">//</span>Main Feature</h2>
    },

    // --- DAISY-INSPIRED MOCKUPS ---
    {
        id: "browser-mockup",
        name: "Browser Window",
        description: "Classic browser window mockup frame.",
        category: "Cards",
        code: `<div className="mockup-window shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 p-6">Hello World</div>`,
        preview: (
            <div className="mockup-window shadow-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 p-6 w-full max-w-[280px]">
                <div className="text-foreground text-[10px] font-mono opacity-50">Browser View</div>
            </div>
        )
    },
    {
        id: "chat-bubble-left",
        name: "Chat Bubble (Left)",
        description: "Modern chat message with user avatar.",
        category: "Feedback",
        code: `<div className="flex items-end gap-2">
  <div className="w-8 h-8 bg-primary rounded-full" />
  <div className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl rounded-bl-sm text-sm">Hello there!</div>
</div>`,
        preview: (
            <div className="flex items-end gap-2 w-full">
                <div className="w-6 h-6 bg-primary rounded-full shrink-0" />
                <div className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl rounded-bl-none text-[10px] text-foreground">
                    Hello there! 👋
                </div>
            </div>
        )
    },
    {
        id: "chat-bubble-right",
        name: "Chat Bubble (Right)",
        description: "Modern chat message for the current user.",
        category: "Feedback",
        code: `<div className="flex items-end gap-2 justify-end">
  <div className="px-4 py-2 bg-primary text-white rounded-2xl rounded-br-sm text-sm">Hi! How are you?</div>
</div>`,
        preview: (
            <div className="flex items-end gap-2 justify-end w-full">
                <div className="px-3 py-1.5 bg-primary text-white rounded-xl rounded-br-none text-[10px]">
                    How's the UI looking?
                </div>
            </div>
        )
    },
    {
        id: "step-indicator",
        name: "Vertical Steps",
        description: "Process tracking indicator.",
        category: "Navigation",
        code: `<div className="flex flex-col gap-4">
  <div className="flex gap-4 items-center"><div className="w-8 h-8 bg-primary rounded-full" /><span>Step 1</span></div>
</div>`,
        preview: (
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold">1</div>
                    <span className="text-foreground text-[10px] font-bold">Concept</span>
                </div>
                <div className="w-px h-4 bg-black/10 dark:bg-white/10 ml-3" />
                <div className="flex gap-3 items-center">
                    <div className="w-6 h-6 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center text-[10px] text-neutral-500">2</div>
                    <span className="text-neutral-500 text-[10px]">Review</span>
                </div>
            </div>
        )
    },
    {
        id: "alert-info",
        name: "Modern Alert",
        description: "Semantic info alert bar.",
        category: "Feedback",
        code: `<div className="p-4 bg-info/10 border border-info/20 text-info rounded-2xl flex gap-3">...</div>`,
        preview: (
            <div className="p-3 bg-[#3abff81a] border border-[#3abff833] text-[#3abff8] rounded-xl flex gap-3 w-full max-w-[280px]">
                <span className="text-xs">ℹ️</span>
                <span className="text-[10px] font-bold">Updates available.</span>
            </div>
        )
    }
];


