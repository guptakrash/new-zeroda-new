import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export function OrdersPage() {
    const [showPanel, setShowPanel] = useState(false);
    const [orders, setOrders] = useState([]);
    function placeMockOrder(side) {
        const o = {
            id: Math.random().toString(36).slice(2),
            symbol: 'INFY',
            side,
            qty: 1,
            price: 1500,
            status: 'OPEN',
        };
        setOrders(prev => [o, ...prev]);
        setShowPanel(false);
    }
    return (_jsxs("div", { className: "page orders-page", children: [_jsx("div", { className: "toolbar", children: _jsx("button", { className: "btn primary", onClick: () => setShowPanel(true), children: "New Order" }) }), _jsxs("div", { className: "card", children: [_jsx("div", { className: "card-title", children: "Order History" }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Symbol" }), _jsx("th", { children: "Side" }), _jsx("th", { children: "Qty" }), _jsx("th", { children: "Price" }), _jsx("th", { children: "Status" })] }) }), _jsx("tbody", { children: orders.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: 5, className: "muted", children: "No orders yet" }) })) : orders.map(o => (_jsxs("tr", { children: [_jsx("td", { children: o.symbol }), _jsx("td", { className: o.side === 'BUY' ? 'pos' : 'neg', children: o.side }), _jsx("td", { children: o.qty }), _jsx("td", { children: o.price }), _jsx("td", { children: o.status })] }, o.id))) })] })] }), showPanel && (_jsxs("div", { className: "drawer", role: "dialog", "aria-modal": true, children: [_jsxs("div", { className: "drawer-panel", children: [_jsxs("div", { className: "drawer-header", children: [_jsx("div", { className: "drawer-title", children: "Place Order" }), _jsx("button", { className: "btn icon", onClick: () => setShowPanel(false), children: "\u2715" })] }), _jsxs("div", { className: "drawer-content", children: [_jsxs("div", { className: "segmented", children: [_jsx("button", { className: "buy", onClick: () => placeMockOrder('BUY'), children: "Buy" }), _jsx("button", { className: "sell", onClick: () => placeMockOrder('SELL'), children: "Sell" })] }), _jsxs("div", { className: "form-grid", children: [_jsxs("label", { children: [_jsx("span", { children: "Order type" }), _jsxs("select", { defaultValue: "LIMIT", children: [_jsx("option", { children: "LIMIT" }), _jsx("option", { children: "MARKET" }), _jsx("option", { children: "SL" })] })] }), _jsxs("label", { children: [_jsx("span", { children: "Quantity" }), _jsx("input", { type: "number", min: 1, defaultValue: 1 })] }), _jsxs("label", { children: [_jsx("span", { children: "Price" }), _jsx("input", { type: "number", min: 0, step: 0.05, defaultValue: 1500 })] })] }), _jsx("button", { className: "btn primary w-full", onClick: () => placeMockOrder('BUY'), children: "Submit" })] })] }), _jsx("div", { className: "drawer-backdrop", onClick: () => setShowPanel(false) })] }))] }));
}
