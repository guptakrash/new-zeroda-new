import { Link, NavLink } from 'react-router-dom';
import { Bell, Search, ShoppingCart } from 'lucide-react';
import { MarketStrip } from './MarketStrip';
import { Sidebar } from './Sidebar';
import { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="h-full grid grid-cols-[280px_1fr] grid-rows-[auto_1fr]">
      {/* Top bar */}
      <header className="col-span-2 border-b border-kite-border bg-kite-panel/80 backdrop-blur px-4">
        <div className="flex items-center gap-3 h-14">
          <Link to="/" className="font-semibold">Kite</Link>
          <MarketStrip />
          <div className="ml-auto flex items-center gap-3">
            <button className="muted hover:text-white"><Search size={18} /></button>
            <button className="muted hover:text-white"><Bell size={18} /></button>
            <button className="muted hover:text-white"><ShoppingCart size={18} /></button>
          </div>
        </div>
        {/* Tabs */}
        <nav className="flex gap-6 text-sm px-1 pb-2">
          <Tab to="/watchlists" label="Watchlist" />
          <Tab to="/portfolio" label="Portfolio" />
          <Tab to="/orders" label="Orders" />
          <Tab to="/bids" label="Bids" />
          <Tab to="/search" label="Search" />
          <Tab to="/profile" label="Profile" />
        </nav>
      </header>

      {/* Sidebar */}
      <aside className="row-start-2 border-r border-kite-border p-3 overflow-y-auto bg-kite-panel">
        <Sidebar />
      </aside>

      {/* Content */}
      <main className="row-start-2 overflow-y-auto p-4">{children}</main>
    </div>
  );
}

function Tab({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `pb-2 -mb-2 border-b-2 ${
          isActive ? 'border-white text-white' : 'border-transparent muted hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
}


