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
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/watchlists" replace />} />
        <Route path="/watchlists" element={<WatchlistsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/bids" element={<BidsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/connected-apps" element={<ConnectedAppsPage />} />
        <Route path="*" element={<Navigate to="/watchlists" replace />} />
      </Routes>
    </AppShell>
  );
}


