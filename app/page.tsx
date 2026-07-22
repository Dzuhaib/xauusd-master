"use client";

const CHANNEL_URL = "https://t.me/+oJRrg4PLNSllY2Zk";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ fill: "#fff", flexShrink: 0 }}>
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Home() {
  return (
    <div dir="ltr" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>

      <header style={{
        background: "var(--tg-panel)",
        borderBottom: "1px solid var(--tg-panel-light)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexShrink: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/logo.jpeg"
            alt="الذهب/الدولار ماستر🔰"
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(42,171,238,0.35)",
            }}
          />
          <div>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "var(--tg-text-primary)", letterSpacing: 0.3 }}>
              الذهب/الدولار ماستر🔰
            </h1>
            <p style={{ fontSize: 12, color: "var(--tg-text-secondary)", marginTop: 1 }}>
              Channel · 4.2K followers
            </p>
          </div>
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--tg-blue)",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 22,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: "nowrap",
            transition: "background 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--tg-blue-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--tg-blue)")}
        >
          Join Channel
        </a>
      </header>

      <div
        className="chat-bg"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="animate-fade-in" style={{
          background: "var(--tg-panel)",
          borderRadius: 16,
          padding: "32px 24px",
          textAlign: "center",
          maxWidth: 360,
          width: "100%",
          border: "1px solid var(--tg-panel-light)",
        }}>
          <img
            src="/logo.jpeg"
            alt="الذهب/الدولار ماستر🔰"
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 16,
              boxShadow: "0 4px 16px rgba(42,171,238,0.3)",
            }}
          />
          <div style={{ fontSize: 22, fontWeight: 700, color: "var(--tg-text-primary)" }}>الذهب/الدولار ماستر🔰</div>
          <div style={{ fontSize: 13, color: "var(--tg-text-secondary)", marginTop: 8, lineHeight: 1.7 }}>
            Premium Gold Signals · Precise Trading · Daily Analysis
          </div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--tg-hit-bg)",
            border: "1px solid var(--tg-blue)",
            borderRadius: 12,
            padding: "4px 14px",
            fontSize: 12,
            color: "var(--tg-blue)",
            marginTop: 14,
            fontWeight: 600,
          }}>
            <span style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--tg-blue)",
              display: "inline-block",
              animation: "pulse 1.5s infinite",
            }} />
            Official Channel
          </div>

          <div style={{ borderTop: "1px solid var(--tg-panel-light)", margin: "20px -24px 0", padding: "16px 24px 0" }}>
            <p style={{ fontSize: 12, color: "var(--tg-text-secondary)", textAlign: "center", marginBottom: 12 }}>
              Get Daily XAUUSD Signals and Gold Market Analysis — Join Us on Telegram
            </p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "var(--tg-blue)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: 26,
                padding: "11px 26px",
                fontSize: 14,
                fontWeight: 600,
                boxShadow: "0 3px 12px rgba(42,171,238,0.35)",
                transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--tg-blue-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(42,171,238,0.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--tg-blue)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 3px 12px rgba(42,171,238,0.35)";
              }}
            >
              <TelegramIcon />
              Follow الذهب/الدولار ماستر🔰
            </a>
          </div>
        </div>

        <div className="animate-fade-in" style={{
          background: "var(--tg-panel)",
          borderRadius: 16,
          padding: "24px 20px",
          marginTop: 16,
          maxWidth: 360,
          width: "100%",
          border: "1px solid var(--tg-panel-light)",
          textAlign: "left",
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tg-blue)", marginBottom: 14 }}>
            📈 Professional Gold Trading Signals (XAUUSD)
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "var(--tg-text-primary)", lineHeight: 1.8 }}>
            <div>🎯 Accurate Daily Signals</div>
            <div>📊 Professional Market Analysis</div>
            <div>💰 Targeting up to 5000 Pips weekly (subject to market conditions)</div>
            <div>🛡️ Professional Risk &amp; Capital Management</div>
            <div>⚡ Live Updates &amp; Continuous Support</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--tg-blue)", marginTop: 14 }}>
            🚀 Join us and start trading with confidence.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease both; }
        @media (max-width: 600px) {
          header { padding: 8px 12px !important; }
        }
      `}</style>
    </div>
  );
}
