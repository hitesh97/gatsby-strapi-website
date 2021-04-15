export interface MenuItem {
  id: string;
  href: string;
  name: string;
  description: string;
  enabled: boolean;
}
const MenuItems: Array<MenuItem> = [
  { id: "1", href: "/", name: "HOME", description: "Home", enabled: true },
  {
    id: "2",
    href: "/services",
    name: "SERVICES",
    description: "Services",
    enabled: true,
  },
  {
    id: "3",
    href: "/technologies",
    name: "TECHNOLOGIES",
    description: "Technologies",
    enabled: true,
  },
  {
    id: "4",
    href: "/industries",
    name: "INDUSTRIES",
    description: "Industries",
    enabled: false,
  },
  {
    id: "5",
    href: "/portfolio",
    name: "PORTFOLIO",
    description: "Portfolio",
    enabled: false,
  },
  {
    id: "6",
    href: "/about-us",
    name: "COMPANY",
    description: "Company",
    enabled: true,
  },
  {
    id: "7",
    href: "/contact-us",
    name: "CONTACT",
    description: "contact us",
    enabled: true,
  },
];

export default MenuItems;
