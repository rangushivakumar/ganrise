import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { Eyebrow, SectionTitle, ContactBanner, ServiceCards, paths, contact } from '../components/common/PageShared.jsx';
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap home-hero-grid">
          <div className="home-copy">
            <Eyebrow>TECHNOLOGY & TALENT, CONNECTED</Eyebrow>
            <h1>
              Transforming visions into <em>digital reality.</em>
            </h1>
            <p>GANRISE Consulting provides IT consulting and technology staffing services in Hyderabad, Telangana. We help businesses align enterprise technology and talent with their priorities.</p>
            <div className="button-row">
              <Link className="button button-blue" to="/services">
                Explore our services <ArrowRight size={17} />
              </Link>
              <Link className="button button-outline" to={contact}>
                Contact us <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-note">
              <span className="note-line" />A considered partner for what’s next
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Bright modern workspace with a collaborative meeting area"
              fetchPriority="high"
            />
            <div className="image-label">
              <span className="label-icon">
                <Globe2 size={20} />
              </span>
              <span>
                <b>Ready for what’s next</b>
                <small>People, process, technology</small>
              </span>
            </div>
            <div className="visual-stamp">
              <span>GANRISE</span>
              <small>CONSULTING</small>
              <i />
            </div>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>ERP CONSULTING</span>
          <span className="hero-bottom-line" />
          <span>IT STAFFING</span>
          <span className="hero-bottom-line" />
          <span>ENTERPRISE SOLUTIONS</span>
        </div>
      </section>
      <section className="section wrap">
        <SectionTitle
          eyebrow="WHAT WE DO"
          title="Our services"
          text="Technology expertise and talent solutions to help businesses move forward."
          center
        />
        <ServiceCards />
      </section>
      <section className="why-section">
        <div className="wrap why-layout">
          <div className="why-intro">
            <Eyebrow>THE GANRISE APPROACH</Eyebrow>
            <h2>Good work starts with understanding what matters.</h2>
            <p>
              We bring people, process, and technology together around your
              business priorities.
            </p>
            <Link to="/about" className="text-link">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="value-list insight-grid">
            {[["Who We Are","About GANRISE Consulting","Learn how we align technology expertise and talent with business priorities.","/about","About us"],["What We Do","ERP consulting and IT staffing","Explore our service areas and the capabilities we bring to enterprise work.","/services","Explore services"],["Our Approach","Enterprise-focused solutions","We begin with your context and collaborate around practical delivery.","/about","Our approach"],["Careers","Grow with GANRISE","Explore our people focused culture and share your profile with our team.","/careers","Explore careers"]].map(([eyebrow,title,body,href,label],i)=><details className="insight-card" key={title}><summary><span>{`0${i+1}`}</span><div><small>{eyebrow}</small><h3>{title}</h3></div><ArrowUpRight size={18}/></summary><p>{body}</p><Link to={href} className="text-link">{label}<ArrowRight size={16}/></Link></details>)}
          </div>
        </div>
      </section>
      <section className="people-preview wrap">
        <div className="people-visual">
          <div className="people-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
              alt="Colleagues working together at a table"
              loading="lazy"
            />
            <div className="image-index">
              PEOPLE MAKE THE DIFFERENCE <ArrowUpRight size={14} />
            </div>
          </div>
          <div className="people-tag">
            <Sparkles size={17} />
            <span>Built around people</span>
          </div>
        </div>
        <div className="people-copy">
          <Eyebrow>PEOPLE & OPPORTUNITY</Eyebrow>
          <h2>Good work happens when people can do their best work.</h2>
          <p>
            We believe strong teams and meaningful opportunities are essential
            to lasting progress. Learn more about joining and growing with
            GANRISE.
          </p>
          <div className="preview-links">
            <Link to={paths.benefits}>
              <span className="preview-icon">
                <ShieldCheck size={19} />
              </span>
              <span>
                <b>Supporting our people</b>
                <small>Explore employee benefits</small>
              </span>
              <ArrowRight size={17} />
            </Link>
            <Link to={paths.careers}>
              <span className="preview-icon">
                <BriefcaseBusiness size={19} />
              </span>
              <span>
                <b>Build your career</b>
                <small>See how to get in touch</small>
              </span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
