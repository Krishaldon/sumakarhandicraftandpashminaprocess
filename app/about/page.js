export default function About() {
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
        .hero { background:var(--cream); display:grid; grid-template-columns:1fr 1fr; min-height:500px; align-items:center; padding:0 2.5rem; }
        .eyebrow { font-size:0.68rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:0.7rem; }
        .hero-title { font-family:'Playfair Display',serif; font-size:2.8rem; color:var(--dark-brown); line-height:1.15; margin-bottom:1.5rem; }
        .hero-title em { font-style:italic; color:var(--warm-brown); }
        .hero-desc { font-size:0.95rem; color:var(--muted); line-height:1.9; font-weight:300; }
        .hero-img { background:linear-gradient(135deg, #D4B896, #8B6845); display:flex; align-items:center; justify-content:center; min-height:500px; font-size:8rem; opacity:0.4; }
        .stats-section { padding:4rem 2.5rem; background:var(--dark-brown); display:grid; grid-template-columns:repeat(4,1fr); gap:2rem; text-align:center; }
        .stat-num { font-family:'Playfair Display',serif; font-size:2.5rem; color:var(--gold); }
        .stat-label { font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(247,243,238,0.6); margin-top:0.5rem; }
        .values-section { padding:5rem 2.5rem; }
        .section-header { text-align:center; margin-bottom:3.5rem; }
        .section-title { font-family:'Playfair Display',serif; font-size:2.5rem; color:var(--dark-brown); }
        .section-title em { font-style:italic; color:var(--warm-brown); }
        .values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
        .value-card { padding:2.5rem; background:var(--cream); text-align:center; }
        .value-icon { font-size:2.5rem; margin-bottom:1rem; opacity:0.7; }
        .value-title { font-family:'Playfair Display',serif; font-size:1.2rem; color:var(--dark-brown); margin-bottom:0.8rem; }
        .value-desc { font-size:0.88rem; color:var(--muted); line-height:1.8; font-weight:300; }
        .team-section { padding:5rem 2.5rem; background:var(--cream); }
        .team-content { max-width:700px; margin:0 auto; text-align:center; }
        .team-content p { font-size:0.95rem; color:var(--muted); line-height:1.9; font-weight:300; margin-bottom:1rem; }
        footer { background:#0F0804; color:rgba(255,255,255,0.5); padding:2rem 2.5rem; text-align:center; font-size:0.75rem; }
      `}</style>

      <nav>
        <div>
          <div className="nav-logo-main">Sumakar<span>Handicraft</span>AndPashminaProcess</div>
          <div className="nav-logo-sub">Lalitpur, Nepal · Est. 2000</div>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Pashmina Shawls</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/factory">Factory</a></li>
          <li><a href="/about" className="active">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="btn-login">Login / Register</button>
      </nav>

      <div className="hero">
        <div>
          <p className="eyebrow">Our Story</p>
          <h1 className="hero-title">A Family Legacy of<br /><em>Craftsmanship</em></h1>
          <p className="hero-desc">SumakarHandicraftAndPashminaProcess was founded in Kathmandu with one mission — to bring the finest Nepali pashmina and handicrafts to the world, without compromise on quality or ethics. Every piece is handcrafted by skilled artisans in our own factory using 100% pure cashmere sourced directly from Himalayan herders.</p>
        </div>
        <div className="hero-img">🧣</div>
      </div>

      <div className="stats-section">
        {[["25+", "Years of Heritage"], ["50+", "Countries Served"], ["300+", "Color Options"], ["100%", "Pure Cashmere"]].map(([n, l]) => (
          <div key={l}>
            <div className="stat-num">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

      <section className="values-section">
        <div className="section-header">
          <p className="eyebrow">What We Stand For</p>
          <h2 className="section-title">Our <em>Values</em></h2>
        </div>
        <div className="values-grid">
          {[
            { icon: "🌿", title: "Ethical Production", desc: "We work directly with Himalayan herders and pay fair wages to every artisan in our factory. No middlemen, no exploitation." },
            { icon: "✋", title: "100% Handmade", desc: "Every single piece is made entirely by hand — from spinning to weaving to finishing. We will never use machines to cut corners." },
            { icon: "🌍", title: "Sustainable Practices", desc: "We use OEKO-TEX certified dyes, minimize waste, and recycle rejected pieces into new yarn. The earth matters to us." },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <p className="eyebrow">From the Founder</p>
          <h2 className="section-title">A Message from <em>Our Family</em></h2>
        </div>
        <div className="team-content">
          <p>"SumakarHandicraftAndPashminaProcess is a family business built on the belief that true luxury comes from honesty — honest materials, honest labor, and honest relationships with our customers around the world."</p>
          <p>"Since the very first day, we have had one vision: to give people the premium cashmere experience while honoring the Nepali artisans who make it possible. Pashmina is not just a product — it is a work of art."</p>
          <p style={{ fontStyle: "italic", color: "#8B5E3C", marginTop: "1.5rem" }}>— The Sumakara Family, Lalitpur</p>
        </div>
      </section>

      <footer>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved. · Made with love in Lalitpur, Nepal 🇳🇵</footer>
    </main>
  );
}
