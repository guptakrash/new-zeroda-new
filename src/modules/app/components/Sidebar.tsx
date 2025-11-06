import { Layers, LineChart, LayoutGrid, Settings, Star } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="flex flex-col gap-3">
      <Section title="Watchlists">
        <Pill>Watchlist 1</Pill>
        <Pill>Watchlist 2</Pill>
        <Pill>Watchlist 3</Pill>
        <Pill>Watchlist 4</Pill>
      </Section>
      <Section title="Widgets">
        <WidgetItem icon={<LineChart size={16} />} label="Charts" />
        <WidgetItem icon={<Layers size={16} />} label="Positions" />
        <WidgetItem icon={<Star size={16} />} label="Favourites" />
        <WidgetItem icon={<LayoutGrid size={16} />} label="Gainers/Losers" />
      </Section>
      <Section title="Settings">
        <WidgetItem icon={<Settings size={16} />} label="Preferences" />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel p-3">
      <div className="muted text-xs mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-xs bg-black/20 hover:bg-black/10 border border-kite-border rounded-md px-2 py-1">
      {children}
    </button>
  );
}

function WidgetItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-2 hover:bg-black/20 rounded-md px-2 py-1 text-left">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}


