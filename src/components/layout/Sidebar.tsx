import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { 
  LayoutDashboard, 
  Library, 
  Wand2, 
  UserCircle, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

interface SidebarItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, label, icon, isActive }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      isActive 
        ? "bg-primary-100 text-primary-900" 
        : "text-gray-700 hover:bg-gray-100"
    )}
  >
    <span className={cn("mr-3", isActive ? "text-primary-600" : "text-gray-500")}>
      {icon}
    </span>
    {label}
  </Link>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const sidebarItems = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/library", label: "Prompt Library", icon: <Library size={20} /> },
    { to: "/generator", label: "Prompt Generator", icon: <Wand2 size={20} /> },
    { to: "/profile", label: "Profile", icon: <UserCircle size={20} /> },
    { to: "/help", label: "Help", icon: <HelpCircle size={20} /> },
  ];
  
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo and App Name */}
      <div className="px-6 py-6">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center text-white">
            <Wand2 size={24} />
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">PromptCraft</span>
        </Link>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            isActive={pathname === item.to}
          />
        ))}
      </nav>
      
      {/* Bottom Actions */}
      <div className="px-4 py-4 border-t border-gray-200">
        <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
          <LogOut size={20} className="mr-3 text-gray-500" />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;