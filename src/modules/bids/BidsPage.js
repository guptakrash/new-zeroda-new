import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal } from '../app/components/Modal';
const ipos = [
    { name: 'GROWW', price: '₹95 – ₹100', dates: '4th – 7th Nov' },
    { name: 'SHETHJI (SME)', price: '₹120 – ₹125', dates: '6th – 10th Nov' },
    { name: 'FINBUD (SME)', price: '₹140 – ₹142', dates: '6th – 10th Nov' }
];
export function BidsPage() {
    var _a, _b;
    const [tab, setTab] = useState('ipo');
    const [selected, setSelected] = useState(null);
    return (_jsxs("div", { className: "grid gap-3", children: [_jsx("div", { className: "panel p-2", children: _jsxs("div", { className: "flex gap-6 text-sm", children: [_jsx(SubTab, { label: `IPO (${ipos.length})`, active: tab === 'ipo', onClick: () => setTab('ipo') }), _jsx(SubTab, { label: "Govt. securities (1)", active: tab === 'gsec', onClick: () => setTab('gsec') }), _jsx(SubTab, { label: "Auctions", active: tab === 'auctions', onClick: () => setTab('auctions') })] }) }), tab === 'ipo' && (_jsx("div", { className: "panel divide-y divide-kite-border", children: ipos.map(x => (_jsxs("div", { className: "flex items-center gap-3 px-3 py-4", children: [_jsxs("div", { children: [_jsx("div", { className: "font-medium", children: x.name }), _jsx("div", { className: "muted text-xs", children: x.price })] }), _jsx("div", { className: "ml-auto muted text-xs", children: x.dates }), _jsx("button", { onClick: () => setSelected(x), className: "bg-white text-black text-sm px-3 py-1 rounded-md", children: "Apply" })] }, x.name))) })), tab === 'gsec' && (_jsx("div", { className: "panel", children: _jsxs("div", { className: "px-3 py-4 flex items-center gap-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs muted", children: "GSEC" }), _jsx("div", { className: "font-medium", children: "6.48% GS 2035" }), _jsx("div", { className: "muted text-xs", children: "Ends on Thu, 6 Nov 2025" })] }), _jsxs("div", { className: "ml-auto text-right", children: [_jsx("div", { className: "muted text-xs", children: "Yield* 6.47%" }), _jsx("button", { className: "bg-white text-black text-sm px-3 py-1 rounded-md mt-2", children: "Place bid" })] })] }) })), tab === 'auctions' && (_jsxs("div", { className: "panel py-16 text-center", children: [_jsx("div", { className: "text-lg font-medium mb-2", children: "No stocks for auctions" }), _jsx("div", { className: "muted text-sm", children: "The auction market opens at 2:30 PM." })] })), _jsx(Modal, { open: !!selected, onClose: () => setSelected(null), title: selected === null || selected === void 0 ? void 0 : selected.name, children: _jsxs("div", { className: "grid gap-3", children: [_jsx("button", { className: "bg-blue-500 text-white rounded-md py-3", children: "Apply" }), _jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [_jsx(Info, { label: "Min qty.", value: "150" }), _jsx(Info, { label: "Price", value: (_a = selected === null || selected === void 0 ? void 0 : selected.price) !== null && _a !== void 0 ? _a : '' }), _jsx(Info, { label: "Dates", value: (_b = selected === null || selected === void 0 ? void 0 : selected.dates) !== null && _b !== void 0 ? _b : '', full: true })] }), _jsx("div", { className: "muted text-xs", children: "About the company" })] }) })] }));
}
function SubTab({ label, active, onClick }) {
    return (_jsx("button", { onClick: onClick, className: `pb-2 -mb-2 border-b-2 ${active ? 'border-white' : 'border-transparent muted hover:text-white'}`, children: label }));
}
function Info({ label, value, full }) {
    return (_jsxs("div", { className: full ? 'col-span-2' : '', children: [_jsx("div", { className: "muted text-xs", children: label }), _jsx("div", { children: value })] }));
}
