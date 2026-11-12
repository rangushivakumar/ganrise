import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, Eyebrow, SectionTitle, ContactBanner } from '../components/common/PageShared.jsx';
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT GANRISE"
        title="A thoughtful partner for your next chapter."
        text="We help organizations bring technology and talent together to move important work forward."
      />
      <section className="section wrap intro-split">
        <div>
          <Eyebrow>WHO WE ARE</Eyebrow>
          <h2>Technology expertise, grounded in your business.</h2>
        </div>
        <div>
          <p className="lead">
            GANRISE Consulting works with businesses on enterprise technology
            and IT talent needs. Our work spans ERP consulting and staffing,
            with an approach centered on understanding each organization’s
            priorities.
          </p>
          <p>
            Every organization has a different starting point. We take the time
            to understand yours, then work with your team to identify a
            practical path forward.
          </p>
        </div>
      </section>
      <section className="approach-section">
        <div className="wrap">
          <SectionTitle
            eyebrow="HOW WE WORK"
            title="Clear thinking. Collaborative delivery."
            text="A considered approach keeps the work relevant at every stage."
            center
          />
          <div className="approach-grid">
            {[
              [
                Building2,
                "Understand the context",
                "We start with your business needs, existing environment, and desired outcomes.",
              ],
              [
                Network,
                "Bring the right expertise",
                "We align consulting experience or talent to the specific work ahead.",
              ],
              [
                Check,
                "Stay focused on delivery",
                "We value clear communication and practical collaboration throughout.",
              ],
            ].map(([Icon, title, body]) => (
              <article className="approach-card" key={title}>
                <span className="icon-box">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
