import React from "react";

export interface UIComponent {
    id: string;
    name: string;
    description: string;
    category: "Buttons" | "Inputs" | "Cards" | "Navigation" | "Headers" | "Dashboards" | "Footers" | "Badges" | "Typography" | "Feedback" | "Landing Pages" | "FAQ";
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
    },

    // --- DASHBOARDS (COMPLEX) ---
    {
        id: "stats-dashboard",
        name: "Stats Dashboard",
        description: "A comprehensive grid of stats cards with live indicators.",
        category: "Dashboards",
        code: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {['Revenue', 'Users', 'Sales', 'Profit'].map((label) => (
    <div key={label} className="p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2rem]">
      <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">{label}</p>
      <h3 className="text-3xl font-black mt-2 leading-none">$24,500</h3>
      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg w-fit">
        +12.5% ↑
      </div>
    </div>
  ))}
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
                {['Revenue', 'Users'].map((label) => (
                    <div key={label} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
                        <p className="text-neutral-500 text-[8px] font-bold uppercase tracking-tighter">{label}</p>
                        <h3 className="text-lg font-black mt-1 leading-none">$24K</h3>
                        <div className="mt-2 text-[8px] font-bold text-emerald-500">+12%</div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "sidebar-layout",
        name: "SaaS Sidebar",
        description: "Professional sidebar layout with user profile and navigation.",
        category: "Dashboards",
        code: `<aside className="w-64 h-screen border-r border-black/5 dark:border-white/5 flex flex-col p-6">
  <div className="text-xl font-bold mb-10 px-2">Fluxo</div>
  <nav className="flex-1 space-y-2">
    {['Dashboard', 'Projects', 'Tasks', 'Settings'].map((item) => (
      <button key={item} className="w-full text-left px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 font-bold transition-all">
        {item}
      </button>
    ))}
  </nav>
  <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-primary" />
    <span className="font-bold">Alex Smith</span>
  </div>
</aside>`,
        preview: (
            <div className="w-full max-w-[200px] border border-black/10 dark:border-white/10 rounded-3xl flex flex-col p-4 bg-background shadow-xl scale-90 origin-top-left">
                <div className="w-6 h-6 bg-primary rounded-lg mb-6" />
                <div className="space-y-1 mb-6">
                    <div className="h-6 w-full bg-primary/20 rounded-lg" />
                    <div className="h-6 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                    <div className="h-6 w-full bg-black/5 dark:bg-white/5 rounded-lg" />
                </div>
                <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-black/10 dark:bg-white/10" />
                    <div className="h-2 w-12 bg-black/10 dark:bg-white/10 rounded mt-2" />
                </div>
            </div>
        )
    },

    // --- LANDING PAGES ---
    {
        id: "hero-split",
        name: "Modern Split Hero",
        description: "A high-conversion landing page hero with split design.",
        category: "Landing Pages",
        code: `<section className="py-24 grid lg:grid-cols-2 gap-16 items-center">
  <div className="max-w-xl">
    <h1 className="text-7xl font-black tracking-tighter leading-[0.9]">Transform your workflow.</h1>
    <p className="text-xl text-neutral-500 mt-8 mb-12">The fastest way to build stunning components without the heavy lifting.</p>
    <div className="flex gap-4">
      <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl">Get Started</button>
      <button className="px-8 py-4 border border-black/10 dark:border-white/10 font-black rounded-2xl">View Docs</button>
    </div>
  </div>
  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] border border-black/5 dark:border-white/5" />
</section>`,
        preview: (
            <div className="w-full max-w-[320px] p-6 bg-background border border-black/10 dark:border-white/10 rounded-[2.5rem] shadow-2xl scale-75 origin-top-left">
                <div className="h-4 w-32 bg-primary/20 rounded-full mb-6" />
                <div className="h-8 w-full bg-foreground rounded-xl mb-3" />
                <div className="h-8 w-4/5 bg-foreground rounded-xl mb-6" />
                <div className="space-y-2 mb-8">
                    <div className="h-2 w-full bg-neutral-300 rounded" />
                    <div className="h-2 w-full bg-neutral-300 rounded" />
                    <div className="h-2 w-2/3 bg-neutral-300 rounded" />
                </div>
                <div className="flex gap-3">
                    <div className="h-10 w-24 bg-primary rounded-xl" />
                    <div className="h-10 w-24 border border-black/10 rounded-xl" />
                </div>
                <div className="mt-10 aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
            </div>
        )
    },
    {
        id: "pricing-tier",
        name: "Modern Pricing",
        description: "Three-tier pricing table with glassmorphism effects.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-3 gap-8">
  {['Starter', 'Pro', 'Enterprise'].map((tier) => (
    <div key={tier} className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2.5rem] hover:border-primary/50 transition-all">
      <h3 className="text-2xl font-black">{tier}</h3>
      <p className="text-4xl font-black mt-4 mb-8">{tier === 'Starter' ? '$0' : tier === 'Pro' ? '$29' : '$99'}<span className="text-sm font-bold text-neutral-500">/mo</span></p>
      <ul className="space-y-4 mb-10 text-neutral-500 font-bold">
        {['Unlimited components', 'Premium support', 'Live analytics'].map(f => <li key={f} className="flex gap-2 text-sm">✓ {f}</li>)}
      </ul>
      <button className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl">Select Plan</button>
    </div>
  ))}
</div>`,
        preview: (
            <div className="flex gap-3 w-full scale-75 origin-top-left overflow-x-auto pb-4 custom-scrollbar">
                {['Free', 'Pro'].map((t) => (
                    <div key={t} className="min-w-[160px] p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl shrink-0">
                        <div className="text-[10px] uppercase font-black text-neutral-500 mb-2">{t}</div>
                        <div className="text-2xl font-black mb-4">{t === 'Free' ? '$0' : '$29'}</div>
                        <div className="space-y-1.5 mb-6">
                            {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-full bg-foreground/10 rounded" />)}
                        </div>
                        <div className="h-8 w-full bg-foreground rounded-xl" />
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "feature-grid",
        name: "Bento Feature Grid",
        description: "A modern, asymmetrical grid for displaying product features.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-4 gap-4 auto-rows-[250px]">
  <div className="md:col-span-2 md:row-span-2 p-8 bg-primary/10 rounded-3xl border border-primary/20">Feature A</div>
  <div className="md:col-span-2 p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature B</div>
  <div className="p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature C</div>
  <div className="p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">Feature D</div>
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] scale-90 origin-top-left auto-rows-[80px]">
                <div className="col-span-2 row-span-1 bg-primary/10 rounded-2xl border border-primary/20 p-4 font-black text-[10px] text-primary">Main Feature</div>
                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10" />
                <div className="bg-black/5 dark:bg-white/5 rounded-2xl border border-black/10 dark:border-white/10" />
            </div>
        )
    },

    // --- FOOTERS ---
    {
        id: "footer-simple",
        name: "Modern Minimal Footer",
        description: "A clean footer with logo, links, and copyright.",
        category: "Footers",
        code: `<footer className="py-12 border-t border-black/5 dark:border-white/5 bg-background">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="flex items-center gap-2 font-black text-xl">PasteUI</div>
    <div className="flex gap-6 text-sm font-bold text-neutral-500">
      <a href="#" className="hover:text-foreground">About</a>
      <a href="#" className="hover:text-foreground">Docs</a>
      <a href="#" className="hover:text-foreground">Twitter</a>
    </div>
    <p className="text-xs text-neutral-400 font-bold">© 2024 PasteUI Inc.</p>
  </div>
</footer>`,
        preview: (
            <footer className="w-full py-6 border-t border-black/10 dark:border-white/10 bg-background/50 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex justify-between px-4 items-center">
                    <div className="h-4 w-12 bg-black/10 dark:bg-white/10 rounded" />
                    <div className="flex gap-2">
                        <div className="h-2 w-8 bg-black/5 dark:bg-white/5 rounded" />
                        <div className="h-2 w-8 bg-black/5 dark:bg-white/5 rounded" />
                    </div>
                </div>
            </footer>
        )
    },

    // --- DATA DISPLAY ---
    {
        id: "data-table",
        name: "Glass Data Table",
        description: "Responsive table with hover states and action buttons.",
        category: "Dashboards",
        code: `<div className="overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
  <table className="w-full text-left">
    <thead className="border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
      <tr>
        {['Product', 'Value', 'Status'].map(h => <th key={h} className="px-6 py-4 text-xs font-black uppercase text-neutral-500">{h}</th>)}
      </tr>
    </thead>
    <tbody>
      {[1, 2, 3].map(i => (
        <tr key={i} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <td className="px-6 py-4 font-bold text-sm">Component {i}</td>
          <td className="px-6 py-4 font-bold text-sm">$45.00</td>
          <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-lg uppercase">Active</span></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
        preview: (
            <div className="w-full max-w-[320px] rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-background/50 scale-90 origin-top-left">
                <div className="p-3 border-b border-black/5 bg-black/5 flex justify-between">
                    <div className="h-2 w-full bg-neutral-300 rounded" />
                </div>
                {[1, 2].map(i => (
                    <div key={i} className="p-3 flex justify-between items-center border-b border-black/[0.03]">
                        <div className="h-3 w-20 bg-black/10 dark:bg-white/10 rounded" />
                        <div className="h-4 w-12 bg-emerald-500/10 rounded-lg" />
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "faq-accordion",
        name: "Glass FAQ Accordion",
        description: "A sleek, animated FAQ section using standard Tailwind.",
        category: "FAQ",
        code: `<div className="space-y-4 max-w-3xl mx-auto">
  {[1, 2, 3].map(i => (
    <details key={i} className="group p-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl cursor-pointer transition-all hover:bg-black/10">
      <summary className="list-none flex justify-between items-center font-black">
        <span>What is the price?</span>
        <span className="group-open:rotate-180 transition-transform">↓</span>
      </summary>
      <div className="mt-4 text-neutral-500 font-bold leading-relaxed">
        Our prices are transparent and scale with your team size. Start for free today!
      </div>
    </details>
  ))}
</div>`,
        preview: (
            <div className="space-y-2 w-full max-w-[320px] scale-90 origin-top-left">
                {[1, 2].map(i => (
                    <div key={i} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl flex justify-between items-center">
                        <div className="h-3 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded" />
                        <div className="h-4 w-4 bg-primary/20 rounded text-[8px] flex items-center justify-center font-bold">↓</div>
                    </div>
                ))}
            </div>
        )
    },
    {
        id: "hero-modern-mockup",
        name: "Mockup Hero",
        description: "Center-aligned hero with a large floating application mockup.",
        category: "Landing Pages",
        code: `<section className="pt-32 pb-64 text-center">
  <h1 className="text-8xl font-black tracking-tighter max-w-4xl mx-auto">Build the impossible.</h1>
  <p className="mt-10 text-2xl text-neutral-500 max-w-2xl mx-auto">Modern components for modern teams.</p>
  <div className="mt-20 relative px-10">
    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[3rem] aspect-[16/10] shadow-2xl overflow-hidden p-6 animate-float">
      <div className="h-full w-full bg-background rounded-2xl border border-black/5 dark:border-white/5" />
    </div>
  </div>
</section>`,
        preview: (
            <div className="w-full text-center scale-75 origin-top-left">
                <div className="h-4 w-48 bg-primary/30 rounded-full mx-auto mb-6" />
                <div className="h-10 w-full bg-foreground rounded-2xl mb-12" />
                <div className="aspect-video bg-black/10 dark:bg-white/10 border-4 border-black/10 dark:border-white/10 rounded-[2rem] p-4 flex gap-2">
                    <div className="w-12 h-full bg-black/5 dark:bg-white/5 rounded-xl" />
                    <div className="flex-1 bg-background rounded-xl" />
                </div>
            </div>
        )
    },
    {
        id: "testimonial-grid",
        name: "Testimonial Grid",
        description: "Masonry-style grid for social proof and user feedback.",
        category: "Landing Pages",
        code: `<div className="grid md:grid-cols-3 gap-6 auto-rows-min">
  {[1, 2, 3, 4, 5, 6].map(i => (
    <div key={i} className="p-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-[2.5rem] break-inside-avoid shadow-xl">
      <p className="text-lg font-bold italic mb-6">"Best UI library I've ever used. Completely changed our workflow."</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary" />
        <div>
          <div className="font-black text-sm">John Doe</div>
          <div className="text-xs text-neutral-500 font-bold tracking-widest uppercase">CEO @ Startup</div>
        </div>
      </div>
    </div>
  ))}
</div>`,
        preview: (
            <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] scale-75 origin-top-left">
                {[1, 2, 3].map(i => (
                    <div key={i} className="p-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl">
                        <div className="h-2 w-full bg-neutral-300 rounded mb-4" />
                        <div className="h-2 w-3/4 bg-neutral-300 rounded mb-4" />
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-primary" />
                            <div className="h-1.5 w-12 bg-neutral-400 rounded mt-1.5" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
];


