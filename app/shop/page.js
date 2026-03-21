export default function Shop() {
  const products = [
    { name: "Jacquard Border Shawl", category: "Shawl", price: "$80", tag: "Bestseller", bg: "linear-gradient(145deg, #E8D5C0, #C4A882)" },
    { name: "Fine Light Weight Shawl", category: "Shawl", price: "$140", tag: "New", bg: "linear-gradient(145deg, #D4E8D0, #8BBF86)" },
    { name: "Meditation Shawl", category: "Shawl", price: "$300", tag: "Premium", bg: "linear-gradient(145deg, #D0D4E8, #8B96BF)" },
    { name: "Reversible Shawl", category: "Shawl", price: "$175", tag: null, bg: "linear-gradient(145deg, #E8D0D4, #BF8B92)" },
    { name: "Cable Knit Shawl", category: "Shawl", price: "$280", tag: "Custom", bg: "linear-gradient(145deg, #E8E4D0, #BFB98B)" },
    { name: "2 PLY Classic Shawl", category: "Shawl", price: "$130", tag: null, bg: "linear-gradient(145deg, #D0E8E4, #8BBFB9)" },
    { name: "HighNeck Sweater", category: "Sweater", price: "$150", tag: null, bg: "linear-gradient(145deg, #E8D5C0, #9A7455)" },
    { name: "Cable Knit Sweater", category: "Sweater", price: "$280", tag: "New", bg: "linear-gradient(145deg, #C8DCE8, #7AAEC4)" },
    { name: "V Neck Sweater", category: "Sweater", price: "$110", tag: null, bg: "linear-gradient(145deg, #D4E8D0, #557A52)" },
    { name: "Fringe Poncho", category: "Poncho", price: "$185", tag: "Bestseller", bg: "linear-gradient(145deg, #E8C0CC, #C47A8A)" },
    { name: "Mens Check Scarf", category: "Scarf", price: "$53", tag: null, bg: "linear-gradient(145deg, #E8E4D0, #8B824A)" },
    { name: "Cashmere Blanket", category: "Blanket", price: "$600", tag: "Luxury", bg: "linear-gradient(145deg, #D0E8E4, #4A8B82)" },
  ];

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#FFFDF9", color: "#2A1A0E" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
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
        .filter-bar { display:flex; gap:0.8rem; justify-content:center; padding:2rem 2.5rem; flex-wrap:wrap; }
        .filter-btn { font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; padding:0.5rem 1.2rem; border:1px solid var(--border); background:transparent; color:var(--muted); cursor:pointer; font-family:'Jost',sans-serif; font-weight:500; transition:all 0.2s; }
        .filter-btn:hover, .filter-btn.active { background:var(--dark-brown); color:#FFFDF9; border-color:var(--dark-brown); }
        .product-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; padding:0 2.5rem 5rem; }
        .product-card { background:var(--cream); cursor:pointer; transition:transform 0.2s; }
        .product-card:hover { transform:translateY(-4px); }
        .product-img { aspect-ratio:3/4; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
        .product-badge { position:absolute; top:0.8rem; left:0.8rem; background:var(--dark-brown); color:#FFFDF9; font-size:0.6rem; letter-spacing:0.15em; text-transform:uppercase; padding:0.25rem 0.6rem; }
        .product-info { padding:1rem 1.1rem; background:#FFFDF9; border-top:1px solid var(--border); }
        .product-cat { font-size:0.62rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:0.3rem; }
        .product-name { font-family:'Playfair Display',serif; font-size:0.92rem; color:var(--dark-brown); margin-bottom:0.6rem; }
        .product-footer { display:flex; justify-content:space-between; align-items:center; }
        .product-price { font-size:0.88rem; font-weight:500; color:var(--warm-brown); }
        .product-btn { font-size:0.65rem; letter-spacing:0.1em; text-transform:uppercase; background:none; border:1px solid var(--warm-brown); color:var(--warm-brown); padding:0.35rem 0.7rem; cursor:pointer; font-family:'Jost',sans-serif; font-weight:500; }
        .product-btn:hover { background:var(--warm-brown); color:#FFFDF9; }
        footer { background:#0F0804; color:rgba(255,255,255,0.5); padding:2rem 2.5rem; text-align:center; font-size:0.75rem; }
      `}</style>

      <nav>
        <div>
          <div className="nav-logo-main">Sumakar<span>Handicraft</span>AndPashminaProcess</div>
          <div className="nav-logo-sub">Kathmandu, Nepal · Est. 2000</div>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop" className="active">Pashmina Shawls</a></li>
          <li><a href="/shop" className="active">Shop</a></li>
          <li><a href="/factory">Factory</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="btn-login">Login / Register</button>
      </nav>

      <div className="page-hero">
        <p className="eyebrow">Handwoven in Nepal</p>
        <h1 className="page-title">Our <em>Shop</em></h1>
      </div>

      <div className="filter-bar">
        {["All", "Shawl", "Sweater", "Poncho", "Scarf", "Blanket"].map((f) => (
          <button key={f} className={`filter-btn ${f === "All" ? "active" : ""}`}>{f}</button>
        ))}
      </div>

      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <div className="product-img" style={{ background: p.bg }}>
              {p.tag && <div className="product-badge">{p.tag}</div>}
              <span style={{ fontSize: "3.5rem", opacity: 0.3 }}>🧣</span>
            </div>
            <div className="product-info">
              <div className="product-cat">{p.category}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-footer">
                <span className="product-price">{p.price}</span>
                <button className="product-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved. · Made with love in Kathmandu, Nepal 🇳🇵</footer>
    </main>
  );
}
