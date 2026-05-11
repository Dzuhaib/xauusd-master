"use client";
import { useEffect, useRef } from "react";

const CHANNEL_URL = "https://whatsapp.com/channel/0029VbCx7zLIyPtPPzat4A0a";

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" style={{ fill: "var(--wa-text-secondary)", flexShrink: 0 }}>
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ fill: "#fff", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L0 24l6.296-1.516A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.737.9.938-3.634-.235-.374A9.818 9.818 0 1112 21.818z" />
  </svg>
);

type TPHitProps = {
  tp: number;
  price: number;
  time: string;
  views: string;
  isLast?: boolean;
};

function TPHitBubble({ tp, price, time, views, isLast }: TPHitProps) {
  const messages: Record<number, string> = {
    1: "Profit secured 🔥 Move SL to entry now.",
    2: "Beautiful move 💰 Holding rest for more.",
    3: "Gold dropping like clockwork 📉 Stay patient.",
    4: "HawkEye precision 🦅 TP5 incoming!",
    5: "FULL SWEEP! 🎊 All 5 TPs secured! Congrats to all who followed! 💎",
  };

  return (
    <div className="animate-slide-in" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginBottom: tp === 5 ? "20px" : "6px",
    }}>
      <div style={{
        background: isLast ? "var(--wa-hit-bg)" : "var(--wa-panel)",
        border: isLast ? "1px solid var(--wa-green)" : "none",
        borderRadius: "0 10px 10px 10px",
        padding: "10px 14px",
        maxWidth: "380px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
      }}>
        <div style={{ fontSize: isLast ? "15px" : "14px", fontWeight: 700, color: "var(--wa-green)", marginBottom: 5 }}>
          {isLast ? `🏆 ALL 5 TARGETS HIT ✅✅✅` : `🎯 TARGET ${tp} HIT ✅`}
        </div>
        <div style={{ fontSize: "13px", color: "var(--wa-text-primary)", lineHeight: 1.6 }}>
          <span style={{ color: "var(--wa-green)" }}>✔ </span>
          XAUUSD SELL — TP{tp} <span style={{ color: "var(--wa-gold)", fontWeight: 700 }}>{price}</span> reached!
          <br />
          {messages[tp]}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 7 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--wa-text-secondary)", fontSize: 11 }}>
            <EyeIcon /> {views}
          </div>
          <span style={{ fontSize: 11, color: "var(--wa-text-secondary)" }}>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>

      {/* ── HEADER ── */}
      <header style={{
        background: "var(--wa-panel)",
        borderBottom: "1px solid var(--wa-panel-light)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexShrink: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Avatar */}
          <div style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
            boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
          }}>🦅</div>

          <div>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "var(--wa-text-primary)", letterSpacing: 0.3 }}>
              HawkEye XAUUSD
            </h1>
            <p style={{ fontSize: 12, color: "var(--wa-text-secondary)", marginTop: 1 }}>
              Channel · 4.2K followers
            </p>
          </div>
        </div>

        {/* Follow CTA */}
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--wa-green)",
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
          onMouseEnter={e => (e.currentTarget.style.background = "var(--wa-green-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--wa-green)")}
        >
          Follow Channel
        </a>
      </header>

      {/* ── CHAT BODY ── */}
      <div
        ref={chatRef}
        className="chat-bg"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "14px 16px",
        }}
      >
        {/* Channel Banner */}
        <div className="animate-fade-in" style={{
          background: "var(--wa-panel)",
          borderRadius: 12,
          padding: "18px 16px",
          textAlign: "center",
          marginBottom: 16,
          border: "1px solid var(--wa-panel-light)",
        }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🦅</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "var(--wa-text-primary)" }}>HawkEye XAUUSD</div>
          <div style={{ fontSize: 12, color: "var(--wa-text-secondary)", marginTop: 4 }}>
            Premium Gold Signals · Precision Trading · Daily Analysis
          </div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--wa-hit-bg)",
            border: "1px solid var(--wa-green)",
            borderRadius: 12,
            padding: "4px 12px",
            fontSize: 12,
            color: "var(--wa-green)",
            marginTop: 10,
            fontWeight: 600,
          }}>
            <span style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--wa-green)",
              display: "inline-block",
              animation: "pulse 1.5s infinite",
            }} />
            Official Channel
          </div>
        </div>

        {/* Date Divider */}
        <div style={{ textAlign: "center", margin: "12px 0" }}>
          <span style={{
            background: "var(--wa-panel)",
            color: "var(--wa-text-secondary)",
            fontSize: 12,
            padding: "5px 14px",
            borderRadius: 8,
            display: "inline-block",
          }}>Today</span>
        </div>

        {/* ── SIGNAL MESSAGE ── */}
        <div className="animate-slide-in" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 10,
        }}>
          <div style={{
            background: "var(--wa-panel)",
            borderRadius: "0 10px 10px 10px",
            padding: "12px 14px",
            maxWidth: 440,
            width: "100%",
            boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
          }}>
            {/* Signal Header */}
            <div style={{ fontSize: 15, fontWeight: 800, color: "var(--wa-green)", letterSpacing: 0.4, marginBottom: 6 }}>
              ─𝐗𝐀𝐔𝐔𝐒𝐃 (𝐆𝐎𝐋𝐃) SELL 𝐍𝐨𝐰 ✅
            </div>
            <div style={{ color: "var(--wa-text-secondary)", fontSize: 13, marginBottom: 8, letterSpacing: 2 }}>
              ────────────────
            </div>

            {/* Entry */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, marginBottom: 6 }}>
              <span>🔮</span>
              <span style={{ fontWeight: 600, color: "var(--wa-text-primary)" }}>𝐄𝐍𝐓𝐑𝐘 GOLD:</span>
              <span style={{ color: "var(--wa-gold)", fontWeight: 700 }}>4675 – 4673</span>
            </div>

            {/* Stop Loss */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, marginBottom: 10 }}>
              <span>❎</span>
              <span style={{ fontWeight: 600, color: "var(--wa-text-primary)" }}>𝐒𝐓𝐎𝐏 𝐋𝐎𝐒𝐒:</span>
              <span style={{ color: "var(--wa-red)", fontWeight: 700 }}>4687</span>
            </div>

            {/* Targets heading */}
            <div style={{ fontSize: 13, color: "var(--wa-text-primary)", marginBottom: 6 }}>
              ⚠️ &nbsp;<strong>𝐓𝐀𝐑𝐆𝐄𝐓𝐒:</strong>
            </div>

            {/* TP Rows */}
            {[
              { n: 1, price: 4670 },
              { n: 2, price: 4667 },
              { n: 3, price: 4664 },
              { n: 4, price: 4661 },
              { n: 5, price: 4658 },
            ].map(({ n, price }) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, marginBottom: 4 }}>
                <span>💎</span>
                <span style={{ color: "var(--wa-text-secondary)" }}>TP {n} _</span>
                <span style={{ color: "var(--wa-text-primary)", fontWeight: 600 }}>{price}</span>
                <span style={{
                  background: "var(--wa-green)",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "2px 8px",
                  borderRadius: 10,
                  marginLeft: 4,
                }}>✓ HIT</span>
              </div>
            ))}

            {/* Note */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--wa-text-secondary)",
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px solid var(--wa-panel-light)",
            }}>
              💣 &nbsp;<strong style={{ color: "var(--wa-text-primary)" }}>𝐍𝐎𝐓𝐄:</strong>
              &nbsp;𝐔𝐬𝐞 𝐩𝐫𝐨𝐩𝐞𝐫 𝐫𝐢𝐬𝐤 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭!
            </div>

            {/* Message meta */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--wa-text-secondary)", fontSize: 11 }}>
                <EyeIcon /> 1.4K
              </div>
              <span style={{ fontSize: 11, color: "var(--wa-text-secondary)" }}>11:02 AM</span>
            </div>
          </div>
        </div>

        {/* ── TP HIT MESSAGES ── */}
        <TPHitBubble tp={1} price={4670} time="11:18 AM" views="1.1K" />
        <TPHitBubble tp={2} price={4667} time="11:35 AM" views="998" />
        <TPHitBubble tp={3} price={4664} time="11:52 AM" views="876" />
        <TPHitBubble tp={4} price={4661} time="12:08 PM" views="812" />
        <TPHitBubble tp={5} price={4658} time="12:24 PM" views="2.3K" isLast />

      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "var(--wa-panel)",
        borderTop: "1px solid var(--wa-panel-light)",
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        flexShrink: 0,
      }}>
        <p style={{ fontSize: 12, color: "var(--wa-text-secondary)", textAlign: "center" }}>
          Get daily XAUUSD signals &amp; gold market analysis — follow us on WhatsApp
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "var(--wa-green)",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 26,
            padding: "11px 26px",
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "0 3px 12px rgba(37,211,102,0.35)",
            transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--wa-green-hover)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(37,211,102,0.45)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "var(--wa-green)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 3px 12px rgba(37,211,102,0.35)";
          }}
        >
          <WaIcon />
          Follow HawkEye XAUUSD
        </a>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-slide-in { animation: slideIn 0.4s ease both; }
        .animate-fade-in  { animation: fadeIn 0.5s ease both; }
        @media (max-width: 600px) {
          header { padding: 8px 12px !important; }
        }
      `}</style>
    </div>
  );
}
