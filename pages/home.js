import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserDropdown from "comps/UserDropdown";
import { apiService } from "../utils/apiService";
import Head from "next/head";

const ACCENTS = [
  { accent: "#FF6B6B", light: "#FFF1F1" },
  { accent: "#4DA3FF", light: "#EEF6FF" },
  { accent: "#FFB648", light: "#FFF7E8" },
  { accent: "#4DD0E1", light: "#EAFBFD" },
  { accent: "#C58CE0", light: "#F8EEFC" },
  { accent: "#F48FB1", light: "#FFF0F5" },
  { accent: "#FF8A65", light: "#FFF1EC" },
  { accent: "#7986CB", light: "#EEF1FF" },
  { accent: "#81C784", light: "#EEF8EF" },
  { accent: "#4DB6AC", light: "#EAF8F6" },
];

const FLAG_MAP = {
  French: "🇫🇷", Spanish: "🇪🇸", German: "🇩🇪",
  English: "🇬🇧", Hindi: "🇮🇳", Portuguese: "🇵🇹",
  Italian: "🇮🇹", Japanese: "🇯🇵", Chinese: "🇨🇳", Arabic: "🇸🇦",
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }

html,
body,
#__next {
  background: #f2f5ef !important;
  overflow-x: hidden;
  min-height: 100%;
}
.kp {
  min-height:100vh;
  font-family:'Nunito','Segoe UI','Noto Sans Devanagari',sans-serif;
  background:#f2f5ef;
  position:relative;
  overflow:hidden;
}

.kp::before {
  content:'';
  position:absolute;
  width:360px; height:360px;
  border-radius:50%;
  background:rgba(76,175,80,0.03);
  top:-120px; right:-80px;
  filter:blur(12px);
}

/* ── Header ── */
.kp-header {
  position:sticky; top:0; z-index:100;
  display:grid; grid-template-columns:auto 1fr auto;
  align-items:center;
  padding:10px 24px 2px;
  background:transparent;
}
.kp-header-left, .kp-header-right { display:flex; align-items:center; }
.kp-header-right { justify-content:flex-end; }

.kp-brand {
  text-align:center;
  font-size:2.2rem; font-weight:900;
  color:#2b7d10; letter-spacing:0.2px;
}

/* ── Back button: circle → pill on hover ── */
.kp-back {
  display:flex; align-items:center; justify-content:center;
  height:40px; min-width:40px;
  padding:0;
  border:none; border-radius:22px;
  background:#ffffff;
  cursor:pointer;
  box-shadow:0 4px 14px rgba(0,0,0,0.08);
  transition:all 0.25s cubic-bezier(0.34,1.56,0.64,1);
  overflow:hidden;
  gap:0;
}
.kp-back:hover {
  min-width:44px;
  padding:0 16px 0 12px;
  gap:6px;
  transform:translateY(-2px) scale(1.04);
  box-shadow:0 8px 20px rgba(0,0,0,0.13);
}
.kp-back svg {
  flex-shrink:0;
  transition:transform 0.25s ease;
}
.kp-back:hover svg { transform:translateX(-1px); }
.kp-back-label {
  font-size:0.8rem; font-weight:800; color:#2b7d10;
  white-space:nowrap;
  max-width:0; opacity:0; overflow:hidden;
  transition:max-width 0.25s ease, opacity 0.2s ease;
  font-family:'Nunito',sans-serif;
}
.kp-back:hover .kp-back-label { max-width:60px; opacity:1; }

/* ── Page content ── */
.kp-content {
  max-width:1260px; margin:0 auto;
  padding:6px 20px 42px;
  position:relative; z-index:2;
}

/* ── Context pill (grade · language) ── */
.kp-context-pill {
  display:inline-flex; align-items:center; gap:6px;
  background:rgba(255,255,255,0.7);
  border:1px solid rgba(139,195,74,0.2);
  border-radius:99px;
  padding:5px 14px;
  margin-bottom:6px;
  backdrop-filter:blur(6px);
}
.kp-context-pill span {
  font-size:0.75rem; font-weight:700;
  color:#4a7240;
}
.kp-context-pill .kp-dot {
  color:#b5cdb1; font-weight:400; font-size:0.72rem;
}

/* ── Heading ── */
.kp-heading {
  font-size:1.75rem; font-weight:900;
  color:#1d5a10; margin-bottom:4px; line-height:1.25;
}
.kp-desc {
  font-size:0.88rem; line-height:1.5;
  font-weight:600; color:#71856d;
  margin-bottom:20px;
}

/* ── Grid ── */
.kp-grid {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
  gap:16px;
}

/* ── Card ── */
.kp-card {
  text-decoration:none; color:inherit;
  border-radius:22px; overflow:hidden;
  background:#fff;
  border:2px solid rgba(139,195,74,0.12);
  box-shadow:0 6px 20px rgba(0,0,0,0.05);
  transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
             box-shadow 0.3s cubic-bezier(0.34,1.56,0.64,1),
             border-color 0.3s ease;
  animation:fadeUp 0.45s ease both;
  position:relative;
  will-change:transform;
}
.kp-card:hover {
  transform:translateY(-10px) scale(1.02);
  border-color:var(--card-accent, rgba(139,195,74,0.4));
  box-shadow:0 20px 40px rgba(0,0,0,0.13),
             0 0 0 3px var(--card-accent-faint, rgba(139,195,74,0.12));
}

/* ── Card top image area ── */
.kp-cardTop {
  height:150px;
  position:relative; overflow:hidden;
  display:flex; align-items:center; justify-content:center;
  transition:background 0.3s ease;
}
.kp-circleA, .kp-circleB {
  position:absolute; border-radius:50%;
  transition:opacity 0.3s ease, transform 0.3s ease;
}
.kp-circleA { width:150px; height:150px; right:-34px; bottom:-34px; opacity:0.12; }
.kp-circleB { width:72px; height:72px; top:-16px; left:-16px; opacity:0.08; }
.kp-card:hover .kp-circleA { opacity:0.18; transform:scale(1.1); }
.kp-card:hover .kp-circleB { opacity:0.13; }

.kp-icon {
  width:104px; height:104px; object-fit:contain;
  position:relative; z-index:2;
  animation:floatIcon 3.8s ease-in-out infinite;
  filter:drop-shadow(0 8px 14px rgba(0,0,0,0.12));
  transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1), filter 0.3s ease;
}
.kp-card:hover .kp-icon {
  transform:scale(1.08);
  filter:drop-shadow(0 16px 24px rgba(0,0,0,0.16));
}

/* ── Card body ── */
.kp-cardBody {
  padding:12px 10px 14px;
  display:flex; flex-direction:column;
  align-items:center; text-align:center; gap:4px;
  background:linear-gradient(180deg,#fff,#f9fcf7);
}
.kp-titleHindi { font-size:1rem; font-weight:900; color:#1d5a10; line-height:1.3; }
.kp-titleEnglish { font-size:0.72rem; font-weight:800; color:#5f7d59; line-height:1.4; }

/* ── Keyframes ── */
@keyframes floatIcon {
  0%,100% { transform:translateY(0px); }
  50%      { transform:translateY(-4px); }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}

/* ── Responsive ── */
@media (max-width:768px) {
  .kp-header { padding:10px 14px 0; }
  .kp-brand { font-size:1.7rem; }
  .kp-content { padding:0 14px 34px; }
  .kp-heading { font-size:1.5rem; }
  .kp-grid { grid-template-columns:repeat(auto-fill,minmax(160px,1fr)); gap:12px; }
  .kp-cardTop { height:132px; }
  .kp-icon { width:86px; height:86px; }
}
@media (max-width:520px) {
  .kp-brand { font-size:1.45rem; }
  .kp-back { width:42px; height:42px; }
  .kp-heading { font-size:1.3rem; }
  .kp-desc { font-size:0.82rem; }
  .kp-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
  .kp-card { border-radius:20px; }
  .kp-cardTop { height:118px; }
  .kp-icon { width:74px; height:74px; }
  .kp-cardBody { padding:10px 8px 12px; }
  .kp-titleHindi { font-size:0.82rem; }
  .kp-titleEnglish { font-size:0.64rem; }
}
`;

const GREEN = "#2b7d10";

function ProgressBar({ progress }) {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "7px", padding: "0 2px" }}>
      <div style={{ flex: 1, height: "3px", borderRadius: "99px", background: "#2b7d1022", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${progress}%`,
          borderRadius: "99px",
          background: "#2b7d10",
          transition: "width 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }} />
      </div>
    </div>
  );
}

export default function HomeView() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [list, setList]           = useState([]);
  const [grade, setGrade]         = useState("");
  const [language, setLanguage]   = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      window.location.href = "/lms-system";
      return;
    }

    async function load() {
      try {
        const langRaw  = localStorage.getItem("language") || "";
        const singleLang = langRaw.split(",")[0].trim();

        const profile = {
          grade:      localStorage.getItem("grade"),
          language:   singleLang,
          curriculum: localStorage.getItem("curriculum"),
        };

        setGrade(profile.grade || "");
        setLanguage(singleLang);

        const res  = await apiService.getHomeConfig(profile);
        const data = res.data;

        const progressRes =
  await apiService.getCardProgress({
    user_id: localStorage.getItem("user_id"),
    grade: localStorage.getItem("grade"),
    language: singleLang,
    curriculum: localStorage.getItem("curriculum"),
  });

const progressData = progressRes.data || [];
if (data.items?.length > 0) {

  const raw =
    typeof data.items[0].list === "string"
      ? JSON.parse(data.items[0].list)
      : data.items[0].list || [];

  const updatedList = raw.map((item) => {

  const cardId =
    Number(
      String(item.id)
        .replace("card-p", "")
    );

  const foundProgress =
    progressData.find(
      (p) =>
        Number(p.card_id) === cardId
    );

  return {
    ...item,
    progress:
      foundProgress?.progress || 0,
  };
});

  setList(updatedList);
}
      } catch (e) {
        console.error("Fetch error:", e);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  if (isLoading) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f2f5ef",
      }}
    />
  );
}

  return (
    <>
      <Head>
        <title>Konzeptes | Home</title>
      </Head>

      <style>{css}</style>

      <div className="kp">

        {/* ── Header ── */}
        <header className="kp-header">

          <div className="kp-header-left">
            <button className="kp-back" onClick={() => router.push("/")}>
              <svg
                width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="#2b7d10"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span className="kp-back-label">Back</span>
            </button>
          </div>

          <h1 className="kp-brand">Konzeptes</h1>

          <div className="kp-header-right">
            <UserDropdown />
          </div>

        </header>

        {/* ── Content ── */}
        <div className="kp-content">

          {/* Grade · Language pill */}
        {/*   <div className="kp-context-pill">
            <span>🎓 {grade || "—"}</span>
            <span className="kp-dot">·</span>
            <span>{FLAG_MAP[language] ?? "🌐"} {language || "—"}</span>
          </div>*/}

          {/* Heading */}
          <h2 className="kp-heading">What would you like to practice?</h2>

          {/* Cards */}
          <main className="kp-grid">
            {list.map((item, i) => {
              const colors  = ACCENTS[i % ACCENTS.length];
              const hindi   = (item.label || "").split(" - ")[0];
              const iconUrl = apiService.getIconUrl(item.id);

              return (
                <Link
                  key={item.id || i}
                  href={"/p/" + item.id}
                  className="kp-card"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    "--card-accent":       colors.accent + "66",
                    "--card-accent-faint": colors.accent + "22",
                  }}
                >
                  {/* Top image area */}
                  <div className="kp-cardTop" style={{ background: colors.light }}>
                    <div className="kp-circleA" style={{ background: colors.accent }} />
                    <div className="kp-circleB" style={{ background: colors.accent }} />
                    <img src={iconUrl} alt={hindi} className="kp-icon" />
                  </div>
<ProgressBar progress={item.progress ?? 0} accent={colors.accent} />

{/* Text */}
<div className="kp-cardBody">
                    <div className="kp-titleHindi">{hindi}</div>
                    {item.smLabel && (
                      <div className="kp-titleEnglish">{item.smLabel}</div>
                    )}
                     
</div>
                  
              
                </Link>
                  
              );
            })}
          </main>

        </div>
      </div>
    </>
  );
}