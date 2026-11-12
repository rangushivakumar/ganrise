import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, SectionTitle, ContactBanner, offerings, paths } from '../components/common/PageShared.jsx';
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Expertise for the work ahead."
        text="Explore IT consulting services in Hyderabad, including ERP and SAP consulting, enterprise technology, and flexible IT staffing."
      />
      <section className="section wrap">
        <SectionTitle
          eyebrow="WHAT WE DO"
          title="Technology and talent, working together"
          text="Explore our service areas and find the right starting point for your needs."
        />
        <div className="service-detail-list">
          {offerings.map(({ icon: Icon, n, title, body, link, label }) => (
            <article className="service-detail" key={title}>
              <span className="detail-number">{n}</span>
              <div className="detail-icon">
                <Icon size={26} />
              </div>
              <div className="detail-copy">
                <h2>{title}</h2>
                <p>{body}</p>
                <div className="tag-row">
                  <span>Business aligned</span>
                  <span>Collaborative</span>
                  <span>Flexible</span>
                </div>
              </div>
              <Link className="circle-link" aria-label={label} to={link}>
                <ArrowUpRight size={20} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
