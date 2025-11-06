import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from 'react-router-dom';
import { Bell, Search, ShoppingCart } from 'lucide-react';
import { MarketStrip } from './MarketStrip';
import { Sidebar } from './Sidebar';
export function AppShell({ children }) {
    return (_jsxs("div", { className: "h-full grid grid-cols-[280px_1fr] grid-rows-[auto_1fr]", children: [_jsxs("header", { className: "col-span-2 border-b border-kite-border bg-kite-panel/80 backdrop-blur px-4", children: [_jsxs("div", { className: "flex items-center gap-3 h-14", children: [_jsx(Link, { to: "/", className: "font-semibold", children: "Kite" }), _jsx(MarketStrip, {}), _jsxs("div", { className: "ml-auto flex items-center gap-3", children: [_jsx("button", { className: "muted hover:text-white", children: _jsx(Search, { size: 18 }) }), _jsx("button", { className: "muted hover:text-white", children: _jsx(Bell, { size: 18 }) }), _jsx("button", { className: "muted hover:text-white", children: _jsx(ShoppingCart, { size: 18 }) })] })] }), _jsxs("nav", { className: "flex gap-6 text-sm px-1 pb-2", children: [_jsx(Tab, { to: "/watchlists", label: "Watchlist" }), _jsx(Tab, { to: "/portfolio", label: "Portfolio" }), _jsx(Tab, { to: "/orders", label: "Orders" }), _jsx(Tab, { to: "/bids", label: "Bids" }), _jsx(Tab, { to: "/search", label: "Search" }), _jsx(Tab, { to: "/profile", label: "Profile" })] })] }), _jsx("aside", { className: "row-start-2 border-r border-kite-border p-3 overflow-y-auto bg-kite-panel", children: _jsx(Sidebar, {}) }), _jsx("main", { className: "row-start-2 overflow-y-auto p-4", children: children })] }));
}
function Tab({ to, label }) {
    return (_jsx(NavLink, { to: to, className: ({ isActive }) => `pb-2 -mb-2 border-b-2 ${isActive ? 'border-white text-white' : 'border-transparent muted hover:text-white'}`, children: label }));
}
