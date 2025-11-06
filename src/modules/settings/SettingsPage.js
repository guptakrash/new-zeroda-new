import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function SettingsPage() {
    const [theme, setTheme] = useState('default');
    const [orderNotif, setOrderNotif] = useState(false);
    const [stickyOrder, setStickyOrder] = useState(false);
    const [accessibility, setAccessibility] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [stickyPins, setStickyPins] = useState(true);
    const [watchlistNotes, setWatchlistNotes] = useState(true);
    const [rememberQty, setRememberQty] = useState(false);
    const [batteryOpt, setBatteryOpt] = useState(false);
    return (_jsxs("div", { className: "panel p-0 overflow-hidden", children: [_jsx("div", { className: "px-4 py-3 border-b border-kite-border", children: "Settings" }), _jsxs("div", { className: "p-4 grid gap-4", children: [_jsxs(Section, { title: "Theme", children: [_jsx(Radio, { label: "Default", checked: theme === 'default', onChange: () => setTheme('default') }), _jsx(Radio, { label: "Dark", checked: theme === 'dark', onChange: () => setTheme('dark') })] }), _jsx(Toggle, { label: "Order notifications", checked: orderNotif, onChange: setOrderNotif }), _jsx(Toggle, { label: "Sticky order window", desc: "Don't automatically hide order window after order placement.", checked: stickyOrder, onChange: setStickyOrder }), _jsx(Toggle, { label: "Accessibility mode", desc: "Disables transitions and simplifies UI.", checked: accessibility, onChange: setAccessibility }), _jsx(Toggle, { label: "Fullscreen", desc: "May not work on certain devices.", checked: fullscreen, onChange: setFullscreen }), _jsx(Toggle, { label: "Sticky pins", desc: "Show pinned stock tickers on the top on all screens.", checked: stickyPins, onChange: setStickyPins }), _jsx(Toggle, { label: "Show watchlist notes", checked: watchlistNotes, onChange: setWatchlistNotes }), _jsx(Toggle, { label: "Remember F&O order quantity", checked: rememberQty, onChange: setRememberQty }), _jsx(Toggle, { label: "Disable battery optimization", desc: "Get regular widget updates and reduce app closes", checked: batteryOpt, onChange: setBatteryOpt }), _jsx(Section, { title: "Chart", children: _jsx("div", { className: "text-sm", children: "ChartIQ" }) })] })] }));
}
function Section({ title, children }) {
    return (_jsxs("div", { children: [_jsx("div", { className: "font-medium mb-2", children: title }), _jsx("div", { className: "grid gap-2", children: children })] }));
}
function Radio({ label, checked, onChange }) {
    return (_jsxs("label", { className: "flex items-center justify-between py-2 cursor-pointer", children: [_jsx("span", { children: label }), _jsx("input", { type: "radio", checked: checked, onChange: onChange, className: "w-4 h-4" })] }));
}
function Toggle({ label, desc, checked, onChange }) {
    return (_jsx("div", { className: "py-2", children: _jsxs("label", { className: "flex items-center justify-between cursor-pointer", children: [_jsxs("div", { children: [_jsx("div", { children: label }), desc && _jsx("div", { className: "muted text-xs mt-1", children: desc })] }), _jsx("button", { onClick: () => onChange(!checked), className: `w-12 h-6 rounded-full relative transition-colors ${checked ? 'bg-blue-500' : 'bg-gray-600'}`, children: _jsx("div", { className: `absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : ''}` }) })] }) }));
}
