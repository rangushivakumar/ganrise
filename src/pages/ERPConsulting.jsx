import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, SectionTitle, ContactBanner, CapabilityList, erpAreas, Eyebrow, contact } from '../components/common/PageShared.jsx';
export default function ERP() {
  return (
    <>
      <PageHero
        eyebrow="ERP CONSULTING"
        title="ERP consulting solutions."
        text="GANRISE Consulting provides ERP and SAP consulting in Hyderabad, including SAP implementation, upgrades, and data warehousing for enterprise operations."
      />
      <section className="section wrap capability-layout">
        <div className="capability-aside">
          <Eyebrow>ENTERPRISE SYSTEMS</Eyebrow>
          <h2>Make your ERP environment work for the business.</h2>
          <p>
            Whether you are implementing, upgrading, or refining your platform,
            we bring a practical perspective to complex enterprise systems work.
          </p>
          <Link className="text-link" to={contact}>
            Discuss your requirements <ArrowRight size={16} />
          </Link>
        </div>
        <CapabilityList items={erpAreas} />
      </section>
      <ContactBanner />
    </>
  );
}
