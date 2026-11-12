import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { Eyebrow } from '../components/common/PageShared.jsx';
export default function NotFound() {
  return (
    <section className="not-found wrap">
      <Eyebrow>404</Eyebrow>
      <h1>We couldn’t find that page.</h1>
      <p>The page may have moved or the address may be incorrect.</p>
      <Link className="button button-blue" to="/">
        Back to home <ArrowRight size={16} />
      </Link>
    </section>
  );
}
