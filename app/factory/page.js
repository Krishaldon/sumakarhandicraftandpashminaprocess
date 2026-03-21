export default function Factory() {
  const steps = [
    { n: "01", icon: "🐐", title: "Raw Fiber — The Chyangra Goat", desc: "True pashmina comes from the Chyangra goat living above 4,000 meters in the Himalayas. Every spring, nomadic herders carefully comb — never shear — the ultra-fine undercoat by hand. A single goat yields only 80–150 grams per year.", detail: "Fiber diameter: 12–16 microns · Altitude: 4,000–5,000m" },
    { n: "02", icon: "🧺", title: "Sorting & Cleaning", desc: "Raw fiber arrives at our factory and is sorted by hand. Workers separate the ultra-fine undercoat from coarser guard hairs. The fiber is then washed gently in cool water with natural soap and dried in the shade to preserve softness.", detail: "Each batch is tested for purity before moving to spinning" },
    { n: "03", icon: "🪡", title: "Hand Spinning", desc: "Our artisan spinners draw out the fiber and twist it onto a traditional wooden spindle called a takli. This hand-spinning technique, unchanged for centuries, produces a yarn of extraordinary fineness that no machine can replicate.", detail: "Hand-spun yarn is 20–30% finer than machine-spun equivalent" },
    { n: "04", icon: "🎨", title: "Dyeing", desc: "We offer over 300 colors using OEKO-TEX certified dyes that are safe for skin and the environment. Yarn is dyed in small batches in temperature-controlled vats. Natural dyes from local plants are used for our heritage collection.", detail: "300+ colors · OEKO-TEX certified · Eco-safe process" },
    { n: "05", icon: "🪵", title: "Loom Weaving", desc: "Our weavers work on traditional wooden frame looms, some over 100 years old. A single shawl can take anywhere from one day for a plain weave to over two weeks for a complex jacquard or double-weave reversible piece.", detail: "Plain weave: 1 day · Jacquard: 5–7 days · Reversible: up to 2 weeks" },
    { n: "06", icon: "✨", title: "Finishing & Quality Control", desc: "Each piece goes through fulling — a controlled washing process that brings out the softness of pashmina. The shawl is then stretched, fringe-twisted by hand, and inspected. Only pieces that pass our strict quality control are shipped.", detail: "100% hand-inspected · Zero-defect policy · Handmade gift packaging" },
  ];

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#FFFDF9", color: "#2A1A0E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        :root { --cream:#F7F3EE; --warm-brown:#8B5E3C; --dark-brown:#3D2314; --gold:#C49A3C; --muted:#7A6555; --white:#FFFDF9; --border:rgba(139,94,60,0.15); }
        nav { position:sticky; top:0; z-index:100; background:var(--white); border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; padding:0 2.5rem; height:78px; }
        .nav-logo-main { font-family:'Playfair Display',serif; font-size:1.1rem; color:var(--dark-brown); }
        .nav-logo-main span { color:var(--gold); }
        .nav-logo-sub { font-size:0.58rem; letter-spacing:0.22em; color:var(--muted); text-transform:uppercase; font-weight:500; }
        .nav-links { display:flex; gap:1.8rem; list-style:none; }
        .nav-links a { font-size:0.78rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); text-decoration:none; font-weight:500; }
        .nav-links a:hover, .nav-links a.active { color:var(--warm-brown); }
        .btn-login { font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase; padding:0.5rem 1.1rem; border:1px solid var(--warm-brown); color:var(--warm-brown); background:transparent; cursor:pointer; font-family:'Jost',sans-serif; font-weight:500; }
        .factory-hero { background:var(--dark-brown); padding:5rem 2.5rem; text-align:center; }
        .eyebrow { font-size:0.68rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:0.7rem; }
        .page-title { font-family:'Playfair Display',serif; font-size:2.8rem; color:#F7F3EE; }
        .page-title em { font-style:italic; color:var(--gold); }
        .page-subtitle { font-size:0.92rem; color:rgba(247,243,238,0.6); max-width:600px; margin:1rem auto 0; line-height:1.8; font-weight:300; }
        .steps-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; background:var(--dark-brown); }
        .step { display:grid; grid-template-columns:110px 1fr; min-height:220px; border-bottom:1px solid rgba(255,255,255,0.07); }
        .step:nth-child(odd) { border-right:1px solid rgba(255,255,255,0.07); }
        .step-num-col { background:rgba(196,154,60,0.08); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.5rem; padding:1.5rem; }
        .step-num { font-family:'Playfair Display',serif; font-size:2.2rem; color:var(--gold); opacity:0.6; line-height:1; }
        .step-icon { font-size:1.6rem; opacity:0.5; }
        .step-content { padding:2rem 1.8rem; }
        .step-title { font-family:'Playfair Display',serif; font-size:1.1rem; color:#F7F3EE; margin-bottom:0.8rem; }
        .step-desc { font-size:0.85rem; color:rgba(247,243,238,0.6); line-height:1.85; font-weight:300; }
        .step-detail { margin-top:0.8rem; font-size:0.75rem; color:var(--gold); opacity:0.8; font-style:italic; }
        .photo-section { padding:4rem 2.5rem; background:var(--dark-brown); }
        .photo-title { text-align:center; font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(196,154,60,0.6); margin-bottom:1.5rem; }
        .photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }
        .photo-placeholder { border:1px dashed rgba(196,154,60,0.35); padding:3rem; text-align:center; cursor:pointer; }
        .photo-placeholder:hover { border-color:var(--gold); }
        .photo-icon { font-size:2rem; opacity:0.3; margin-bottom:0.8rem; }
        .photo-label { font-family:'Playfair Display',serif; font-size:1rem; color:rgba(247,243,238,0.4); margin-bottom:0.4rem; }
        .photo-sub { font-size:0.72rem; color:rgba(247,243,238,0.2); letter-spacing:0.1em; }
        footer { background:#0F0804; color:rgba(255,255,255,0.5); padding:2rem 2.5rem; text-align:center; font-size:0.75rem; }
      `}</style>

      <nav>
        <div>
          <div className="nav-logo-main">Sumakar<span>Handicraft</span>AndPashminaProcess</div>
          <div className="nav-logo-sub">Kathmandu, Nepal · Est. 2000</div>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Pashmina Shawls</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/factory" className="active">Factory</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="btn-login">Login / Register</button>
      </nav>

      <div className="factory-hero">
        <p className="eyebrow">Inside Our Workshop</p>
        <h1 className="page-title">The <em>Factory</em> — How We Make Pashmina</h1>
        <p className="page-subtitle">Every piece passes through the hands of skilled Nepali artisans in our own factory in Kathmandu. Here is the complete journey — from raw Himalayan fiber to finished masterpiece.</p>
      </div>

      <div className="steps-grid">
        {steps.map((s, i) => (
          <div key={i} className="step">
            <div className="step-num-col">
              <div className="step-num">{s.n}</div>
              <div className="step-icon">{s.icon}</div>
            </div>
            <div className="step-content">
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
              <div className="step-detail">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="photo-section">
        <p className="photo-title">Factory Photo Gallery — Photos Coming Soon</p>
        <div className="photo-grid">
          {["Fiber & Spinning", "Loom Weaving", "Quality Finishing"].map((label) => (
            <div key={label} className="photo-placeholder">
              <div className="photo-icon">📷</div>
              <div className="photo-label">{label}</div>
              <div className="photo-sub">Photos coming soon</div>
            </div>
          ))}
        </div>
      </div>

      <footer>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved. · Made with love in Kathmandu, Nepal 🇳🇵</footer>
    </main>
  );
}
