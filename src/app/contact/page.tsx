"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service_required: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error("Failed to submit enquiry. Please try again.");
      
      setSuccess(true);
      setFormData({ name: "", company: "", email: "", service_required: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="p-contact" className="page-section active">
      <div className="page-hero">
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ marginBottom: "1rem" }}>Contact</div>
          <h1 style={{ color: "var(--navy)", maxWidth: "680px", marginBottom: "1rem" }}>Let&apos;s Start a Conversation</h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "560px", fontSize: "1.05rem" }}>Initial consultations are complimentary. We&apos;ll assess your needs and propose a structured engagement within 5 business days.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ color: "var(--navy)", marginBottom: "1rem" }}>Get in Touch</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Our team is available Monday–Friday, 9AM–6PM IST and 9AM–5PM EST.</p>
              <div className="cdetail">
                <div className="cdetail-icon"><svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                <div><h4>Email</h4><p>contact@mangrowbio.com</p></div>
              </div>
              <div className="cdetail">
                <div className="cdetail-icon"><svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
                <div><h4>Phone</h4><p>+91 (044) 4000-0000</p></div>
              </div>
              <div className="cdetail">
                <div className="cdetail-icon"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
                <div><h4>Location</h4><p>Chennai, India · Serving clients globally</p></div>
              </div>
              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--teal-pale)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(0,166,166,0.15)" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "0.5rem" }}>Free Resource</div>
                <h4 style={{ color: "var(--navy)", marginBottom: "0.4rem" }}>GMP Audit Checklist</h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Complete the form and request our 47-point GMP audit readiness checklist.</p>
              </div>
            </div>
            <form className="cform" onSubmit={handleSubmit}>
              <h3 style={{ color: "var(--navy)", marginBottom: "1.75rem" }}>Book a Consultation</h3>
              {success && <div style={{ padding: "1rem", background: "var(--teal-pale)", color: "var(--navy)", borderRadius: "8px", marginBottom: "1rem", border: "1px solid var(--teal)" }}>Thank you! Your enquiry has been sent successfully. We will be in touch shortly.</div>}
              {error && <div style={{ padding: "1rem", background: "#FFEBEB", color: "#B30000", borderRadius: "8px", marginBottom: "1rem", border: "1px solid #FFCCCC" }}>{error}</div>}
              
              <div className="frow">
                <div className="fg">
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Dr. Jane Smith" required />
                </div>
                <div className="fg">
                  <label>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="NovaBiotech AG" />
                </div>
              </div>
              <div className="fg">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" required />
              </div>
              <div className="fg">
                <label>Service Required</label>
                <select name="service_required" value={formData.service_required} onChange={handleChange} required>
                  <option value="">Select a service area</option>
                  <option value="R&D & CMC Consulting">R&amp;D &amp; CMC Consulting</option>
                  <option value="GMP & Regulatory Compliance">GMP &amp; Regulatory Compliance</option>
                  <option value="CDMO Selection & Management">CDMO Selection &amp; Management</option>
                  <option value="Manufacturing Scale-Up">Manufacturing Scale-Up</option>
                  <option value="Infrastructure Planning">Infrastructure Planning</option>
                  <option value="Market Strategy & Entry">Market Strategy &amp; Entry</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>
              <div className="fg">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project, timeline, and key challenges. We'll respond within 1 business day." required></textarea>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <input type="checkbox" id="ckl" style={{ width: "auto", height: "auto", flexShrink: 0 }} />
                <label htmlFor="ckl" style={{ fontSize: "0.81rem", color: "var(--text-muted)", cursor: "pointer", margin: 0, fontWeight: 400 }}>Also send me the free GMP Audit Readiness Checklist</label>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Sending..." : "Submit Enquiry →"}
              </button>
              <p style={{ fontSize: "0.74rem", color: "var(--text-light)", marginTop: "1rem", textAlign: "center" }}>We typically respond within 1 business day. Your information is never shared.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
