import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, Eyebrow, contact } from '../components/common/PageShared.jsx';
export default function Contact() {
  const [state, setState] = useState("idle");
  const [errors, setErrors] = useState({});
  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget),
      next = {};
    if (!String(f.get("name") || "").trim())
      next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(f.get("email") || "")))
      next.email = "Enter a valid email address.";
    if (!String(f.get("message") || "").trim())
      next.message = "Please tell us a little about your inquiry.";
    setErrors(next);
    if (Object.keys(next).length) {
      setState("idle");
      return;
    }
    setState("unconfigured");
  }
  return (
    <>
      <PageHero
        eyebrow="CONTACT GANRISE"
        title="Let’s talk about your next project."
        text="Tell us about your ERP consulting or IT staffing needs. Our team will be glad to hear from you."
        compact
      />
      <section className="section wrap contact-layout">
        <aside className="contact-aside">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>We’re ready to listen.</h2>
          <p>
            Share a little about your goals and we’ll help you find the right
            next step.
          </p>
          <div className="contact-detail">
            <span>
              <Mail size={18} />
            </span>
            <div>
              <small>EMAIL</small>
              <a href="mailto:ganriseconsulting@gmail.com">
                ganriseconsulting@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <span>
              <Phone size={18} />
            </span>
            <div>
              <small>PHONE</small>
              <a href="tel:+919849685094">+91 9849685094</a>
            </div>
          </div>
          <div className="contact-detail">
            <span>
              <MapPin size={18} />
            </span>
            <div>
              <small>OFFICE</small>
              <p>
                Plot 8, Poulomi Water Front,
                <br />
                Vaishali Nagar, Madinaguda,
                <br />
                Hyderabad, Telangana, India.
              </p>
            </div>
          </div>
        </aside>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-heading">
            <h2>Send us a message</h2>
            <p>
              Fields marked with <b>*</b> are required.
            </p>
          </div>
          <div className="form-grid">
            <label>
              Full name <b>*</b>
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <small className="field-error">{errors.name}</small>
              )}
            </label>
            <label>
              Email address <b>*</b>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <small className="field-error">{errors.email}</small>
              )}
            </label>
            <label>
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Your phone number"
              />
            </label>
            <label>
              Company name
              <input
                name="company"
                autoComplete="organization"
                placeholder="Your company"
              />
            </label>
            <label className="full-field">
              Service interested in
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>ERP Consulting</option>
                <option>IT Staffing</option>
                <option>Other</option>
              </select>
            </label>
            <label className="full-field">
              Message <b>*</b>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help?"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <small className="field-error">{errors.message}</small>
              )}
            </label>
          </div>
          <button className="button button-blue" type="submit">
            Send inquiry <Send size={16} />
          </button>
          {state === "unconfigured" && (
            <div className="form-notice" role="status">
              <CircleHelp size={17} />
              <span>
                Your message is ready, but this form is not connected to a
                submission service yet. Please email us directly at{" "}
                <a href="mailto:ganriseconsulting@gmail.com">
                  ganriseconsulting@gmail.com
                </a>
                .
              </span>
            </div>
          )}
        </form>
      </section>
    </>
  );
}
