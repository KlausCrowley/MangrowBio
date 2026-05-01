"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        window.location.href = "/admin/dashboard";
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-teal-500 rounded-xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="4" r="2.5" fill="#fff" />
              <circle cx="4" cy="14" r="2.5" fill="#fff" />
              <circle cx="16" cy="14" r="2.5" fill="#fff" />
              <line x1="10" y1="6.5" x2="4" y2="11.5" stroke="#0B3C5D" strokeWidth="1.5" />
              <line x1="10" y1="6.5" x2="16" y2="11.5" stroke="#0B3C5D" strokeWidth="1.5" />
              <line x1="4" y1="14" x2="16" y2="14" stroke="#0B3C5D" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="text-2xl font-serif text-white tracking-wide">Mangrow Bio</h1>
          <p className="text-slate-400 text-sm mt-1 uppercase tracking-widest font-mono">Secure Access</p>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm mb-6 text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
              placeholder="admin@mangrowbio.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg px-4 py-3 transition-colors mt-2 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
