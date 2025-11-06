import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const mf = [
    { name: 'Zerodha ELSS Tax Saver Nifty LargeMidcap 250 Index Fund', tags: 'Equity, ELSS, Direct plan' },
    { name: 'Zerodha Nifty LargeMidcap 250 Index Fund', tags: 'Others, Index Funds/ETFs, Direct plan' },
    { name: 'Zerodha Overnight Fund', tags: 'Debt, Overnight, Direct plan' },
    { name: 'Zerodha Gold ETF FoF', tags: 'Others, Fund of Funds, Direct plan' },
    { name: 'Zerodha Silver ETF FoF', tags: 'Others, Fund of Funds, Direct plan' }
];
export function SearchPage() {
    const [tab, setTab] = useState('MF');
    return (_jsxs("div", { className: "grid gap-3", children: [_jsxs("div", { className: "panel p-2", children: [_jsx("input", { placeholder: "Search eg: infy bse, nifty fut", className: "w-full bg-black/20 rounded px-3 py-2" }), _jsx("div", { className: "flex gap-6 mt-2 text-sm", children: ['MF', 'IPO', 'Events', 'Brands', 'ETF', 'G-Sec'].map(t => (_jsx("button", { onClick: () => setTab(t), className: `pb-2 -mb-2 border-b-2 ${tab === t ? 'border-white' : 'border-transparent muted'}`, children: t }, t))) })] }), tab === 'MF' && (_jsx("div", { className: "panel divide-y divide-kite-border", children: mf.map(x => (_jsxs("div", { className: "px-3 py-3", children: [_jsx("div", { className: "font-medium", children: x.name }), _jsx("div", { className: "muted text-xs", children: x.tags })] }, x.name))) })), tab !== 'MF' && (_jsx("div", { className: "panel py-16 text-center muted", children: "No results" }))] }));
}
