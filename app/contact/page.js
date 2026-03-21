export default function Contact() {
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
        .page-hero { background:var(--cream); padding:4rem 2.5rem; text-align:center; }
        .eyebrow { font-size:0.68rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:0.7rem; }
        .page-title { font-family:'Playfair Display',serif; font-size:2.8rem; color:var(--dark-brown); }
        .page-title em { font-style:italic; color:var(--warm-brown); }
        .contact-section { padding:5rem 2.5rem; }
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; }
        .contact-info p { color:var(--muted); font-weight:300; line-height:1.8; margin-bottom:1.5rem; font-size:0.92rem; }
        .contact-detail { display:flex; gap:0.8rem; margin-bottom:0.9rem; align-items:flex-start; }
        .contact-label { font-size:0.65rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); min-width:58px; padding-top:2px; }
        .contact-val { font-size:0.88rem; color:var(--dark-brown); }
        .contact-form { display:flex; flex-direction:column; gap:0.9rem; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; }
        .form-input, .form-textarea { width:100%; padding:0.8rem 1rem; border:1px solid var(--border); background:var(--cream); font-family:'Jost',sans-serif; font-size:0.88rem; color:var(--text); outline:none; }
        .form-input:focus, .form-textarea:focus { border-color:var(--warm-brown); }
        .form-textarea { height:130px; resize:none; }
        .btn-primary { background:var(--dark-brown); color:#FFFDF9; padding:0.85rem 2rem; font-family:'Jost',sans-serif; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; border:none; cursor:pointer; font-weight:500; align-self:flex-start; }
        .btn-primary:hover { background:var(--warm-brown); }
        .map-placeholder { background:var(--cream); border:1px solid var(--border); height:300px; display:flex; align-items:center; justify-content:center; margin-top:3rem; font-family:'Playfair Display',serif; font-style:italic; color:var(--muted); font-size:1.1rem; }
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
          <li><a href="/factory">Factory</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact" className="active">Contact</a></li>
        </ul>
        <button className="btn-login">Login / Register</button>
      </nav>

      <div className="page-hero">
        <p className="eyebrow">We Would Love to Hear From You</p>
        <h1 className="page-title">Contact <em>Us</em></h1>
      </div>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <p>We welcome retail customers, wholesale buyers, and custom orders. Send us a message and we will get back to you within 24 hours.</p>
            <div className="contact-detail"><span className="contact-label">Address</span><span className="contact-val">Lamatar, Lalitpur, Nepal</span></div>
            <div className="contact-detail"><span className="contact-label">Phone</span><span className="contact-val">+977-9851158835</span></div>
            <div className="contact-detail"><span className="contact-label">Email</span><span className="contact-val">sumakar2025@gmail.com</span></div>
            <div className="contact-detail"><span className="contact-label">Hours</span><span className="contact-val">Sun–Fri, 9:00 AM – 6:00 PM NPT</span></div>
            <div className="contact-detail"><span className="contact-label">WhatsApp</span><span className="contact-val">+977-9828951284</span></div>
          </div>
          <div className="contact-form">
            <div className="form-row">
              <input className="form-input" type="text" placeholder="Your Name" />
              <input className="form-input" type="email" placeholder="Your Email" />
            </div>
            <input className="form-input" type="text" placeholder="Subject" />
            <textarea className="form-textarea" placeholder="Your message — custom orders, wholesale inquiries, or questions..."></textarea>
            <button className="btn-primary">Send Message</button>
          </div>
        </div>
        <div className="map-placeholder">📍 Lamatar, Lalitpur, Nepal</div>
      </section>

      <footer>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved. · Made with love in Lalitpur, Nepal 🇳🇵</footer>
    </main>
  );
}
