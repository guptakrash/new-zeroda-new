import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from 'lucide-react';
import { useState } from 'react';
const mockStocks = [
    { symbol: 'HDFCBANK', ex: 'BSE', price: 985.35, change: 0.02 },
    { symbol: 'INFY', ex: 'NSE', price: 1472.4, change: 0.3 },
    { symbol: 'TCS', ex: 'BSE', price: 3015.15, change: 0.84 },
    { symbol: 'ONGC', ex: 'NSE', price: 252.05, change: -0.11 },
    { symbol: 'HINDUNILVR', ex: 'BSE', price: 2439.2, change: -0.28 },
    { symbol: 'GOLDBEES', ex: 'NSE', price: 100.05, change: 0.25 }
];
export function WatchlistsPage() {
    const [query, setQuery] = useState('');
    const items = mockStocks.filter(s => s.symbol.toLowerCase().includes(query.toLowerCase()));
    return (_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "panel px-3 py-2 flex items-center gap-2", children: [_jsx(Search, { size: 16, className: "muted" }), _jsx("input", { value: query, onChange: e => setQuery(e.target.value), placeholder: "Search & add", className: "bg-transparent outline-none flex-1" }), _jsxs("div", { className: "muted text-xs", children: [items.length, "/100"] })] }), _jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4", children: [_jsx("div", { className: "panel divide-y divide-kite-border", children: items.map(s => (_jsxs("div", { className: "flex items-center gap-3 px-3 py-3", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: s.symbol }), _jsx("div", { className: "muted text-xs", children: s.ex })] }), _jsxs("div", { className: "ml-auto text-right", children: [_jsx("div", { className: s.change >= 0 ? 'text-kite-green' : 'text-kite-red', children: s.price.toLocaleString() }), _jsxs("div", { className: "muted text-xs", children: [s.change > 0 ? '+' : '', s.change, "%"] })] })] }, s.symbol))) }), _jsxs("div", { className: "panel p-4 min-h-[420px]", children: [_jsx("div", { className: "muted text-sm mb-2", children: "Charts" }), _jsxs("div", { className: "h-[360px] grid grid-cols-2 gap-3", children: [_jsx("div", { className: "bg-black/20 rounded-lg" }), _jsx("div", { className: "bg-black/20 rounded-lg" }), _jsx("div", { className: "bg-black/20 rounded-lg" }), _jsx("div", { className: "bg-black/20 rounded-lg" })] })] })] })] }));
}
