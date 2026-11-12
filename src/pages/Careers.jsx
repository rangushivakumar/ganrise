import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, SectionTitle, Eyebrow, contact } from '../components/common/PageShared.jsx';
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS AT GANRISE"
        title="Build your career with GANRISE."
        text="Explore opportunities to grow your career while working on meaningful technology solutions."
      />
      <section className="section wrap careers-intro">
        <div>
          <Eyebrow>GROW WITH US</Eyebrow>
          <h2>Bring your perspective. Do meaningful work.</h2>
        </div>
        <div>
          <p className="lead">
            We are always interested in connecting with talented professionals
            who care about thoughtful, high-quality work.
          </p>
          <p>
            As our opportunities evolve, we welcome you to share your experience
            and areas of interest with our team.
          </p>
        </div>
      </section>
      <section className="careers-why">
        <div className="wrap">
          <SectionTitle
            eyebrow="WHY GANRISE"
            title="Room to contribute and grow"
            text="Our work brings together people, technology, and business challenges."
            center
          />
          <div className="career-values">
            {[
              [
                Sparkles,
                "Meaningful work",
                "Contribute to technology work that supports real business needs.",
              ],
              [
                Users,
                "Collaborative teams",
                "Work alongside people who value communication and shared progress.",
              ],
              [
                Globe2,
                "Room to grow",
                "Explore opportunities to develop your skills and experience.",
              ],
            ].map(([Icon, t, d]) => (
              <article key={t}>
                <span className="icon-box">
                  <Icon size={21} />
                </span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap job-section" id="opportunities">
        <div className="job-heading">
          <div>
            <Eyebrow>OPPORTUNITIES</Eyebrow>
            <h2>Current openings</h2>
          </div>
          <span className="openings-chip">
            <span /> No listed openings
          </span>
        </div>
        <div className="no-jobs">
          <span className="job-icon">
            <BriefcaseBusiness size={25} />
          </span>
          <div>
            <h3>Let’s stay connected</h3>
            <p>
              We're always interested in connecting with talented professionals.
              Share your profile with us to explore future opportunities.
            </p>
          </div>
          <Link className="button button-blue" to={contact}>
            Get in touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
