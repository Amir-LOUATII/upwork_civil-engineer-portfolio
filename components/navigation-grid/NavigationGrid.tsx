import {
  BarChart2,
  Briefcase,
  Building2,
  Globe,
  Info,
  Lightbulb,
  Paintbrush,
  Users,
  Wrench,
} from "lucide-react";
import { NavigationItem } from "./NavigationItem";

interface NavigationGridProps {
  activeItem?: string;
}
const navigationItems = [
  {
    icon: <Building2 size={24} />,
    label: "Experience",
    href: "/experience",
    id: "experience",
  },
  {
    icon: <Info size={24} />,
    label: "Skills",
    href: "/skills",
    id: "skills",
  },
  {
    icon: <Wrench size={24} />,
    label: "Projects",
    href: "/projects",
    id: "projects",
  },
  {
    icon: <BarChart2 size={24} />,
    label: "Achievements",
    href: "/achievements",
    id: "achievements",
  },
  {
    icon: <Paintbrush size={24} />,
    label: "Specializations",
    href: "/specializations",
    id: "specializations",
  },
  {
    icon: <Briefcase size={24} />,
    label: "Locations",
    href: "/locations",
    id: "locations",
  },
  {
    icon: <Users size={24} />,
    label: "Clients",
    href: "/clients",
    id: "clients",
  },
  {
    icon: <Lightbulb size={24} />,
    label: "Innovations",
    href: "/innovations",
    id: "innovations",
  },
  {
    icon: <Globe size={24} />,
    label: "Global Reach",
    href: "/global-reach",
    id: "global-reach",
  },
];
export default function NavigationGrid({
  activeItem = "experience",
}: NavigationGridProps) {
  return (
    <div className="bg-black p-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activeItem === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
