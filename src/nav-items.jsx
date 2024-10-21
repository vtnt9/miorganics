import { HomeIcon, InfoIcon, WrenchIcon, FolderIcon, MailIcon, FileTextIcon, ShieldIcon } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <WrenchIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Portfolio",
    to: "/portfolio",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Portfolio />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "Terms of Service",
    to: "/terms",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <TermsOfService />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
];