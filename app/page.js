import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#FFFDF9", color: "#2A1A0E" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --cream: #F7F3EE;
          --warm-brown: #8B5E3C;
          --dark-brown: #3D2314;
          --gold: #C49A3C;
          --text: #2A1A0E;
          --muted: #7A6555;
          --white: #FFFDF9;
          --border: rgba(139,94,60,0.15);
        }
        nav {
          position: sticky; top: 0; z-index: 100;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2.5rem; height: 78px;
        }
        .nav-logo-main { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--dark-brown); }
        .nav-logo-main span { color: var(--gold); }
        .nav-logo-sub { font-size: 0.58rem; letter-spacing: 0.22em; color: var(--muted); text-transform: uppercase; font-weight: 500; }
        .nav-links { display: flex; gap: 1.8rem; list-style: none; }
        .nav-links a { font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); text-decoration: none; font-weight: 500; }
        .nav-links a:hover { color: var(--warm-brown); }
        .btn-login { font-size: 0.75rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.5rem 1.1rem; border: 1px solid var(--warm-brown); color: var(--warm-brown); background: transparent; cursor: pointer; font-family: 'Jost', sans-serif; font-weight: 500; }
        .btn-login:hover { background: var(--warm-brown); color: var(--white); }
        .hero { min-height: 88vh; background: var(--cream); display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 0 2.5rem; }
        .hero-eyebrow { font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); font-weight: 500; margin-bottom: 1rem; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: 3.4rem; line-height: 1.1; color: var(--dark-brown); margin-bottom: 1.4rem; }
        .hero-title em { font-style: italic; color: var(--warm-brown); }
        .hero-desc { font-size: 0.95rem; color: var(--muted); line-height: 1.85; margin-bottom: 2.2rem; font-weight: 300; max-width: 400px; }
        .btn-primary { background: var(--dark-brown); color: var(--white); padding: 0.85rem 2rem; font-family: 'Jost', sans-serif; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; border: none; cursor: pointer; font-weight: 500; text-decoration: none; display: inline-block; }
        .btn-primary:hover { background: var(--warm-brown); }
        .hero-img-frame { width: 360px; height: 460px; background: linear-gradient(135deg, #D4B896 0%, #B8956F 40%, #8B6845 100%); position: relative; display: flex; align-items: center; justify-content: center; margin: 0 auto; }
        .hero-badge { position: absolute; bottom: 2rem; left: -2rem; background: var(--white); padding: 1rem 1.2rem; border-left: 3px solid var(--gold); }
        .hero-badge-num { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--dark-brown); line-height: 1; }
        .hero-badge-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 0.25rem; }
        .marquee-bar { background: var(--dark-brown); padding: 0.75rem 0; overflow: hidden; white-space: nowrap; }
        .marquee-inner { display: inline-block; animation: marquee 22s linear infinite; }
        .marquee-inner span { font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin: 0 1.8rem; font-weight: 400; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .section { padding: 5rem 2.5rem; }
        .section-header { text-align: center; margin-bottom: 3.5rem; }
        .section-eyebrow { font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.7rem; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: var(--dark-brown); }
        .section-title em { font-style: italic; color: var(--warm-brown); }
        .shawl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .shawl-card { position: relative; overflow: hidden; cursor: pointer; }
        .shawl-img { height: 360px; display: flex; align-items: center; justify-content: center; transition: transform 0.5s ease; }
        .shawl-card:hover .shawl-img { transform: scale(1.05); }
        .s1 { background: linear-gradient(145deg, #E8D5C0, #C4A882, #9A7455); }
        .s2 { background: linear-gradient(145deg, #D4E8D0, #8BBF86, #557A52); }
        .s3 { background: linear-gradient(145deg, #D0D4E8, #8B96BF, #4A5580); }
        .s4 { background: linear-gradient(145deg, #E8D0D4, #BF8B92, #8B4A52); }
        .s5 { background: linear-gradient(145deg, #E8E4D0, #BFB98B, #8B824A); }
        .s6 { background: linear-gradient(145deg, #D0E8E4, #8BBFB9, #4A8B82); }
        .shawl-base-info { padding: 1rem 1.2rem; background: var(--white); border-top: 2px solid var(--cream); }
        .shawl-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; color: var(--dark-brown); }
        .shawl-price { font-size: 0.82rem; color: var(--gold); font-weight: 500; margin-top: 0.2rem; }
        .shawl-tag { position: absolute; top: 1rem; right: 1rem; background: rgba(61,35,20,0.75); color: var(--cream); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.3rem 0.7rem; z-index: 2; }
        .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 3rem; }
        .process-step { padding: 2rem 1rem; text-align: center; }
        .step-num { font-family: 'Playfair Display', serif; font-size: 3rem; color: rgba(139,94,60,0.15); line-height: 1; }
        .step-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--dark-brown); margin: 0.8rem 0 0.5rem; }
        .step-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.7; font-weight: 300; }
        .about-strip { display: grid; grid-template-columns: 1fr 1fr; min-height: 480px; }
        .about-visual { background: linear-gradient(135deg, #8B5E3C, #3D2314); display: flex; align-items: center; justify-content: center; padding: 3rem; }
        .about-quote { font-family: 'Playfair Display', serif; font-size: 1.7rem; font-style: italic; color: rgba(255,255,255,0.88); text-align: center; line-height: 1.5; }
        .about-content { background: var(--cream); display: flex; flex-direction: column; justify-content: center; padding: 4rem 3.5rem; }
        .about-content p { color: var(--muted); line-height: 1.9; font-weight: 300; margin-bottom: 1rem; font-size: 0.92rem; }
        .stats-row { display: flex; gap: 2.5rem; margin-top: 2rem; }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 2rem; color: var(--dark-brown); }
        .stat-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-top: 0.1rem; }
        .testimonials { background: #1A0D05; padding: 5rem 2.5rem; }
        .t-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; margin-top: 3rem; }
        .t-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 1.8rem; }
        .t-stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 1rem; }
        .t-text { font-size: 0.88rem; color: rgba(255,255,255,0.75); line-height: 1.85; font-style: italic; font-family: 'Playfair Display', serif; margin-bottom: 1.5rem; }
        .t-author { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .contact-section { padding: 5rem 2.5rem; background: var(--cream); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 3rem; }
        .contact-detail { display: flex; gap: 0.8rem; margin-bottom: 0.9rem; }
        .contact-label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); min-width: 58px; padding-top: 2px; }
        .contact-val { font-size: 0.88rem; color: var(--dark-brown); }
        .contact-form { display: flex; flex-direction: column; gap: 0.9rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
        .form-input, .form-textarea { width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--border); background: var(--white); font-family: 'Jost', sans-serif; font-size: 0.88rem; color: var(--text); outline: none; }
        .form-input:focus, .form-textarea:focus { border-color: var(--warm-brown); }
        .form-textarea { height: 130px; resize: none; }
        footer { background: #0F0804; color: rgba(255,255,255,0.5); padding: 3rem 2.5rem; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; margin-bottom: 2rem; }
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 1rem; color: #F7F3EE; margin-bottom: 0.3rem; }
        .footer-logo-sub { font-size: 0.55rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
        .footer-tagline { font-size: 0.78rem; color: rgba(255,255,255,0.35); line-height: 1.75; margin-top: 0.8rem; max-width: 240px; }
        .footer-col h4 { font-size: 0.62rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .footer-col ul { list-style: none; }
        .footer-col li { font-size: 0.8rem; margin-bottom: 0.55rem; color: rgba(255,255,255,0.45); cursor: pointer; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding-top: 1.5rem; display: flex; justify-content: space-between; font-size: 0.7rem; color: rgba(255,255,255,0.25); }
      `}</style>

      {/* NAV */}
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
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
        </ul>
        <button className="btn-login">Login / Register</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-eyebrow">Handcrafted in Lalitpur, Nepal</p>
          <h1 className="hero-title">Pure Pashmina,<br /><em>Woven with Heritage</em></h1>
          <p className="hero-desc">SumakarHandicraftAndPashminaProcess brings you the finest cashmere and pashmina — handwoven by master artisans in our own factory in Lalitpur, Nepal.</p>
          <a href="#" className="btn-primary">Explore Pashmina Shawls</a>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", padding: "3rem" }}>
          <div className="hero-img-frame">
            <span style={{ fontSize: "5rem", opacity: 0.3 }}>🧣</span>
          </div>
          <div className="hero-badge">
            <div className="hero-badge-num">25+</div>
            <div className="hero-badge-label">Years of Craft</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-inner">
          <span>Pure Pashmina Shawls</span><span>·</span>
          <span>Handwoven in Nepal</span><span>·</span>
          <span>100% Cashmere</span><span>·</span>
          <span>Ethical & Sustainable</span><span>·</span>
          <span>Free Worldwide Shipping</span><span>·</span>
          <span>Custom Orders Welcome</span><span>·</span>
          <span>Pure Pashmina Shawls</span><span>·</span>
          <span>Handwoven in Nepal</span><span>·</span>
          <span>100% Cashmere</span><span>·</span>
          <span>Ethical & Sustainable</span><span>·</span>
          <span>Free Worldwide Shipping</span><span>·</span>
          <span>Custom Orders Welcome</span><span>·</span>
        </div>
      </div>

      {/* PASHMINA SHAWLS */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="section-header">
          <p className="section-eyebrow">Our Signature Collection</p>
          <h2 className="section-title">Pashmina <em>Shawls</em></h2>
        </div>
        <div className="shawl-grid">
          {[
            { cls: "s1", name: "Jacquard Border Shawl", price: "From $80", tag: "Bestseller" },
            { cls: "s2", name: "Fine Light Weight Shawl", price: "From $140", tag: "New" },
            { cls: "s3", name: "Meditation Shawl", price: "From $300", tag: "Premium" },
            { cls: "s4", name: "Reversible Shawl", price: "From $175", tag: null },
            { cls: "s5", name: "Cable Knit Shawl", price: "From $280", tag: "Custom" },
            { cls: "s6", name: "2 PLY Classic Shawl", price: "From $130", tag: null },
          ].map((s, i) => (
            <div key={i} className="shawl-card">
              <div className={`shawl-img ${s.cls}`}>
                <span style={{ fontSize: "4rem", opacity: 0.3 }}>🧣</span>
              </div>
              {s.tag && <div className="shawl-tag">{s.tag}</div>}
              <div className="shawl-base-info">
                <div className="shawl-name">{s.name}</div>
                <div className="shawl-price">{s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">From Fiber to Fashion</p>
          <h2 className="section-title">The Pashmina <em>Process</em></h2>
        </div>
        <div className="process-steps">
          {[
            { n: "01", title: "Raw Fiber Collection", desc: "Pure cashmere combed from Chyangra goats high in the Himalayas of Nepal and Tibet." },
            { n: "02", title: "Hand Spinning", desc: "Skilled artisans hand-spin each thread on traditional spindles — a centuries-old tradition." },
            { n: "03", title: "Loom Weaving", desc: "Each piece is woven on traditional wooden looms, creating intricate patterns unique to Sumakara." },
            { n: "04", title: "Quality Finishing", desc: "Final washing, softening, and inspection ensure every product meets our exacting standards." },
          ].map((s, i) => (
            <div key={i} className="process-step">
              <div className="step-num">{s.n}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <div className="about-strip">
        <div className="about-visual">
          <div className="about-quote">"Pashmina is not just a product — it is a work of art, woven with generations of love."</div>
        </div>
        <div className="about-content">
          <p className="section-eyebrow" style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.7rem" }}>Our Story</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.9rem", color: "var(--dark-brown)", marginBottom: "1.4rem" }}>A Family Legacy of <em style={{ fontStyle: "italic", color: "var(--warm-brown)" }}>Craftsmanship</em></h2>
          <p>SumakarHandicraftAndPashminaProcess was founded in Kathmandu with one mission — to bring the finest Nepali pashmina to the world, without compromise on quality or ethics.</p>
          <p>Every piece is handcrafted by skilled artisans in our own factory using 100% pure cashmere sourced directly from Himalayan herders.</p>
          <div className="stats-row">
            <div><div className="stat-num">25+</div><div className="stat-label">Years of Heritage</div></div>
            <div><div className="stat-num">50+</div><div className="stat-label">Countries Served</div></div>
            <div><div className="stat-num">300+</div><div className="stat-label">Color Options</div></div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-header">
          <p className="section-eyebrow" style={{ color: "var(--gold)" }}>What Customers Say</p>
          <h2 className="section-title" style={{ color: "#F7F3EE" }}>Loved <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Worldwide</em></h2>
        </div>
        <div className="t-grid">
          {[
            { text: "The finest pashmina I have ever owned. The softness is incomparable and the weaving is breathtakingly intricate.", author: "Sarah M. — New York, USA" },
            { text: "I ordered three shawls as gifts and every recipient was amazed. Fast shipping, beautiful packaging, perfect quality.", author: "Priya K. — London, UK" },
            { text: "I have been ordering for five years. Their cashmere shawls are heirlooms — they only get softer with time.", author: "Henri L. — Paris, France" },
          ].map((t, i) => (
            <div key={i} className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-author">{t.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <div className="section-header">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">Contact <em>Us</em></h2>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ color: "var(--muted)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.92rem" }}>We welcome retail customers, wholesale buyers, and custom orders. Send us a message and we will get back to you within 24 hours.</p>
            <div className="contact-detail"><span className="contact-label">Address</span><span className="contact-val">Lamatar, Lalitpur, Nepal</span></div>
            <div className="contact-detail"><span className="contact-label">Phone</span><span className="contact-val">+977-9851158835</span></div>
            <div className="contact-detail"><span className="contact-label">Email</span><span className="contact-val">sumakar2025@gmail.com</span></div>
            <div className="contact-detail"><span className="contact-label">Hours</span><span className="contact-val">Sun–Fri, 9:00 AM – 6:00 PM NPT</span></div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <input className="form-input" type="text" placeholder="Your Name" />
              <input className="form-input" type="email" placeholder="Your Email" />
            </div>
            <input className="form-input" type="text" placeholder="Subject" />
            <textarea className="form-textarea" placeholder="Your message..."></textarea>
            <button className="btn-primary" style={{ alignSelf: "flex-start" }}>Send Message</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">SumakarHandicraftAndPashminaProcess</div>
            <div className="footer-logo-sub">Lalitpur, Nepal</div>
            <div className="footer-tagline">Premium Nepali handicrafts and pashmina, handwoven with generations of love in our own factory in Kathmandu.</div>
          </div>
          <div className="footer-col"><h4>Shop</h4><ul><li>Pashmina Shawls</li><li>Sweaters</li><li>Scarves</li><li>Ponchos</li><li>Blankets</li></ul></div>
          <div className="footer-col"><h4>Company</h4><ul><li>About Us</li><li>Our Factory</li><li>Testimonials</li><li>Color Charts</li><li>Bank Details</li></ul></div>
          <div className="footer-col"><h4>Support</h4><ul><li>Contact Us</li><li>Shipping Info</li><li>Returns</li><li>My Account</li><li>Wholesale</li></ul></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved.</span>
          <span>Made with love in Lalitpur, Nepal 🇳🇵</span>
        </div>
      </footer>
    </main>
  );
}