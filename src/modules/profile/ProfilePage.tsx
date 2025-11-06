import { useState } from 'react';
import { Modal } from '../app/components/Modal';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  const [appCodeOpen, setAppCodeOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [view, setView] = useState<'account' | 'profile'>('account');

  if (view === 'profile') {
    return <ProfileDetailView onBack={() => setView('account')} />;
  }

  return (
    <>
      <div className="panel p-0 overflow-hidden">
        <div className="px-4 py-3 border-b border-kite-border">Account</div>
        <div className="p-4 grid gap-2">
          <Row title="Funds" to="/funds" />
          <Row title="App Code" onClick={() => setAppCodeOpen(true)} />
          <Row title="Profile" onClick={() => setView('profile')} />
          <Row title="Settings" to="/settings" />
          <Row title="Connected apps" to="/connected-apps" />
          <Row title="Logout" onClick={() => setLogoutOpen(true)} />
        </div>
      </div>

      <Modal open={appCodeOpen} onClose={() => setAppCodeOpen(false)} title="App Code">
        <div className="text-center">
          <div className="muted">Enter this code to login to Kite web</div>
          <div className="text-3xl tracking-widest my-4">810 374</div>
          <div className="muted text-sm">Changes in 28s</div>
        </div>
      </Modal>

      <Modal open={logoutOpen} onClose={() => setLogoutOpen(false)}>
        <div className="text-center py-4">
          <div className="mb-6">Do you want to logout?</div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setLogoutOpen(false)} className="text-blue-400">Cancel</button>
            <button onClick={() => setLogoutOpen(false)} className="text-blue-400">OK</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function ProfileDetailView({ onBack }: { onBack: () => void }) {
  return (
    <div className="panel p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-kite-border flex items-center gap-3">
        <button onClick={onBack}>←</button>
        <span>Profile</span>
        <div className="ml-auto w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">KG</div>
      </div>
      <div className="p-4 grid gap-4">
        <div>
          <div className="font-medium text-lg">Krash Gupta</div>
          <div className="muted text-sm">FLA905</div>
        </div>

        <Section title="Account Details">
          <DetailRow label="Password & Security" value="Manage" link />
          <DetailRow label="Support code" value="View" link />
          <DetailRow label="E-mail" value="2310krash@gmail.com" />
          <DetailRow label="Phone" value="*8674" />
          <DetailRow label="PAN" value="*009C" />
          <DetailRow label="Demat (BO)" value="1208160192939034" />
          <div className="text-blue-400 text-sm mt-2">Manage account</div>
        </Section>

        <Section title="Bank accounts">
          <DetailRow label="KOTAK MAHINDRA BANK LTD" value="*7643" />
        </Section>

        <Section title="Segments">
          <DetailRow label="NSE, MF, BSE" value="" />
          <DetailRow label="Demat authorisation" value="eDIS" link />
        </Section>

        <div className="text-blue-400 text-sm">View active sessions ↓</div>

        <Section title="Account closure">
          <div className="muted text-xs mb-2">
            Account closure is permanent and irreversible. Please read <span className="text-blue-400">this</span> before proceeding.
          </div>
          <div className="text-blue-400 text-sm">Continue</div>
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

function DetailRow({ label, value, link }: { label: string; value: string; link?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-kite-border">
      <span className="text-sm">{label}</span>
      {value && <span className={`text-sm ${link ? 'text-blue-400' : ''}`}>{value}</span>}
    </div>
  );
}

function Row({ title, to, onClick }: { title: string; to?: string; onClick?: () => void }) {
  const body = (
    <div className="px-3 py-3 hover:bg-black/20 rounded-md cursor-pointer">{title}</div>
  );
  if (to) return <Link to={to}>{body}</Link>;
  return <div onClick={onClick}>{body}</div>;
}


