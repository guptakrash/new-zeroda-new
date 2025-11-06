import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const holdings = [
    { symbol: 'INFY', qty: 2, avg: 1450, ltp: 1472.4 },
    { symbol: 'TCS', qty: 1, avg: 2980, ltp: 3015.15 },
    { symbol: 'ONGC', qty: 10, avg: 250, ltp: 252.05 },
];
export function PortfolioPage() {
    const invested = holdings.reduce((s, h) => s + h.avg * h.qty, 0);
    const current = holdings.reduce((s, h) => s + h.ltp * h.qty, 0);
    const pnl = current - invested;
    return (_jsxs("div", { className: "page portfolio-page", children: [_jsxs("div", { className: "cards-grid", children: [_jsxs("div", { className: "card", children: [_jsx("div", { className: "card-title", children: "Invested" }), _jsxs("div", { className: "card-value", children: ["\u20B9", invested.toLocaleString('en-IN', { maximumFractionDigits: 2 })] })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-title", children: "Current" }), _jsxs("div", { className: "card-value", children: ["\u20B9", current.toLocaleString('en-IN', { maximumFractionDigits: 2 })] })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-title", children: "P&L" }), _jsxs("div", { className: `card-value ${pnl >= 0 ? 'pos' : 'neg'}`, children: ["\u20B9", pnl.toLocaleString('en-IN', { maximumFractionDigits: 2 })] })] })] }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-title", children: "Holdings" }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Symbol" }), _jsx("th", { children: "Qty" }), _jsx("th", { children: "Avg" }), _jsx("th", { children: "LTP" }), _jsx("th", { children: "P/L" })] }) }), _jsx("tbody", { children: holdings.map(h => {
                                    const hpnl = (h.ltp - h.avg) * h.qty;
                                    return (_jsxs("tr", { children: [_jsx("td", { children: h.symbol }), _jsx("td", { children: h.qty }), _jsx("td", { children: h.avg }), _jsx("td", { children: h.ltp }), _jsx("td", { className: hpnl >= 0 ? 'pos' : 'neg', children: hpnl.toFixed(2) })] }, h.symbol));
                                }) })] })] })] }));
}
