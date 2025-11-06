import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
export function MarketStrip() {
    // Static mock values
    const markets = [
        { name: 'NIFTY 50', value: 25553.1, change: -0.17 },
        { name: 'NIFTY BANK', value: 57658.7, change: -0.29 }
    ];
    return (_jsx("div", { className: "flex items-center gap-4 text-xs", children: markets.map(m => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "muted", children: m.name }), _jsx("span", { children: m.value.toLocaleString() }), _jsxs("span", { className: m.change >= 0 ? 'text-kite-green' : 'text-kite-red', children: [m.change >= 0 ? _jsx(ArrowUpRight, { size: 14, className: "inline" }) : _jsx(ArrowDownRight, { size: 14, className: "inline" }), Math.abs(m.change).toFixed(2), "%"] })] }, m.name))) }));
}
