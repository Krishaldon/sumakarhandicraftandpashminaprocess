'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleAuth = async () => {
    setLoading(true)
    setMessage('')
    setError('')

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
      } else {
        setMessage('Login successful! Redirecting...')
        setTimeout(() => window.location.href = '/', 1500)
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } }
      })
      if (error) {
        setError(error.message)
      } else {
        setMessage('Account created! Please check your email to verify.')
      }
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
  }

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#F7F3EE", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --cream:#F7F3EE; --warm-brown:#8B5E3C; --dark-brown:#3D2314; --gold:#C49A3C; --muted:#7A6555; --white:#FFFDF9; --border:rgba(139,94,60,0.15); }
        nav { background: var(--white); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 2.5rem; height: 78px; }
        .nav-logo-main { font-family:'Playfair Display',serif; font-size:1.1rem; color:var(--dark-brown); }
        .nav-logo-main span { color:var(--gold); }
        .nav-logo-sub { font-size:0.58rem; letter-spacing:0.22em; color:var(--muted); text-transform:uppercase; font-weight:500; }
        .auth-container { flex: 1; display: flex; align-items: center; justify-content: center; padding: 3rem 1rem; }
        .auth-card { background: var(--white); padding: 3rem; width: 100%; max-width: 420px; border: 1px solid var(--border); }
        .auth-title { font-family:'Playfair Display',serif; font-size: 2rem; color: var(--dark-brown); margin-bottom: 0.5rem; text-align: center; }
        .auth-subtitle { font-size: 0.85rem; color: var(--muted); text-align: center; margin-bottom: 2rem; font-weight: 300; }
        .tabs { display: flex; margin-bottom: 2rem; border-bottom: 1px solid var(--border); }
        .tab { flex: 1; padding: 0.75rem; text-align: center; font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; font-family:'Jost',sans-serif; font-weight: 500; color: var(--muted); background: none; border: none; border-bottom: 2px solid transparent; transition: all 0.2s; }
        .tab.active { color: var(--dark-brown); border-bottom-color: var(--gold); }
        .form-group { margin-bottom: 1rem; }
        .form-label { display: block; font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; font-weight: 500; }
        .form-input { width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border); background: var(--cream); font-family:'Jost',sans-serif; font-size: 0.9rem; color: var(--dark-brown); outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: var(--warm-brown); }
        .btn-primary { width: 100%; background: var(--dark-brown); color: #FFFDF9; padding: 0.9rem; font-family:'Jost',sans-serif; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; border: none; cursor: pointer; font-weight: 500; margin-top: 0.5rem; transition: background 0.2s; }
        .btn-primary:hover { background: var(--warm-brown); }
        .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
        .divider { display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; }
        .divider-line { flex: 1; height: 1px; background: var(--border); }
        .divider-text { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
        .btn-google { width: 100%; background: transparent; border: 1px solid var(--border); padding: 0.85rem; font-family:'Jost',sans-serif; font-size: 0.82rem; color: var(--dark-brown); cursor: pointer; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 0.8rem; transition: border-color 0.2s; }
        .btn-google:hover { border-color: var(--warm-brown); }
        .google-icon { width: 18px; height: 18px; }
        .message { padding: 0.85rem 1rem; margin-top: 1rem; font-size: 0.85rem; text-align: center; }
        .message.success { background: rgba(34,197,94,0.1); color: #166534; border: 1px solid rgba(34,197,94,0.2); }
        .message.error { background: rgba(239,68,68,0.1); color: #991b1b; border: 1px solid rgba(239,68,68,0.2); }
        .back-link { text-align: center; margin-top: 1.5rem; font-size: 0.82rem; color: var(--muted); }
        .back-link a { color: var(--warm-brown); text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
        footer { background: #0F0804; color: rgba(255,255,255,0.4); padding: 1.5rem 2.5rem; text-align: center; font-size: 0.72rem; }
      `}</style>

      <nav>
        <div>
          <div className="nav-logo-main">Sumakar<span>Handicraft</span>AndPashminaProcess</div>
          <div className="nav-logo-sub">Lalitpur, Nepal · Est. 2009</div>
        </div>
        <a href="/" style={{ fontSize: "0.78rem", color: "#7A6555", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Back to Home</a>
      </nav>

      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="auth-subtitle">{isLogin ? 'Sign in to your account' : 'Join SumakarHandicraftAndPashminaProcess'}</p>

          <div className="tabs">
            <button className={`tab ${isLogin ? 'active' : ''}`} onClick={() => { setIsLogin(true); setError(''); setMessage(''); }}>Login</button>
            <button className={`tab ${!isLogin ? 'active' : ''}`} onClick={() => { setIsLogin(false); setError(''); setMessage(''); }}>Register</button>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="btn-primary" onClick={handleAuth} disabled={loading}>
            {loading ? 'Please wait...' : isLogin ? 'Login' : 'Create Account'}
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          <button className="btn-google" onClick={handleGoogle}>
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {message && <div className="message success">{message}</div>}
          {error && <div className="message error">{error}</div>}

          <div className="back-link">
            <a href="/">← Continue shopping without account</a>
          </div>
        </div>
      </div>

      <footer>© 2026 SumakarHandicraftAndPashminaProcess. All rights reserved.</footer>
    </main>
  )
}
