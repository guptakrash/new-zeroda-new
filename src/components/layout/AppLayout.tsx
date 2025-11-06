import { Link, useLocation } from 'react-router-dom'
import { IndicesHeader } from '../widgets/IndicesHeader'

type Props = { children: React.ReactNode }

export function AppLayout({ children }: Props) {
  const { pathname } = useLocation()

  return (
    <div className="app-root">
      <header className="app-topbar">
        <IndicesHeader />
      </header>

      <aside className="app-sidebar">
        <div className="brand">Kite</div>
        <nav className="sidebar-nav">
          <Link className={pathname.startsWith('/watchlist') ? 'active' : ''} to="/watchlist">Watchlist</Link>
          <Link className={pathname.startsWith('/orders') ? 'active' : ''} to="/orders">Orders</Link>
          <Link className={pathname.startsWith('/portfolio') ? 'active' : ''} to="/portfolio">Portfolio</Link>
          <Link className={pathname.startsWith('/bids') ? 'active' : ''} to="/bids">Bids / IPO</Link>
        </nav>
        <div className="sidebar-footer">
          <button className="btn secondary w-full">Funds: ₹0.00</button>
        </div>
      </aside>

      <main className="app-content">
        {children}
      </main>
    </div>
  )
}


