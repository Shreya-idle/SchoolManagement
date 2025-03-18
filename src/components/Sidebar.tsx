import React from 'react';
import { Home, Users, BookOpen, GraduationCap, FileText, CreditCard } from 'lucide-react';

const Sidebar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {

  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 text-white p-2 rounded">
            <BookOpen size={20} />
          </div>
          <h1 className="text-xl font-bold text-blue-800">School Management</h1>
        </div>
      </div>
      
      <nav className="mt-4">
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Home size={20} />
          <span className="ml-3">Dashboard</span>
        </div>
        
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'applications' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('applications')}
        >
          <FileText size={20} />
          <span className="ml-3">Show Applications</span>
        </div>
        
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'profiles' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('profiles')}
        >
          <Users size={20} />
          <span className="ml-3">Profiles</span>
        </div>
        
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('students')}
        >
          <GraduationCap size={20} />
          <span className="ml-3">Students</span>
        </div>
        
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'classes' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('classes')}
        >
          <BookOpen size={20} />
          <span className="ml-3">Classes</span>
        </div>
        
        <div 
          className={`flex items-center p-3 mx-2 rounded cursor-pointer ${activeTab === 'fee' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('fee')}
        >
          <CreditCard size={20} />
          <span className="ml-3">Manage Fee</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
