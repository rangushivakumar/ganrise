import { useEffect, useState } from "react";
import { getSeoData, OG_IMAGE } from "../../seo.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Database,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

export const contact = "/contact";
export const paths = {
  home: "/",
  about: "/about",
  services: "/services",
  erp: "/services/erp-consulting",
  staffing: "/services/it-staffing",
  benefits: "/employee-benefits",
  careers: "/careers",
  contact,
};
function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement("meta"); document.head.appendChild(element); }
  Object.entries(attributes).forEach(([key,value]) => element.setAttribute(key,value));
}
function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) { element = document.createElement("link"); element.rel = "canonical"; document.head.appendChild(element); }
  element.href = url;
}
function ScrollAndMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
    const seo = getSeoData(pathname);
    document.title = seo.title;
    upsertMeta('meta[name="description"]',{name:"description",content:seo.description});
    upsertCanonical(seo.canonical);
    upsertMeta('meta[property="og:title"]',{property:"og:title",content:seo.title});
    upsertMeta('meta[property="og:description"]',{property:"og:description",content:seo.description});
    upsertMeta('meta[property="og:image"]',{property:"og:image",content:OG_IMAGE});
    upsertMeta('meta[property="og:url"]',{property:"og:url",content:seo.url});
    upsertMeta('meta[property="og:type"]',{property:"og:type",content:"website"});
    upsertMeta('meta[property="og:site_name"]',{property:"og:site_name",content:"GANRISE Consulting"});
    upsertMeta('meta[name="twitter:card"]',{name:"twitter:card",content:"summary_large_image"});
    upsertMeta('meta[name="twitter:title"]',{name:"twitter:title",content:seo.title});
    upsertMeta('meta[name="twitter:description"]',{name:"twitter:description",content:seo.description});
    upsertMeta('meta[name="twitter:image"]',{name:"twitter:image",content:OG_IMAGE});
    let schema = document.getElementById("ganrise-jsonld");
    if (!schema) { schema = document.createElement("script"); schema.id="ganrise-jsonld"; schema.type="application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({"@context":"https://schema.org","@graph":seo.graph});
  },[pathname]);
  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [loc.pathname]);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link to="/" className="brand" aria-label="GANRISE Consulting home">
          <img className="client-brand-logo" src="/images/ganrise-transparent-logo.png" alt="GANRISE Consulting logo" />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={`main-nav ${open ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`nav-drop-button ${loc.pathname.startsWith("/services") ? "active" : ""}`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="dropdown-panel">
                <Link to="/services">
                  All Services <ArrowRight size={15} />
                </Link>
                <Link to={paths.erp}>
                  ERP Consulting <ArrowRight size={15} />
                </Link>
                <Link to={paths.staffing}>
                  IT Staffing <ArrowRight size={15} />
                </Link>
              </div>
            )}
          </div>
          <NavLink to={paths.benefits}>Employee Benefits</NavLink>
          <NavLink to={paths.careers}>Careers</NavLink>
          <NavLink className="nav-contact" to={contact}>
            Contact Us <ArrowUpRight size={15} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light">
            <img className="client-brand-logo" src="/images/ganrise-transparent-logo.png" alt="GANRISE Consulting logo" />
          </Link>
          <p>
            Technology expertise and talent solutions to help businesses move
            forward.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Our services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/employee-benefits">Employee benefits</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link to={paths.erp}>ERP consulting</Link>
          <Link to={paths.staffing}>IT staffing</Link>
          <Link to={contact}>Contact our team</Link>
        </div>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <a href="mailto:ganriseconsulting@gmail.com">
            <Mail size={15} />
            ganriseconsulting@gmail.com
          </a>
          <a href="tel:+919849685094">
            <Phone size={15} />
            +91 9849685094
          </a>
          <span>
            <MapPin size={15} />
            Plot 8, Poulomi Water Front, Vaishali Nagar, Madinaguda, Hyderabad, Telangana, India
          </span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} GANRISE Consulting. All rights reserved.
        </span>
        <span>Thoughtful technology. Meaningful progress.</span>
      </div>
    </footer>
  );
}

export function Layout({ children }) {
  return (
    <>
      <ScrollAndMeta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function PageHero({ eyebrow, title, text, compact = false, children }) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""} ${eyebrow === "ABOUT GANRISE" ? "about-hero" : eyebrow === "CAREERS AT GANRISE" ? "careers-hero" : eyebrow === "OUR SERVICES" ? "services-hero" : eyebrow === "ERP CONSULTING" ? "erp-hero" : eyebrow === "IT STAFFING" ? "staffing-hero" : eyebrow === "EMPLOYEE BENEFITS" ? "benefits-hero" : eyebrow === "CONTACT GANRISE" ? "contact-hero" : ""}`}>
      <div className="wrap page-hero-inner">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          {eyebrow === "CAREERS AT GANRISE" && <a className="button button-blue" href="#opportunities">Explore opportunities <ArrowRight size={17}/></a>}
          {children}
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-a" />
          <span className="orbit orbit-b" />
          <span className="orbit-dot" />
          <span className="orbit-core">
            <Layers3 size={29} />
          </span>
        </div>
      </div>
    </section>
  );
}
export function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="wrap banner-inner">
        <div>
          <Eyebrow>LET’S TALK</Eyebrow>
          <h2>Let’s build something great together.</h2>
          <p>
            Connect with our team to discuss your IT staffing and ERP consulting
            requirements.
          </p>
        </div>
        <Link className="button button-white" to={contact}>
          Contact us <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
export const offerings = [
  {
    icon: Database,
    n: "01",
    title: "ERP Consulting",
    body: "Expert SAP implementation, upgrades, and data warehousing solutions to streamline your enterprise operations.",
    link: paths.erp,
    label: "Explore ERP consulting",
  },
  {
    icon: Users,
    n: "02",
    title: "IT Staffing",
    body: "Connecting you with top-tier talent for contingent hiring and offshore staffing needs.",
    link: paths.staffing,
    label: "Explore IT staffing",
  },
];
export function ServiceCards() {
  return (
    <div className="service-grid">
      {offerings.map(({ icon: Icon, n, title, body, link, label }) => (
        <article className="service-card" key={title}>
          <div className="card-top">
            <span className="icon-box">
              <Icon size={23} />
            </span>
            <span className="card-number">{n}</span>
          </div>
          <h3>{title}</h3>
          <p>{body}</p>
          <Link to={link} className="text-link">
            {label}
            <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}






export const erpAreas = [
  [
    "SAP Implementation",
    "Support for SAP implementation initiatives, from planning and configuration through deployment and adoption.",
  ],
  [
    "SAP Upgrades and Migration",
    "Guidance for SAP upgrades and migration projects, with attention to business continuity and system requirements.",
  ],
  [
    "Data Warehousing Solutions",
    "Data warehousing capabilities that help bring enterprise information together for reporting and analysis.",
  ],
  [
    "ERP Optimization",
    "Review and refinement of ERP environments to better support changing operational needs.",
  ],
  [
    "Business Process Consulting",
    "Collaborative evaluation of business processes to identify opportunities for more effective ERP use.",
  ],
];
export function CapabilityList({ items }) {
  return (
    <div className="capability-list">
      {items.map(([title, body], i) => (
        <article key={title} className="capability-row">
          <span className="cap-index">0{i + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <ArrowUpRight size={17} />
        </article>
      ))}
    </div>
  );
}

export const staffingAreas = [
  [
    "Contingent Hiring",
    "Flexible sourcing and placement support for temporary and contract technology roles.",
  ],
  [
    "Offshore Staffing",
    "Offshore staffing options to help extend delivery capacity across your technology teams.",
  ],
  [
    "IT Recruitment",
    "Recruitment support for technology positions, aligned to your role requirements and team context.",
  ],
  [
    "Talent Acquisition",
    "A structured approach to identifying and engaging professionals for your organization.",
  ],
  [
    "Flexible Staffing Solutions",
    "Engagement options designed to respond to shifting project needs and workforce plans.",
  ],
];








