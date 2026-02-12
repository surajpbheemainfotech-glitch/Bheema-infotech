import { Code2, LayoutDashboard, Search, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    headline: "Websites that convert visitors",
    outcome: "High-conversion, fast and SEO-ready websites built to generate leads"
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    headline: "Scalable web applications",
    outcome: "Secure and scalable web apps designed for long-term growth"
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    headline: "Smart admin dashboards",
    outcome: "Role-based dashboards that simplify data and decisions"
  },
  {
    icon: <Search className="h-5 w-5" />,
    headline: "SEO & performance optimization",
    outcome: "Faster websites optimized to rank higher on Google"
  }
];

export default services;
