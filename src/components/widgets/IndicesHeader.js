import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sparkline } from './Sparkline';
export function IndicesHeader() {
    return (_jsxs("div", { className: "indices-header", children: [_jsx(IndexCard, { name: "NIFTY 50", value: 25553.1, change: -44.55, data: [3, 5, 4, 6, 8, 7, 9, 8] }), _jsx(IndexCard, { name: "NIFTY BANK", value: 57658.7, change: -168.35, data: [5, 4, 6, 5, 7, 6, 7, 8] }), _jsxs("div", { className: "header-actions", children: [_jsx("button", { className: "btn icon", title: "Cart", children: "\uD83D\uDED2" }), _jsx("button", { className: "btn icon", title: "Account", children: "\uD83D\uDC64" })] })] }));
}
function IndexCard({ name, value, change, data }) {
    const negative = change < 0;
    const changePct = (change / (value - change)) * 100;
    return (_jsxs("div", { className: "index-card", children: [_jsx("div", { className: "title", children: name }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "price", children: value.toLocaleString('en-IN', { maximumFractionDigits: 2 }) }), _jsxs("div", { className: "ch " + (negative ? 'neg' : 'pos'), children: [negative ? '' : '+', change.toFixed(2), " (", changePct.toFixed(2), "%)"] })] }), _jsx(Sparkline, { points: data, className: negative ? 'neg' : 'pos' })] }));
}
