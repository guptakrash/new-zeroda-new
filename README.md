# Zerodha Kite Dashboard (Post-Login UI) — React

> A responsive, Zerodha-inspired trading dashboard clone. Includes watchlists, charts area, portfolio/holdings, order ticket with history, and bids/IPO section. Built with React + TypeScript + Vite + Tailwind.

## 🚀 Quick Start (No Node.js Required!)

**Want to run it immediately without installing Node.js?** 

👉 **Go to the `standalone/` folder and double-click `index.html`** - it opens directly in your browser!

See `standalone/README.md` for details.

## Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React (icons)
- Recharts (placeholder ready for charts)

## Getting started

### Prerequisites
- Node.js 18+ and npm

### Setup
```bash
npm install
npm run dev
```
Open `http://localhost:5173`.

### Build
```bash
npm run build
npm run preview
```

## Project structure
```
src/
  modules/
    app/         # Shell, top bar, layout
    watchlists/  # Watchlists + charts area
    portfolio/   # Holdings/summary
    orders/      # Buy/Sell ticket + history
    bids/        # IPO/G-Sec list UI
  styles/        # Tailwind entry
```

## Notes
- All data is mocked locally for demo purposes (no brokerage APIs used).
- Charts are placeholder panels; wire Recharts or TradingView as desired.
- Mobile/tablet/desktop responsive with a two-column layout that collapses.



## Credits
- UI inspired by the Zerodha Kite app.


