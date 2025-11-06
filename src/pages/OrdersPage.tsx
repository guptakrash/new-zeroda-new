import { useState } from 'react'

type Order = {
  id: string
  symbol: string
  side: 'BUY' | 'SELL'
  qty: number
  price: number
  status: 'OPEN' | 'FILLED' | 'CANCELLED'
}

export function OrdersPage() {
  const [showPanel, setShowPanel] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])

  function placeMockOrder(side: 'BUY' | 'SELL') {
    const o: Order = {
      id: Math.random().toString(36).slice(2),
      symbol: 'INFY',
      side,
      qty: 1,
      price: 1500,
      status: 'OPEN',
    }
    setOrders(prev => [o, ...prev])
    setShowPanel(false)
  }

  return (
    <div className="page orders-page">
      <div className="toolbar">
        <button className="btn primary" onClick={() => setShowPanel(true)}>New Order</button>
      </div>

      <div className="card">
        <div className="card-title">Order History</div>
        <table className="table">
          <thead>
            <tr>
              <th>Symbol</th><th>Side</th><th>Qty</th><th>Price</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr><td colSpan={5} className="muted">No orders yet</td></tr>
            ) : orders.map(o => (
              <tr key={o.id}>
                <td>{o.symbol}</td>
                <td className={o.side === 'BUY' ? 'pos' : 'neg'}>{o.side}</td>
                <td>{o.qty}</td>
                <td>{o.price}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPanel && (
        <div className="drawer" role="dialog" aria-modal>
          <div className="drawer-panel">
            <div className="drawer-header">
              <div className="drawer-title">Place Order</div>
              <button className="btn icon" onClick={() => setShowPanel(false)}>✕</button>
            </div>
            <div className="drawer-content">
              <div className="segmented">
                <button className="buy" onClick={() => placeMockOrder('BUY')}>Buy</button>
                <button className="sell" onClick={() => placeMockOrder('SELL')}>Sell</button>
              </div>
              <div className="form-grid">
                <label>
                  <span>Order type</span>
                  <select defaultValue="LIMIT">
                    <option>LIMIT</option>
                    <option>MARKET</option>
                    <option>SL</option>
                  </select>
                </label>
                <label>
                  <span>Quantity</span>
                  <input type="number" min={1} defaultValue={1} />
                </label>
                <label>
                  <span>Price</span>
                  <input type="number" min={0} step={0.05} defaultValue={1500} />
                </label>
              </div>
              <button className="btn primary w-full" onClick={() => placeMockOrder('BUY')}>Submit</button>
            </div>
          </div>
          <div className="drawer-backdrop" onClick={() => setShowPanel(false)} />
        </div>
      )}
    </div>
  )
}


