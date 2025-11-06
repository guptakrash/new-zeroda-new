import { useState } from 'react';

export function SettingsPage() {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');
  const [orderNotif, setOrderNotif] = useState(false);
  const [stickyOrder, setStickyOrder] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [stickyPins, setStickyPins] = useState(true);
  const [watchlistNotes, setWatchlistNotes] = useState(true);
  const [rememberQty, setRememberQty] = useState(false);
  const [batteryOpt, setBatteryOpt] = useState(false);

  return (
    <div className="panel p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-kite-border">Settings</div>
      <div className="p-4 grid gap-4">
        <Section title="Theme">
          <Radio label="Default" checked={theme === 'default'} onChange={() => setTheme('default')} />
          <Radio label="Dark" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
        </Section>

        <Toggle label="Order notifications" checked={orderNotif} onChange={setOrderNotif} />
        <Toggle
          label="Sticky order window"
          desc="Don't automatically hide order window after order placement."
          checked={stickyOrder}
          onChange={setStickyOrder}
        />
        <Toggle
          label="Accessibility mode"
          desc="Disables transitions and simplifies UI."
          checked={accessibility}
          onChange={setAccessibility}
        />
        <Toggle
          label="Fullscreen"
          desc="May not work on certain devices."
          checked={fullscreen}
          onChange={setFullscreen}
        />
        <Toggle
          label="Sticky pins"
          desc="Show pinned stock tickers on the top on all screens."
          checked={stickyPins}
          onChange={setStickyPins}
        />
        <Toggle label="Show watchlist notes" checked={watchlistNotes} onChange={setWatchlistNotes} />
        <Toggle label="Remember F&O order quantity" checked={rememberQty} onChange={setRememberQty} />
        <Toggle
          label="Disable battery optimization"
          desc="Get regular widget updates and reduce app closes"
          checked={batteryOpt}
          onChange={setBatteryOpt}
        />

        <Section title="Chart">
          <div className="text-sm">ChartIQ</div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-medium mb-2">{title}</div>
      <div className="grid gap-2">{children}</div>
    </div>
  );
}

function Radio({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center justify-between py-2 cursor-pointer">
      <span>{label}</span>
      <input type="radio" checked={checked} onChange={onChange} className="w-4 h-4" />
    </label>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="py-2">
      <label className="flex items-center justify-between cursor-pointer">
        <div>
          <div>{label}</div>
          {desc && <div className="muted text-xs mt-1">{desc}</div>}
        </div>
        <button
          onClick={() => onChange(!checked)}
          className={`w-12 h-6 rounded-full relative transition-colors ${checked ? 'bg-blue-500' : 'bg-gray-600'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : ''}`} />
        </button>
      </label>
    </div>
  );
}

