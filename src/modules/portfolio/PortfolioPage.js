import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const holdings = [
    { symbol: 'INFY', qty: 10, avg: 1450, ltp: 1472.4 },
    { symbol: 'TCS', qty: 2, avg: 2950, ltp: 3015.15 },
    { symbol: 'ONGC', qty: 50, avg: 260, ltp: 252.05 }
];
export function PortfolioPage() {
    const totalInvested = holdings.reduce((a, h) => a + h.avg * h.qty, 0);
    const current = holdings.reduce((a, h) => a + h.ltp * h.qty, 0);
    const pnl = current - totalInvested;
    return (_jsxs("div", { className: "grid gap-4", children: [_jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [_jsx(Stat, { title: "Invested", value: `₹${totalInvested.toLocaleString()}` }), _jsx(Stat, { title: "Current", value: `₹${current.toLocaleString()}` }), _jsx(Stat, { title: "P&L", value: `₹${pnl.toLocaleString()}`, positive: pnl >= 0 })] }), _jsx("div", { className: "panel overflow-hidden", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { className: "muted text-xs", children: _jsxs("tr", { className: "text-left", children: [_jsx("th", { className: "px-3 py-2", children: "Symbol" }), _jsx("th", { className: "px-3 py-2", children: "Qty" }), _jsx("th", { className: "px-3 py-2", children: "Avg" }), _jsx("th", { className: "px-3 py-2", children: "LTP" }), _jsx("th", { className: "px-3 py-2", children: "P&L" })] }) }), _jsx("tbody", { className: "divide-y divide-kite-border", children: holdings.map(h => {
                                const rowPnl = (h.ltp - h.avg) * h.qty;
                                return (_jsxs("tr", { children: [_jsx("td", { className: "px-3 py-3 font-medium", children: h.symbol }), _jsx("td", { className: "px-3 py-3", children: h.qty }), _jsxs("td", { className: "px-3 py-3", children: ["\u20B9", h.avg] }), _jsxs("td", { className: "px-3 py-3", children: ["\u20B9", h.ltp] }), _jsxs("td", { className: "px-3 py-3 " + (rowPnl >= 0 ? 'text-kite-green' : 'text-kite-red'), children: ["\u20B9", rowPnl.toFixed(2)] })] }, h.symbol));
                            }) })] }) })] }));
}
function Stat({ title, value, positive }) {
    return (_jsxs("div", { className: "panel p-4", children: [_jsx("div", { className: "muted text-xs", children: title }), _jsx("div", { className: `text-xl font-semibold ${positive === undefined ? '' : positive ? 'text-kite-green' : 'text-kite-red'}`, children: value })] }));
}
