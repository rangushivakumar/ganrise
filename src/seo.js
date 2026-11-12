const defaultSiteUrl = 'https://www.example.com';
export const SITE_URL = (import.meta.env.VITE_SITE_URL || defaultSiteUrl).replace(/\/+$/, '');
export const SITE_URL_IS_PLACEHOLDER = !import.meta.env.VITE_SITE_URL;
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const PAGE_META = {
  '/': ['GANRISE Consulting | IT Staffing & ERP Consulting Services', 'GANRISE Consulting provides IT staffing, ERP consulting, SAP implementation, and enterprise technology solutions for businesses.'],
  '/about': ['About GANRISE Consulting | Enterprise IT Solutions', 'Learn about GANRISE Consulting and our approach to IT consulting, ERP solutions, and technology staffing services.'],
  '/services': ['IT Consulting Services | GANRISE Consulting', 'Explore ERP consulting, SAP solutions, IT staffing, and enterprise technology services from GANRISE Consulting.'],
  '/services/erp-consulting': ['ERP & SAP Consulting Services | GANRISE Consulting', 'Explore SAP implementation, ERP upgrades, data warehousing, and enterprise consulting solutions from GANRISE Consulting.'],
  '/services/it-staffing': ['IT Staffing & Offshore Recruitment | GANRISE Consulting', 'GANRISE Consulting connects businesses with qualified technology professionals through contingent hiring and offshore staffing solutions.'],
  '/employee-benefits': ['Employee Benefits | GANRISE Consulting', 'Explore employee benefits, professional development opportunities, and workplace support at GANRISE Consulting.'],
  '/careers': ['Careers at GANRISE Consulting | Explore Opportunities', 'Explore career opportunities at GANRISE Consulting and connect with our team about future opportunities.'],
  '/contact': ['Contact GANRISE Consulting | Hyderabad, India', 'Contact GANRISE Consulting in Hyderabad for IT staffing, ERP consulting, SAP solutions, and business technology requirements.'],
};
const labels = {'/':'Home','/about':'About Us','/services':'Services','/services/erp-consulting':'ERP Consulting','/services/it-staffing':'IT Staffing','/employee-benefits':'Employee Benefits','/careers':'Careers','/contact':'Contact'};
export function getSeoData(pathname) {
  const path = PAGE_META[pathname] ? pathname : '/';
  const [title, description] = PAGE_META[path];
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const crumbs = [{name:'Home',item:`${SITE_URL}/`}];
  if (path !== '/') {
    const parts=path.split('/').filter(Boolean); let running='';
    for (const part of parts) { running+=`/${part}`; if(labels[running]) crumbs.push({name:labels[running],item:`${SITE_URL}${running}`}); }
  }
  const graph = [
    {'@type':'Organization','@id':`${SITE_URL}/#organization`,name:'GANRISE Consulting',url:SITE_URL,logo:`${SITE_URL}/images/ganrise-transparent-logo.png`,email:'ganriseconsulting@gmail.com',telephone:'+91 9849685094',address:{'@type':'PostalAddress',streetAddress:'Plot 8, Poulomi Water Front, Vaishali Nagar',addressLocality:'Madinaguda, Hyderabad',addressRegion:'Telangana',addressCountry:'IN'}},
    {'@type':'ProfessionalService','@id':`${SITE_URL}/#professional-service`,name:'GANRISE Consulting',url:SITE_URL,image:OG_IMAGE,telephone:'+91 9849685094',email:'ganriseconsulting@gmail.com',address:{'@type':'PostalAddress',streetAddress:'Plot 8, Poulomi Water Front, Vaishali Nagar',addressLocality:'Madinaguda, Hyderabad',addressRegion:'Telangana',addressCountry:'IN'},areaServed:{'@type':'City',name:'Hyderabad'},knowsAbout:['ERP Consulting','SAP Consulting','IT Staffing','Offshore Staffing']},
    {'@type':'WebSite','@id':`${SITE_URL}/#website`,url:SITE_URL,name:'GANRISE Consulting',publisher:{'@id':`${SITE_URL}/#organization`},inLanguage:'en-IN'},
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:title,description,isPartOf:{'@id':`${SITE_URL}/#website`},inLanguage:'en-IN'},
    {'@type':'BreadcrumbList','itemListElement':crumbs.map((crumb,position)=>({'@type':'ListItem',position:position+1,name:crumb.name,item:crumb.item}))}
  ];
  if (path.startsWith('/services')) graph.push({'@type':'Service','name':path.endsWith('erp-consulting')?'ERP and SAP Consulting Services':path.endsWith('it-staffing')?'IT Staffing Services':'IT Consulting Services','provider':{'@id':`${SITE_URL}/#professional-service`},areaServed:{'@type':'City',name:'Hyderabad'},url});
  return {path,title,description,url,canonical:url,graph};
}
