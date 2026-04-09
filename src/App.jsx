import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEART_EMOJIS = ["♥", "🌸", "❤", "✿", "♡", "💕"];


function FloatingHeart({ x, emoji, onDone }) {
  const xOff = (Math.random() - 0.5) * 50;
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: xOff }}
      animate={{ opacity: [0, 1, 1, 0], y: -110 }}
      transition={{ duration: 2.4, ease: "easeOut" }}
      onAnimationComplete={onDone}
      style={{
        position: "absolute",
        left: x,
        bottom: 10,
        fontSize: 16,
        pointerEvents: "none",
        zIndex: 30,
        userSelect: "none",
      }}
    >
      {emoji}
    </motion.div>
  );
}

function KawaiiiBear({ happy }) {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let t1, t2;
    const schedule = () => {
      t1 = setTimeout(() => {
        setBlink(true);
        t2 = setTimeout(() => { setBlink(false); schedule(); }, 160);
      }, 2000 + Math.random() * 2200);
    };
    schedule();
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.svg
      viewBox="0 0 100 118"
      width={100}
      height={118}
      animate={happy ? { y: [0, -7, 0, -4, 0] } : { y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: happy ? 0.9 : 2.5, ease: "easeInOut" }}
    >
      <motion.g
        animate={happy ? { y: [0, -16, 0, -10, 0] } : { y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: happy ? 0.5 : 2.1 }}
      >
        <ellipse cx="81" cy="85" rx="10" ry="15" fill="#f5d5b5" transform="rotate(22,81,85)" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.3 }}
      >
        <ellipse cx="19" cy="85" rx="10" ry="15" fill="#f5d5b5" transform="rotate(-22,19,85)" />
      </motion.g>

      <ellipse cx="50" cy="91" rx="28" ry="24" fill="#f5d5b5" />
      <ellipse cx="50" cy="94" rx="17" ry="14" fill="#f0b8a0" opacity="0.45" />

      <circle cx="50" cy="50" r="31" fill="#f5d5b5" />

      <circle cx="25" cy="23" r="13" fill="#f5d5b5" />
      <circle cx="75" cy="23" r="13" fill="#f5d5b5" />
      <circle cx="25" cy="23" r="7.5" fill="#f0b8a0" />
      <circle cx="75" cy="23" r="7.5" fill="#f0b8a0" />

      {blink ? (
        <>
          <path d="M 38 49 Q 43 45 48 49" fill="none" stroke="#2e1a08" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 52 49 Q 57 45 62 49" fill="none" stroke="#2e1a08" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          {happy && (
            <>
              <path d="M 39 43 Q 43 40 47 43" fill="none" stroke="#2e1a08" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 53 43 Q 57 40 61 43" fill="none" stroke="#2e1a08" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
          <circle cx="43" cy="49" r="5.5" fill="#2e1a08" />
          <circle cx="57" cy="49" r="5.5" fill="#2e1a08" />
          <circle cx="44.8" cy="47" r="1.8" fill="white" />
          <circle cx="58.8" cy="47" r="1.8" fill="white" />
        </>
      )}

      <ellipse cx="50" cy="59" rx="4" ry="2.8" fill="#d08070" />
      <circle cx="51.5" cy="57.5" r="1.2" fill="rgba(255,255,255,0.5)" />

      <motion.path
        animate={{ d: happy ? "M 41 66 Q 50 77 59 66" : "M 43 65 Q 50 72 57 65" }}
        transition={{ duration: 0.3 }}
        fill="none" stroke="#8a5040" strokeWidth="2.2" strokeLinecap="round"
      />

      <circle cx="31" cy="60" r="7.5" fill="rgba(230,115,105,0.28)" />
      <circle cx="69" cy="60" r="7.5" fill="rgba(230,115,105,0.28)" />

      <ellipse cx="37" cy="112" rx="11" ry="8" fill="#f5d5b5" />
      <ellipse cx="63" cy="112" rx="11" ry="8" fill="#f5d5b5" />

      {happy && (
        <motion.text
          x="76" y="14" fontSize="15" textAnchor="middle" fill="#d06070"
          animate={{ y: [14, 5, 14], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >♥</motion.text>
      )}
    </motion.svg>
  );
}

function Envelope({ onOpen }) {
  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.97 }}
      style={{ width: 280, height: 175, position: "relative", cursor: "pointer", borderRadius: 8 }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "#f5bfb0", borderRadius: 8,
        boxShadow: "0 10px 36px rgba(180,80,70,0.22), 0 3px 10px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
          background: "#e8a898",
          clipPath: "polygon(0 100%, 50% 0%, 100% 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg,#efb0a0 50%,transparent 50%),linear-gradient(225deg,#efb0a0 50%,transparent 50%)",
          backgroundSize: "50% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left, right",
        }} />
      </div>

      
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "55%",
        background: "#e0a090",
        clipPath: "polygon(0 0,100% 0,50% 100%)",
        borderRadius: "8px 8px 0 0",
        zIndex: 3,
      }} />

      
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 50, height: 50, borderRadius: "50%",
        background: "radial-gradient(circle at 38% 35%,#e05060,#b02030)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
        boxShadow: "0 3px 12px rgba(150,30,30,0.45)",
        zIndex: 5,
      }}>💌</div>

      
      <div style={{
        position: "absolute", bottom: 12, width: "100%",
        textAlign: "center", fontFamily: "cursive",
        fontSize: "1rem", color: "#c06058", zIndex: 6,
      }}>Para ti ✨</div>
    </motion.div>
  );
}

function Letter() {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.3, 1] }}
      style={{
        background: "#fffaf7",
        borderRadius: 4,
        padding: "18px 22px 22px",
        boxShadow: "0 6px 32px rgba(0,0,0,0.11)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(transparent,transparent 27px,rgba(220,170,160,0.22) 28px)",
      }} />
      
      <div style={{
        position: "absolute", top: 0, bottom: 0, left: 40,
        width: 1, background: "rgba(220,150,140,0.25)",
      }} />

      <div style={{ position: "relative", paddingLeft: 12 }}>
        <p style={{ fontSize: "0.68rem", color: "#b09080", fontStyle: "italic", marginBottom: 10, letterSpacing: "0.04em" }}>
          Lima, 9 de abril de 2025 💐
        </p>
        <p style={{ fontFamily: "cursive", fontSize: "1.45rem", color: "#b84060", marginBottom: 10, lineHeight: 1.2 }}>
          Mi amor,
        </p>
        <div style={{ fontSize: "0.79rem", color: "#5a3a38", lineHeight: 1.82, fontStyle: "italic" }}>
          <p style={{ marginBottom: 8 }}>
            Ayer fue el{" "}
            <span style={{ fontFamily: "cursive", color: "#c04060", fontStyle: "normal", fontSize: "0.9rem", fontWeight: 700 }}>
              Día del Economista
            </span>{" "}
            y no podía dejar que pasara sin decirte algo...
          </p>
          <p style={{ marginBottom: 8 }}>
            Dicen que la economía estudia cómo administrar recursos escasos... pero tú eres{" "}
            <span style={{ fontFamily: "cursive", color: "#c04060", fontStyle: "normal", fontWeight: 700 }}>
              el recurso más valioso
            </span>{" "}
            que tengo, y jamás habría escasez de amor para ti. 💕
          </p>
          <p style={{ marginBottom: 8 }}>
            Eres brillante, dedicada y tan hermosa que desequilibras{" "}
            <em>cualquier modelo econométrico</em> con solo sonreír. ✨
          </p>
          <p>
            Mi corazón siempre tendrá{" "}
            <span style={{ fontFamily: "cursive", color: "#c04060", fontStyle: "normal", fontWeight: 700 }}>
              oferta infinita
            </span>{" "}
            para ti. 🌸
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ textAlign: "center", fontSize: "1rem", letterSpacing: 8, margin: "12px 0 8px", color: "#d06070" }}
        >♥ ♥ ♥</motion.div>

        <p style={{ fontFamily: "cursive", fontSize: "1.25rem", color: "#b84060", textAlign: "right" }}>
          Con todo mi amor 💌
        </p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
//  App principal
// ─────────────────────────────────────────
export default function CartaEconomista() {
  const [opened, setOpened] = useState(false);
  const [hearts, setHearts] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!opened) return;
    const iv = setInterval(() => {
      const id = idRef.current++;
      setHearts(h => [...h, {
        id,
        x: 15 + Math.random() * 70 + "%",
        emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      }]);
    }, 1000);
    return () => clearInterval(iv);
  }, [opened]);

  const removeHeart = id => setHearts(h => h.filter(x => x.id !== id));

  return (
    <div style={{
      height: "100vh",
      overflow: "hidden",
      background: "linear-gradient(160deg,#fdf0eb 0%,#f8ddd8 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      fontFamily: "Georgia, serif",
      position: "relative",
    }}>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 20 }}>
        {hearts.map(h => (
          <FloatingHeart key={h.id} x={h.x} emoji={h.emoji} onDone={() => removeHeart(h.id)} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (

          /* ── Sobre cerrado ── */
          <motion.div
            key="env"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}
          >
            <KawaiiiBear happy={false} />
            <Envelope onOpen={() => setOpened(true)} />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ fontFamily: "cursive", color: "#c08078", fontSize: "0.88rem", marginTop: 6 }}
            >
              toca el sobre para abrir tu carta 🌸
            </motion.p>
          </motion.div>

        ) : (

          /* ── Carta abierta ── */
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              maxWidth: 360,
              width: "100%",
            }}
          >
            <KawaiiiBear happy={true} />
            <Letter />
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}