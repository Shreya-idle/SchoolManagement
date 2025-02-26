import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList, NavigationProps } from '../../@types/navigation';




// Define types for menu items
type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode; // Allow icon to be null
  path: string; // Single definition of path
  subItems?: SubMenuItem[];
  isNew?: boolean;
};

type SubMenuItem = {
  id: string;
  label: string;
  path: string;
  subItems?: NestedMenuItem[];
};

type NestedMenuItem = {
  id: string;
  label: string;
  path: string;
};

// Sidebar Component Props
type SidebarProps = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  activeSubmenu: string | null;
  setActiveSubmenu: (submenu: string | null) => void;
};

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({
  activeMenu,
  setActiveMenu,
  activeSubmenu,
  setActiveSubmenu
}) => {
  const navigation = useNavigation<NavigationProps>();

  const [icons, setIcons] = useState<Record<string, React.ComponentType<any>>>({});

  // Dynamically import lucide-react icons
  useEffect(() => {
    const loadIcons = async () => {
      const lucideIcons = await import('lucide-react');
      setIcons({
        Home: lucideIcons.Home,
        Users: lucideIcons.Users,
        GraduationCap: lucideIcons.GraduationCap,
        CreditCard: lucideIcons.CreditCard,
        Settings: lucideIcons.Settings,
        BookOpen: lucideIcons.BookOpen,
        Star: lucideIcons.Star,
        ChevronRight: lucideIcons.ChevronRight,
      });
    };

    loadIcons();
  }, []);

  const handleNavigation = (path: keyof RootStackParamList) => {
    navigation.navigate(path as keyof RootStackParamList);
    setActiveMenu(path as string);
  };





  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: icons.Home ? <icons.Home size={20} /> : null, // This can be null
      path: '/dashboard',
    },
    {
      id: 'teachers',
      label: 'Teachers',
      icon: icons.Users ? <icons.Users size={20} /> : null, // This can be null
      path: '/teachers',
      subItems: [
        { id: 'faculty-info', label: 'Faculty Info', path: '/teachers/faculty-info' },
        { id: 'leave', label: 'Leave', path: '/teachers/leave' },
        { id: 'library-books', label: 'Library Books', path: '/teachers/library' }
      ]
    },
    {
      id: 'students',
      label: 'Students/classes',
      icon: icons.GraduationCap ? <icons.GraduationCap size={20} /> : null, // This can be null
      path: '/students',
      subItems: [
        { id: 'all-students', label: 'All students', path: '/students/all' },
        { id: 'admission-form', label: 'Admission form', path: '/students/admission' },
        { id: 'student-promotion', label: 'Student promotion', path: '/students/promotion' },
        {
          id: 'class',
          label: 'Class',
          path: '/students/class',
          subItems: [
            { id: 'personal-info', label: 'Personal Information', path: '/students/class/personal-info' },
            { id: 'parent-teacher', label: 'Parent-Teacher Meeting', path: '/students/class/parent-teacher' },
            { id: 'event-calendar', label: 'Event Calendar', path: '/students/class/calendar' },
            { id: 'gallery', label: 'Gallery', path: '/students/class/gallery' },
            { id: 'assignments', label: 'Assignments', path: '/students/class/assignments' },
            { id: 'exams', label: 'Exams', path: '/students/class/exams' },
            { id: 'attendance', label: 'Attendance', path: '/students/class/attendance' },
            { id: 'grades', label: 'Grades', path: '/students/class/grades' },
            { id: 'grade-history', label: 'Grade History', path: '/students/class/grade-history' }
          ]
        }
      ]
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: icons.CreditCard ? <icons.CreditCard size={20} /> : null, // This can be null
      path: '/billing',
      subItems: [
        { id: 'online-payment', label: 'Online Payment', path: '/billing/payment' },
        { id: 'payment-history', label: 'Payment History', path: '/billing/history' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings and profile',
      icon: icons.Settings ? <icons.Settings size={20} /> : null, // This can be null
      path: '/settings',
    },
    {
      id: 'exams',
      label: 'Exams',
      icon: icons.BookOpen ? <icons.BookOpen size={20} /> : null, // This can be null
      path: '/exams',
    },
    {
      id: 'features',
      label: 'Features',
      icon: icons.Star ? <icons.Star size={20} /> : null, // This can be null
      path: '/features',
      isNew: true
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0a1742] text-white p-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="text-2xl font-bold text-[#0a1742]">M</div>
        </div>
        <div className="text-sm font-medium">Udemy Inter. school</div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm ${
                activeMenu === item.id ? 'bg-[#2563eb] text-white' : 'hover:bg-[#1e3a8a]'
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.isNew && (
                <span className="bg-white text-[#0a1742] text-xs px-2 py-0.5 rounded">NEW</span>
              )}
              {item.subItems && icons.ChevronRight && <icons.ChevronRight size={16} />}
            </button>

            {/* Submenu */}
            {item.subItems && activeMenu === item.id && (
              <div className="ml-4 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <div key={subItem.id}>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm ${
                        activeSubmenu === subItem.id ? 'bg-[#3b82f6] text-white' : 'hover:bg-[#1e3a8a]'
                      }`}
                      onClick={() => {
                        handleNavigation(subItem.path);
                        setActiveSubmenu(subItem.id);
                      }}
                    >
                      <span>{subItem.label}</span>
                      {subItem.subItems && icons.ChevronRight && <icons.ChevronRight size={16} />}
                    </button>

                    {/* Nested Submenu */}
                    {subItem.subItems && activeSubmenu === subItem.id && (
                      <div className="ml-4 mt-1 space-y-1">
                        {subItem.subItems.map((nestedItem) => (
                          <button
                            key={nestedItem.id}
                            className="w-full flex items-center px-4 py-2 rounded-lg text-sm hover:bg-[#1e3a8a]"
                            onClick={() => handleNavigation(nestedItem.path)}
                          >
                            {nestedItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

// Page Components
const DashboardPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Dashboard</h1></div>;
const TeachersPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Teachers</h1></div>;
const StudentsPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Students</h1></div>;
const BillingPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Billing</h1></div>;
const SettingsPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>;
const ExamsPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Exams</h1></div>;
const FeaturesPage: React.FC = () => <div className="p-8"><h1 className="text-2xl font-bold">Features</h1></div>;

// Main Dashboard Component
const Dashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        <DashboardSection />
        <FeeManagementSection />
      </div>

  const [activeMenu, setActiveMenu] = useState<string>('dashboard');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();


  return (
    <div className="flex">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      <div className="flex-1">
        {/* Navigation logic will be handled by the Stack.Navigator in App.tsx */}
      </div>
    </div>
  );
};

export default Dashboard;
