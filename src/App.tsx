import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { WatchlistPage } from './pages/WatchlistPage'
import { OrdersPage } from './pages/OrdersPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { BidsPage } from './pages/BidsPage'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/watchlist" replace />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/bids" element={<BidsPage />} />
      </Routes>
    </AppLayout>
  )
}


