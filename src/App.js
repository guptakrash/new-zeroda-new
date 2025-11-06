import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { WatchlistPage } from './pages/WatchlistPage';
import { OrdersPage } from './pages/OrdersPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BidsPage } from './pages/BidsPage';
export default function App() {
    return (_jsx(AppLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/watchlist", replace: true }) }), _jsx(Route, { path: "/watchlist", element: _jsx(WatchlistPage, {}) }), _jsx(Route, { path: "/orders", element: _jsx(OrdersPage, {}) }), _jsx(Route, { path: "/portfolio", element: _jsx(PortfolioPage, {}) }), _jsx(Route, { path: "/bids", element: _jsx(BidsPage, {}) })] }) }));
}
