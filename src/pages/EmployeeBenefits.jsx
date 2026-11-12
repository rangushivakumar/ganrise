import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, CircleHelp, Database, Globe2, Layers3, Mail, MapPin, Menu, Network, Phone, Send, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { PageHero, SectionTitle } from '../components/common/PageShared.jsx';
export default function Benefits() {
 const benefits = [
 ["Health Insurance","Health insurance premium paid by the company; employee pays for dependents. Optional dental and vision insurance available.",ShieldCheck],
 ["Competitive Compensation","Market-leading salaries with annual performance-based raises and bonuses.",BriefcaseBusiness],
 ["Flexible Work Hours","Work-life balance with flexible scheduling and remote work options.",Globe2],
 ["Paid Time Off","2 weeks of paid vacation for every year of service, plus sick leave and paid holidays.",CircleHelp],
 ["401(k) Retirement Plan","Company paid 401(k) retirement plan to help secure your financial future.",Building2],
 ["Professional Development","Allowance for books, certifications, and training programs to improve your technical skills.",Layers3],
 ["Team Environment","Collaborative culture with team-building events and company gatherings.",Users],
 ["Career Growth","Clear advancement paths and mentorship programs to help you reach your goals.",ArrowUpRight],
 ["Matching Charity Contribution","Company matches your charitable donations to support the causes you care about.",Check],
 ["Monthly Gym Allowance","Monthly gym allowance to support your health and wellness goals.",Sparkles],
 ["Payroll","We run payroll twice a month using ADP.",CircleHelp]
 ];
 return <><PageHero eyebrow="EMPLOYEE BENEFITS" title="Employee Benefits" text="At GANRISE Consulting, we believe our employees are our greatest asset. We offer a comprehensive benefits package designed to support your well-being and professional growth."/><section className="section wrap"><SectionTitle eyebrow="PEOPLE & WELL-BEING" title="Benefits that support you" text="Explore the benefits available to GANRISE Consulting employees."/><div className="benefits-grid">{benefits.map(([title,description,Icon],i)=><article className="benefit-card" key={title} tabIndex={0}><span className="benefit-icon"><Icon size={22}/></span><span className="benefit-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section></>;
}
