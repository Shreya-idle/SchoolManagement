import React, { useState } from 'react';
import { Moon, Sun, Users, GraduationCap, Shield, ChevronRight } from 'lucide-react';

// Define props for the PortalHome component
type PortalHomeProps = {
  isAdmin?: boolean; // Optional prop with a default value
  onStudentClick: () => void;
  onTeacherClick: () => void;
  onAdminClick: () => void;
};

const PortalHome: React.FC<PortalHomeProps> = ({
  isAdmin = false,
  onStudentClick,
  onTeacherClick,
  onAdminClick,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`h-20 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-700'} flex justify-between items-center px-6`}>
        <div className="text-white text-2xl font-bold">Logo</div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-blue-600'} hover:opacity-80 transition-opacity`}
        >
          {isDarkMode ? (
            <Sun className="text-yellow-300" size={24} />
          ) : (
            <Moon className="text-white" size={24} />
          )}
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center py-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
          Education Portal
        </h1>
        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-blue-700'}`}>
          A digital platform for academic management and collaboration
        </p>
      </div>

      {/* Portal Cards */}
      <div className="max-w-4xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Student Portal Card */}
        <button 
          onClick={onStudentClick}
          className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border-blue-500 hover:bg-gray-700' : 'bg-white border-blue-600 hover:bg-blue-50'} 
            border-l-4 shadow-lg transition-all duration-200 transform hover:scale-105 text-left`}
        >
          <div className="flex justify-between items-start">
            <div className={`w-14 h-14 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-4`}>
              <GraduationCap className="text-white" size={28} />
            </div>
            <ChevronRight className={isDarkMode ? 'text-gray-400' : 'text-blue-400'} size={24} />
          </div>
          <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
            Student
          </h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-blue-700'}>
            Access student dashboard
          </p>
        </button>

        {/* Teacher Portal Card */}
        <button 
          onClick={onTeacherClick}
          className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border-blue-500 hover:bg-gray-700' : 'bg-white border-blue-600 hover:bg-blue-50'} 
            border-l-4 shadow-lg transition-all duration-200 transform hover:scale-105 text-left`}
        >
          <div className="flex justify-between items-start">
            <div className={`w-14 h-14 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-4`}>
              <Users className="text-white" size={28} />
            </div>
            <ChevronRight className={isDarkMode ? 'text-gray-400' : 'text-blue-400'} size={24} />
          </div>
          <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
            Teacher
          </h2>
          <p className={isDarkMode ? 'text-gray-300' : 'text-blue-700'}>
            Access teacher dashboard
          </p>
        </button>

        {/* Admin Portal Card - Only visible to admins */}
        {isAdmin && (
          <button 
            onClick={onAdminClick}
            className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800 border-blue-500 hover:bg-gray-700' : 'bg-white border-blue-600 hover:bg-blue-50'} 
              border-l-4 shadow-lg transition-all duration-200 transform hover:scale-105 text-left`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-14 h-14 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-700'} flex items-center justify-center mb-4`}>
                <Shield className="text-white" size={28} />
              </div>
              <ChevronRight className={isDarkMode ? 'text-gray-400' : 'text-blue-400'} size={24} />
            </div>
            <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
              Admin
            </h2>
            <p className={isDarkMode ? 'text-gray-300' : 'text-blue-700'}>
              Access admin dashboard
            </p>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className={`mt-12 py-6 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-700'} text-center`}>
        <p className="text-white text-sm">
          © 2025 Education Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PortalHome;