import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { IndicesHeader } from '../widgets/IndicesHeader';
export function AppLayout({ children }) {
    const { pathname } = useLocation();
    return (_jsxs("div", { className: "app-root", children: [_jsx("header", { className: "app-topbar", children: _jsx(IndicesHeader, {}) }), _jsxs("aside", { className: "app-sidebar", children: [_jsx("div", { className: "brand", children: "Kite" }), _jsxs("nav", { className: "sidebar-nav", children: [_jsx(Link, { className: pathname.startsWith('/watchlist') ? 'active' : '', to: "/watchlist", children: "Watchlist" }), _jsx(Link, { className: pathname.startsWith('/orders') ? 'active' : '', to: "/orders", children: "Orders" }), _jsx(Link, { className: pathname.startsWith('/portfolio') ? 'active' : '', to: "/portfolio", children: "Portfolio" }), _jsx(Link, { className: pathname.startsWith('/bids') ? 'active' : '', to: "/bids", children: "Bids / IPO" })] }), _jsx("div", { className: "sidebar-footer", children: _jsx("button", { className: "btn secondary w-full", children: "Funds: \u20B90.00" }) })] }), _jsx("main", { className: "app-content", children: children })] }));
}
