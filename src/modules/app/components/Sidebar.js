import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layers, LineChart, LayoutGrid, Settings, Star } from 'lucide-react';
export function Sidebar() {
    return (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsxs(Section, { title: "Watchlists", children: [_jsx(Pill, { children: "Watchlist 1" }), _jsx(Pill, { children: "Watchlist 2" }), _jsx(Pill, { children: "Watchlist 3" }), _jsx(Pill, { children: "Watchlist 4" })] }), _jsxs(Section, { title: "Widgets", children: [_jsx(WidgetItem, { icon: _jsx(LineChart, { size: 16 }), label: "Charts" }), _jsx(WidgetItem, { icon: _jsx(Layers, { size: 16 }), label: "Positions" }), _jsx(WidgetItem, { icon: _jsx(Star, { size: 16 }), label: "Favourites" }), _jsx(WidgetItem, { icon: _jsx(LayoutGrid, { size: 16 }), label: "Gainers/Losers" })] }), _jsx(Section, { title: "Settings", children: _jsx(WidgetItem, { icon: _jsx(Settings, { size: 16 }), label: "Preferences" }) })] }));
}
function Section({ title, children }) {
    return (_jsxs("div", { className: "panel p-3", children: [_jsx("div", { className: "muted text-xs mb-2", children: title }), _jsx("div", { className: "flex flex-wrap gap-2", children: children })] }));
}
function Pill({ children }) {
    return (_jsx("button", { className: "text-xs bg-black/20 hover:bg-black/10 border border-kite-border rounded-md px-2 py-1", children: children }));
}
function WidgetItem({ icon, label }) {
    return (_jsxs("button", { className: "w-full flex items-center gap-2 hover:bg-black/20 rounded-md px-2 py-1 text-left", children: [icon, _jsx("span", { className: "text-sm", children: label })] }));
}
