import React, { useState, useEffect } from 'react';

// TODAY'S DATA - APRIL 17, 2026
const SLATE = [
  { id: 1, name: "Ian Happ", team: "CHC", prop: "1.5 Total Bases", odds: "+115", prob: 68.2, alert: "WIND 18MPH OUT" },
  { id: 2, name: "Vladdy Jr.", team: "TOR", prop: "1.5 Total Bases", odds: "-105", prob: 62.1, alert: "vs Eric Lauer (LHP)" },
  { id: 3, name: "Marcell Ozuna", team: "ATL", prop: "0.5 Home Runs", odds: "+380", prob: 32.8, alert: "vs Martin Perez (LHP)" }
];

export default function App() {
  const [ticket, setTicket] = useState([]);

  const addToTicket = (player) => {
    if (!ticket.find(t => t.id === player.id)) setTicket([...ticket, player]);
  };

  return (
    <div style={{ padding: '20px', background: '#0f172a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header>
        <h1 style={{ color: '#38bdf8' }}>PROP_SEARCH COMMANDER</h1>
        <p style={{ fontSize: '12px', color: '#94a3b8' }}>FRIDAY, APRIL 17, 2026 | JOLIET OPS</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginTop: '20px' }}>
        {SLATE.map(p => (
          <div key={p.id} onClick={() => addToTicket(p)} style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', border: '1px solid #334155' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{p.name} ({p.team})</strong>
              <span style={{ color: '#fbbf24' }}>{p.odds}</span>
            </div>
            <div style={{ fontSize: '12px', marginTop: '5px' }}>{p.prop}</div>
            <div style={{ fontSize: '10px', color: '#f87171', fontWeight: 'bold', marginTop: '5px' }}>⚠️ {p.alert}</div>
            <div style={{ marginTop: '10px', height: '4px', background: '#334155', borderRadius: '2px' }}>
              <div style={{ width: `${p.prob}%`, height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '10px', marginTop: '5px' }}>Sim Win: {p.prob}%</div>
          </div>
        ))}
      </div>

      {ticket.length > 0 && (
        <div style={{ marginTop: '30px', padding: '15px', background: '#0ea5e9', borderRadius: '10px' }}>
          <h3>Current Ticket ({ticket.length} Legs)</h3>
          <button onClick={() => {
            const text = ticket.map(t => `${t.name}: ${t.prop} (${t.odds})`).join('\n');
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
          }} style={{ width: '100%', padding: '10px', background: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            COPY TO CLIPBOARD
          </button>
        </div>
      )}
    </div>
  );
}
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
