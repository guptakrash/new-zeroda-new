import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
const sample = [
    { symbol: 'HDFCBANK', exchange: 'BSE', ltp: 985.35, change: 0.25 },
    { symbol: 'INFY', exchange: 'NSE', ltp: 1472.4, change: 4.5 },
    { symbol: 'TCS', exchange: 'BSE', ltp: 3015.15, change: 25.35 },
    { symbol: 'ONGC', exchange: 'NSE', ltp: 252.05, change: -0.3 },
    { symbol: 'HINDUNILVR', exchange: 'BSE', ltp: 2439.2, change: -6.85 },
    { symbol: 'GOLDBEES', exchange: 'NSE', ltp: 100.05, change: 0.25 },
];
const emptyTabs = ['Watchlist 2', 'Watchlist 3', 'Watchlist 4', 'Watchlist 5', 'Watchlist 6'];
export function WatchlistPage() {
    const [tab, setTab] = useState(0);
    const [query, setQuery] = useState('');
    const filtered = useMemo(() => sample.filter(s => s.symbol.toLowerCase().includes(query.toLowerCase())), [query]);
    return (_jsxs("div", { className: "page watchlist-page", children: [_jsxs("div", { className: "tabs", children: [_jsx("button", { className: tab === 0 ? 'active' : '', onClick: () => setTab(0), children: "Watchlist 1" }), emptyTabs.map((t, i) => (_jsx("button", { className: tab === i + 1 ? 'active' : '', onClick: () => setTab(i + 1), children: t }, t)))] }), _jsxs("div", { className: "searchbar", children: [_jsx("input", { value: query, onChange: e => setQuery(e.target.value), placeholder: "Search & add" }), _jsxs("span", { className: "counter", children: [(tab === 0 ? filtered.length : 0), "/100"] })] }), tab === 0 ? (_jsx("ul", { className: "list", children: filtered.map(item => (_jsxs("li", { className: "row", role: "button", children: [_jsxs("div", { className: "title", children: [_jsx("div", { className: "name", children: item.symbol }), _jsx("div", { className: "sub", children: item.exchange })] }), _jsxs("div", { className: "price " + (item.change < 0 ? 'neg' : 'pos'), children: [_jsx("div", { children: item.ltp.toLocaleString('en-IN', { maximumFractionDigits: 2 }) }), _jsxs("div", { className: "sub", children: [item.change > 0 ? '+' : '', item.change.toFixed(2)] })] })] }, item.symbol))) })) : (_jsxs("div", { className: "empty", children: [_jsx("div", { className: "empty-illustration" }), _jsx("div", { className: "empty-title", children: "Nothing here" }), _jsx("div", { className: "empty-sub", children: "Use the search bar to add instruments to your watchlist" })] }))] }));
}
