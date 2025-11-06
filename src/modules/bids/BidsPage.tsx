import { useState } from 'react';
import { Modal } from '../app/components/Modal';

const ipos = [
  { name: 'GROWW', price: '₹95 – ₹100', dates: '4th – 7th Nov' },
  { name: 'SHETHJI (SME)', price: '₹120 – ₹125', dates: '6th – 10th Nov' },
  { name: 'FINBUD (SME)', price: '₹140 – ₹142', dates: '6th – 10th Nov' }
];

export function BidsPage() {
  const [tab, setTab] = useState<'ipo' | 'gsec' | 'auctions'>('ipo');
  const [selected, setSelected] = useState<typeof ipos[number] | null>(null);

  return (
    <div className="grid gap-3">
      <div className="panel p-2">
        <div className="flex gap-6 text-sm">
          <SubTab label={`IPO (${ipos.length})`} active={tab === 'ipo'} onClick={() => setTab('ipo')} />
          <SubTab label="Govt. securities (1)" active={tab === 'gsec'} onClick={() => setTab('gsec')} />
          <SubTab label="Auctions" active={tab === 'auctions'} onClick={() => setTab('auctions')} />
        </div>
      </div>

      {tab === 'ipo' && (
        <div className="panel divide-y divide-kite-border">
          {ipos.map(x => (
            <div key={x.name} className="flex items-center gap-3 px-3 py-4">
              <div>
                <div className="font-medium">{x.name}</div>
                <div className="muted text-xs">{x.price}</div>
              </div>
              <div className="ml-auto muted text-xs">{x.dates}</div>
              <button onClick={() => setSelected(x)} className="bg-white text-black text-sm px-3 py-1 rounded-md">Apply</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'gsec' && (
        <div className="panel">
          <div className="px-3 py-4 flex items-center gap-3">
            <div>
              <div className="text-xs muted">GSEC</div>
              <div className="font-medium">6.48% GS 2035</div>
              <div className="muted text-xs">Ends on Thu, 6 Nov 2025</div>
            </div>
            <div className="ml-auto text-right">
              <div className="muted text-xs">Yield* 6.47%</div>
              <button className="bg-white text-black text-sm px-3 py-1 rounded-md mt-2">Place bid</button>
            </div>
          </div>
        </div>
      )}

      {tab === 'auctions' && (
        <div className="panel py-16 text-center">
          <div className="text-lg font-medium mb-2">No stocks for auctions</div>
          <div className="muted text-sm">The auction market opens at 2:30 PM.</div>
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        <div className="grid gap-3">
          <button className="bg-blue-500 text-white rounded-md py-3">Apply</button>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Info label="Min qty." value="150" />
            <Info label="Price" value={selected?.price ?? ''} />
            <Info label="Dates" value={selected?.dates ?? ''} full />
          </div>
          <div className="muted text-xs">About the company</div>
        </div>
      </Modal>
    </div>
  );
}

function SubTab({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 -mb-2 border-b-2 ${active ? 'border-white' : 'border-transparent muted hover:text-white'}`}
    >
      {label}
    </button>
  );
}

function Info({ label, value, full }: { label: string; value: string; full?: boolean }) {
  return (
    <div className={full ? 'col-span-2' : ''}>
      <div className="muted text-xs">{label}</div>
      <div>{value}</div>
    </div>
  );
}


