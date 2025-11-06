import { useState } from 'react';

type OrderType = 'MARKET' | 'LIMIT';
type Side = 'BUY' | 'SELL';

export function OrdersPage() {
  const [ordersTab, setOrdersTab] = useState<'Open' | 'Executed' | 'GTT' | 'Baskets' | 'SIPs' | 'Alerts'>('Open');
  const [side, setSide] = useState<Side>('BUY');
  const [type, setType] = useState<OrderType>('MARKET');
  const [symbol, setSymbol] = useState('INFY');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  const placeOrder = () => {
    setHistory([{ id: Date.now(), side, type, symbol, qty, price }, ...history]);
  };

  return (
    <div className="grid gap-3">
      <div className="panel p-2">
        <div className="flex gap-6 text-sm">
          {(['Open','Executed','GTT','Baskets','SIPs','Alerts'] as const).map(t => (
            <button key={t} onClick={() => setOrdersTab(t)} className={`pb-2 -mb-2 border-b-2 ${ordersTab===t? 'border-white':'border-transparent muted'}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-[360px_1fr] gap-4">
      {/* Ticket */}
      <div className="panel p-4">
        <div className="flex gap-2 mb-4">
          <Toggle label="Buy" active={side === 'BUY'} onClick={() => setSide('BUY')} />
          <Toggle label="Sell" active={side === 'SELL'} onClick={() => setSide('SELL')} />
        </div>
        <Field label="Symbol">
          <input value={symbol} onChange={e => setSymbol(e.target.value)} className="bg-black/20 rounded px-2 py-1 w-full" />
        </Field>
        <Field label="Order type">
          <select value={type} onChange={e => setType(e.target.value as OrderType)} className="bg-black/20 rounded px-2 py-1 w-full">
            <option>MARKET</option>
            <option>LIMIT</option>
          </select>
        </Field>
        {type === 'LIMIT' && (
          <Field label="Price">
            <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="bg-black/20 rounded px-2 py-1 w-full" />
          </Field>
        )}
        <Field label="Quantity">
          <input type="number" value={qty} onChange={e => setQty(Number(e.target.value))} className="bg-black/20 rounded px-2 py-1 w-full" />
        </Field>
        <button
          onClick={placeOrder}
          className={`w-full mt-4 py-2 rounded-md font-medium ${side === 'BUY' ? 'bg-kite-green text-black' : 'bg-kite-red text-white'}`}
        >
          {side === 'BUY' ? 'Buy' : 'Sell'} {symbol}
        </button>
      </div>

        {/* History / Empty states */}
        <div className="panel p-4">
          <div className="muted text-sm mb-2">{ordersTab} orders</div>
          {history.length === 0 && ordersTab === 'Open' ? (
            <div className="text-center py-16">
              <div className="font-medium mb-1">No pending orders</div>
              <div className="muted text-sm">Place an order from your watchlist</div>
            </div>
          ) : history.length > 0 ? (
          <table className="w-full text-sm">
            <thead className="muted text-xs">
              <tr className="text-left">
                <th className="px-2 py-2">Time</th>
                <th className="px-2 py-2">Side</th>
                <th className="px-2 py-2">Type</th>
                <th className="px-2 py-2">Symbol</th>
                <th className="px-2 py-2">Qty</th>
                <th className="px-2 py-2">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-kite-border">
              {history.map(o => (
                <tr key={o.id}>
                  <td className="px-2 py-2">{new Date(o.id).toLocaleTimeString()}</td>
                  <td className={`px-2 py-2 ${o.side === 'BUY' ? 'text-kite-green' : 'text-kite-red'}`}>{o.side}</td>
                  <td className="px-2 py-2">{o.type}</td>
                  <td className="px-2 py-2">{o.symbol}</td>
                  <td className="px-2 py-2">{o.qty}</td>
                  <td className="px-2 py-2">{o.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          ) : (
            <div className="muted text-sm">No records</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm mb-3">
      <span className="muted text-xs">{label}</span>
      {children}
    </label>
  );
}

function Toggle({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md border ${active ? 'bg-white text-black' : 'border-kite-border muted hover:text-white'}`}
    >
      {label}
    </button>
  );
}


