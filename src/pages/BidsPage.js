import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ipos = [
    { name: 'GROWW', priceFrom: 95, priceTo: 100, dates: '4th - 7th Nov', state: 'Apply' },
    { name: 'SHETHJI', priceFrom: 120, priceTo: 125, dates: '4th - 7th Nov', state: 'Apply' },
    { name: 'FINBUD', priceFrom: 140, priceTo: 142, dates: '6th - 10th Nov', state: 'Apply' },
    { name: 'PINELABS', priceFrom: 210, priceTo: 221, dates: '7th - 11th Nov', state: 'Pre-apply' },
    { name: 'ORKLAINDIA', priceFrom: 695, priceTo: 730, dates: '29th - 31st Oct', state: 'Closed' },
];
export function BidsPage() {
    const [selected, setSelected] = useState(null);
    return (_jsxs("div", { className: "page bids-page", children: [_jsxs("div", { className: "tabs small", children: [_jsx("button", { className: "active", children: "IPO" }), _jsx("button", { disabled: true, children: "Govt. securities" }), _jsx("button", { disabled: true, children: "Auctions" })] }), _jsx("ul", { className: "list", children: ipos.map(i => (_jsxs("li", { className: "row", onClick: () => setSelected(i), children: [_jsxs("div", { className: "title", children: [_jsx("div", { className: "name", children: i.name }), _jsxs("div", { className: "sub", children: ["\u20B9", i.priceFrom, " \u2013 \u20B9", i.priceTo] })] }), _jsx("div", { className: "badge right", children: i.state })] }, i.name))) }), selected && (_jsxs("div", { className: "sheet", role: "dialog", "aria-modal": true, children: [_jsxs("div", { className: "sheet-card", children: [_jsxs("div", { className: "sheet-header", children: [_jsxs("div", { children: [_jsx("div", { className: "name", children: selected.name }), _jsxs("div", { className: "sub muted", children: ["Min qty 150 \u2022 Price \u20B9", selected.priceFrom, " \u2013 \u20B9", selected.priceTo] })] }), _jsx("button", { className: "btn icon", onClick: () => setSelected(null), children: "\u2715" })] }), _jsx("button", { className: "btn primary w-full", children: "Apply" }), _jsxs("div", { className: "sheet-meta", children: [_jsxs("div", { children: [_jsx("span", { className: "muted", children: "Dates" }), _jsxs("div", { children: [selected.dates, ", 2025"] })] }), _jsxs("div", { children: [_jsx("span", { className: "muted", children: "Lot size" }), _jsx("div", { children: "150" })] }), _jsxs("div", { children: [_jsx("span", { className: "muted", children: "Issue size" }), _jsx("div", { children: "\u20B96632Cr" })] })] })] }), _jsx("div", { className: "sheet-backdrop", onClick: () => setSelected(null) })] }))] }));
}
