import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { WatchlistsPage } from '../watchlists/WatchlistsPage';
import { PortfolioPage } from '../portfolio/PortfolioPage';
import { OrdersPage } from '../orders/OrdersPage';
import { BidsPage } from '../bids/BidsPage';
import { SearchPage } from '../search/SearchPage';
import { FundsPage } from '../funds/FundsPage';
import { ProfilePage } from '../profile/ProfilePage';
import { SettingsPage } from '../settings/SettingsPage';
import { ConnectedAppsPage } from '../connected-apps/ConnectedAppsPage';
export default function App() {
    return (_jsx(AppShell, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/watchlists", replace: true }) }), _jsx(Route, { path: "/watchlists", element: _jsx(WatchlistsPage, {}) }), _jsx(Route, { path: "/portfolio", element: _jsx(PortfolioPage, {}) }), _jsx(Route, { path: "/orders", element: _jsx(OrdersPage, {}) }), _jsx(Route, { path: "/bids", element: _jsx(BidsPage, {}) }), _jsx(Route, { path: "/search", element: _jsx(SearchPage, {}) }), _jsx(Route, { path: "/funds", element: _jsx(FundsPage, {}) }), _jsx(Route, { path: "/profile", element: _jsx(ProfilePage, {}) }), _jsx(Route, { path: "/settings", element: _jsx(SettingsPage, {}) }), _jsx(Route, { path: "/connected-apps", element: _jsx(ConnectedAppsPage, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/watchlists", replace: true }) })] }) }));
}
