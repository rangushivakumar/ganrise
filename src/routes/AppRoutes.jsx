import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import ERPConsulting from '../pages/ERPConsulting.jsx';
import ITStaffing from '../pages/ITStaffing.jsx';
import EmployeeBenefits from '../pages/EmployeeBenefits.jsx';
import Careers from '../pages/Careers.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';
export default function AppRoutes() { return <Routes>
<Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/services/erp-consulting" element={<ERPConsulting/>}/><Route path="/services/it-staffing" element={<ITStaffing/>}/><Route path="/employee-benefits" element={<EmployeeBenefits/>}/><Route path="/careers" element={<Careers/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
</Routes>; }
