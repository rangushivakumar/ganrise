import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, SectionTitle, ContactBanner, CapabilityList, staffingAreas, Eyebrow, contact } from '../components/common/PageShared.jsx';
export default function Staffing() {
  return (
    <>
      <PageHero
        eyebrow="IT STAFFING"
        title="Connecting businesses with exceptional IT talent."
        text="GANRISE Consulting provides IT staffing in Hyderabad, including contingent hiring and offshore staffing to help businesses connect with technology professionals."
      />
      <section className="section wrap capability-layout">
        <div className="capability-aside">
          <Eyebrow>PEOPLE FOR PROGRESS</Eyebrow>
          <h2>The right people make the work possible.</h2>
          <p>
            We take time to understand the role, the team, and the outcomes you
            are working toward, then align talent and engagement to those needs.
          </p>
          <Link className="text-link" to={contact}>
            Talk to our staffing team <ArrowRight size={16} />
          </Link>
        </div>
        <CapabilityList items={staffingAreas} />
      </section>
      <section className="staffing-callout">
        <div className="wrap">
          <div className="icon-box">
            <Users size={23} />
          </div>
          <div>
            <h2>A staffing approach built around your needs.</h2>
            <p>
              Clear role definition, thoughtful talent alignment, and flexible
              engagement options help teams get the support they need.
            </p>
          </div>
          <Link className="button button-blue" to={contact}>
            Make a business inquiry <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
