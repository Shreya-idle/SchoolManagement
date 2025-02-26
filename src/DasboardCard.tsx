import React, { useState } from 'react';
import { Home, Users, BookOpen, GraduationCap, FileText, CreditCard, Bell, Settings, Search, BarChart2, Calendar, Clock, Plus, Edit, Trash2, Download, Eye, FileCheck, UserCheck, CheckCircle, AlertCircle, Filter, Mail, Phone, MapPin, ChevronDown, UserPlus, Percent, Award } from 'lucide-react';

const SchoolManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [feeDiscountModalOpen, setFeeDiscountModalOpen] = useState(false);
  
  // Sample data for the system
  const students = [
    { id: 1, name: "Sarah Johnson", grade: "Grade 10", gender: "Female", joinDate: "Aug 15, 2024", feeStatus: "Paid", parentName: "David Johnson", contact: "+1 555-234-5678" },
    { id: 2, name: "Michael Zhang", grade: "Grade 8", gender: "Male", joinDate: "Sep 3, 2024", feeStatus: "Due", parentName: "Wei Zhang", contact: "+1 555-345-6789" },
    { id: 3, name: "Aisha Patel", grade: "Grade 11", gender: "Female", joinDate: "Jul 22, 2024", feeStatus: "Paid", parentName: "Raj Patel", contact: "+1 555-456-7890" },
    { id: 4, name: "James Wilson", grade: "Grade 9", gender: "Male", joinDate: "Aug 20, 2024", feeStatus: "Partial", parentName: "Emma Wilson", contact: "+1 555-567-8901" },
    { id: 5, name: "Sofia Rodriguez", grade: "Grade 10", gender: "Female", joinDate: "Sep 1, 2024", feeStatus: "Paid", parentName: "Carlos Rodriguez", contact: "+1 555-678-9012" },
    { id: 6, name: "Ethan Lee", grade: "Grade 7", gender: "Male", joinDate: "Aug 28, 2024", feeStatus: "Due", parentName: "Jennifer Lee", contact: "+1 555-789-0123" },
    { id: 7, name: "Maria Thompson", grade: "Grade 12", gender: "Female", joinDate: "Jul 15, 2024", feeStatus: "Paid", parentName: "Robert Thompson", contact: "+1 555-890-1234" },
    { id: 8, name: "Tom Anderson", grade: "Grade 11", gender: "Male", joinDate: "Sep 5, 2024", feeStatus: "Paid", parentName: "Lisa Anderson", contact: "+1 555-901-2345" }
  ];
  
  const classes = [
    { id: 1, name: "Mathematics - Grade 10", teacher: "Dr. Emily Richards", students: 32, schedule: "Mon, Wed, Fri (9:00 - 10:30 AM)", room: "B-201" },
    { id: 2, name: "English Literature - Grade 11", teacher: "Mr. James Peterson", students: 28, schedule: "Mon, Thurs (11:00 AM - 12:30 PM)", room: "A-105" },
    { id: 3, name: "Physics - Grade 12", teacher: "Dr. Robert Chen", students: 24, schedule: "Tues, Thurs (1:00 - 2:30 PM)", room: "C-302" },
    { id: 4, name: "History - Grade 9", teacher: "Ms. Sarah Williams", students: 30, schedule: "Wed, Fri (10:45 AM - 12:15 PM)", room: "A-108" },
    { id: 5, name: "Biology - Grade 11", teacher: "Dr. Michael Johnson", students: 26, schedule: "Mon, Wed (2:15 - 3:45 PM)", room: "C-305" },
    { id: 6, name: "Chemistry - Grade 10", teacher: "Ms. Jennifer Lee", students: 28, schedule: "Tues, Thurs (9:00 - 10:30 AM)", room: "C-301" },
    { id: 7, name: "Computer Science - Grade 12", teacher: "Mr. David Smith", students: 22, schedule: "Mon, Fri (1:00 - 2:30 PM)", room: "B-205" },
    { id: 8, name: "Spanish - Grade 9", teacher: "Ms. Maria Gonzalez", students: 25, schedule: "Tues, Thurs (11:00 AM - 12:30 PM)", room: "A-110" }
  ];
  
  const teacherApplications = [
    { id: 1, name: "Dr. Amanda Johnson", subject: "Mathematics", experience: "8 years", appliedDate: "Feb 10, 2025", status: "Under Review", education: "Ph.D. Mathematics, Stanford University" },
    { id: 2, name: "Mr. Thomas Chen", subject: "Physics", experience: "5 years", appliedDate: "Feb 12, 2025", status: "Interview Scheduled", education: "M.Sc. Physics, MIT" },
    { id: 3, name: "Ms. Sarah Miller", subject: "English Literature", experience: "7 years", appliedDate: "Feb 8, 2025", status: "Shortlisted", education: "M.A. English, Columbia University" }
  ];
  
  const studentApplications = [
    { id: 1, name: "Lily Parker", grade: "Grade 9", parentName: "Robert Parker", appliedDate: "Feb 15, 2025", status: "Documents Pending", previousSchool: "Lincoln Middle School" },
    { id: 2, name: "Ethan Williams", grade: "Grade 10", parentName: "Susan Williams", appliedDate: "Feb 14, 2025", status: "Interview Scheduled", previousSchool: "Washington High School" },
    { id: 3, name: "Maya Patel", grade: "Grade 8", parentName: "Raj Patel", appliedDate: "Feb 13, 2025", status: "Application Complete", previousSchool: "Jefferson Middle School" },
    { id: 4, name: "Daniel Rodriguez", grade: "Grade 11", parentName: "Maria Rodriguez", appliedDate: "Feb 11, 2025", status: "Under Review", previousSchool: "Central High School" }
  ];
  
  const feeStructure = [
    { grade: "Grade 7-8", tuitionFee: 8500, admissionFee: 1000, libraryFee: 500, labFee: 800, activityFee: 600, transportFee: 1200 },
    { grade: "Grade 9-10", tuitionFee: 9500, admissionFee: 1000, libraryFee: 500, labFee: 1000, activityFee: 800, transportFee: 1200 },
    { grade: "Grade 11-12", tuitionFee: 10500, admissionFee: 1000, libraryFee: 500, labFee: 1200, activityFee: 800, transportFee: 1200 }
  ];
  
  const staffChildren = [
    { studentId: 4, studentName: "James Wilson", parentName: "Emma Wilson", staffPosition: "English Teacher", discountPercent: 50 },
    { studentId: 6, studentName: "Ethan Lee", parentName: "Jennifer Lee", staffPosition: "Chemistry Teacher", discountPercent: 50 }
  ];
  
  // Navigation sidebar component
  const Sidebar = () => (
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
  
  // Top Bar component
  const TopBar = () => (
    <div className="bg-white p-4 shadow-sm flex justify-between items-center">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
            AS
          </div>
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
  
  // Students section
  const StudentsSection = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Students</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <select 
              className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="All">All Grades</option>
              <option value="Grade 7">Grade 7</option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-500" />
          </div>
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
            <UserPlus size={18} className="mr-2" />
            Add Student
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students
              .filter(student => selectedGrade === 'All' || student.grade === selectedGrade)
              .map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.feeStatus === 'Paid' ? 'bg-green-100 text-green-800' :
                      student.feeStatus === 'Due' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.feeStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{student.parentName}</div>
                    <div className="text-xs text-gray-400">{student.contact}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                      <button className="p-1 text-green-600 hover:text-green-800"><Edit size={18} /></button>
                      <button className="p-1 text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</a>
            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> students
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <ChevronDown className="h-5 w-5 transform rotate-90" />
                </a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">2</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 transform -rotate-90" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Classes section
  const ClassesSection = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Classes</h2>
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
          <Plus size={18} className="mr-2" />
          Add Class
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b bg-blue-50">
              <h3 className="font-bold text-lg">{classItem.name}</h3>
              <p className="text-gray-600">Teacher: {classItem.teacher}</p>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <GraduationCap size={18} className="text-blue-600 mr-2" />
                <span>{classItem.students} Students</span>
              </div>
              <div className="flex items-center mb-2">
                <Calendar size={18} className="text-blue-600 mr-2" />
                <span>{classItem.schedule}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-blue-600 mr-2" />
                <span>Room {classItem.room}</span>
              </div>
            </div>
            <div className="bg-gray-50 p-3 flex justify-between border-t">
              <button className="text-blue-600 flex items-center text-sm">
                <Eye size={16} className="mr-1" />
                View Details
              </button>
              <button className="text-green-600 flex items-center text-sm">
                <Edit size={16} className="mr-1" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Applications section
  const ApplicationsSection = () => {
    const [applicationType, setApplicationType] = useState('students');
    
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Applications</h2>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-md ${applicationType === 'students' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setApplicationType('students')}
            >
              Student Applications
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${applicationType === 'teachers' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setApplicationType('teachers')}
            >
              Teacher Applications
            </button>
          </div>
        </div>
        
        {applicationType === 'students' ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Student Applications</h3>
              <div className="flex items-center">
                <Filter size={16} className="text-gray-500 mr-2" />
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Status</option>
                  <option>Documents Pending</option>
                  <option>Interview Scheduled</option>
                  <option>Application Complete</option>
                  <option>Under Review</option>
                </select>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous School</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.grade}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.parentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.previousSchool}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.appliedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        application.status === 'Documents Pending' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                        application.status === 'Application Complete' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                        <button className="p-1 text-green-600 hover:text-green-800"><FileCheck size={18} /></button>
                        <button className="p-1 text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Teacher Applications</h3>
              <div className="flex items-center">
                <Filter size={16} className="text-gray-500 mr-2" />
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Status</option>
                  <option>Under Review</option>
                  <option>Interview Scheduled</option>
                  <option>Shortlisted</option>
                </select>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Education</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {teacherApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.education}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.experience}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.appliedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800 application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                        <button className="p-1 text-green-600 hover:text-green-800"><UserCheck size={18} /></button>
                        <button className="p-1 text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  // Fee Management section
  const FeeManagementSection = () => {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Fee Management</h2>
          <div className="flex space-x-2">
            <button 
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => setFeeDiscountModalOpen(true)}
            >
              <Percent size={18} className="mr-2" />
              Manage Discounts
            </button>
            <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md">
              <Download size={18} className="mr-2" />
              Export Fee Data
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Fee Structure</h3>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tuition</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Other Fees</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feeStructure.map((fee, index) => {
                    const otherFees = fee.admissionFee + fee.libraryFee + fee.labFee + fee.activityFee;
                    const total = fee.tuitionFee + otherFees;
                    
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{fee.grade}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-gray-500">${fee.tuitionFee}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-gray-500">${otherFees}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">${total}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Fee Collection Status</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">February 2025</span>
                  <span className="text-sm font-medium text-green-600">78% Collected</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">January 2025</span>
                  <span className="text-sm font-medium text-green-600">92% Collected</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">December 2024</span>
                  <span className="text-sm font-medium text-green-600">97% Collected</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span>Overall Collection Rate (2024-25)</span>
                  <span className="font-semibold">89%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Fee Payment Methods</h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 border rounded-md">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Credit/Debit Card</h4>
                  <p className="text-sm text-gray-500">58% of payments</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border rounded-md">
                <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Bank Transfer</h4>
                  <p className="text-sm text-gray-500">32% of payments</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border rounded-md">
                <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 9H19V21H5V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Cash</h4>
                  <p className="text-sm text-gray-500">10% of payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-semibold">Staff Children with Fee Discounts</h3>
            <button className="text-blue-600 text-sm flex items-center">
              <Plus size={16} className="mr-1" />
              Add Discount
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staffChildren.map((staff) => (
                <tr key={staff.studentId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{staff.studentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.parentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staff.staffPosition}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {staff.discountPercent}% Off
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1 text-green-600 hover:text-green-800"><Edit size={18} /></button>
                      <button className="p-1 text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  // Dashboard section
  const DashboardSection = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <GraduationCap size={24} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Students</p>
              <h3 className="text-2xl font-bold">2,845</h3>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">+3.2%</span>
                <span>since last month</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users size={24} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Teachers</p>
              <h3 className="text-2xl font-bold">142</h3>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">+1.8%</span>
                <span>since last month</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <BookOpen size={24} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Total Classes</p>
              <h3 className="text-2xl font-bold">68</h3>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <span className="mr-1">+0.5%</span>
                <span>since last month</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <FileText size={24} />
            </div>
            <div className="ml-4">
              <p className="text-gray-500 text-sm">Applications</p>
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <span className="mr-1">-2.3%</span>
                <span>since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Student Applications</h3>
            <button className="text-blue-600 text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Name</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Grade</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Date</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {studentApplications.slice(0, 4).map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="py-3 text-sm">{app.name}</td>
                    <td className="py-3 text-sm text-gray-500">{app.grade}</td>
                    <td className="py-3 text-sm text-gray-500">{app.appliedDate}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.status === 'Documents Pending' ? 'bg-yellow-100 text-yellow-800' :
                        app.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                        app.status === 'Application Complete' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Teacher Applications</h3>
            <button className="text-blue-600 text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Name</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Subject</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Experience</th>
                  <th className="pb-2 text-left text-xs font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {teacherApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="py-3 text-sm">{app.name}</td>
                    <td className="py-3 text-sm text-gray-500">{app.subject}</td>
                    <td className="py-3 text-sm text-gray-500">{app.experience}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        app.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Upcoming Events</h3>
            <button className="text-blue-600 text-sm flex items-center">
              <Calendar size={16} className="mr-1" />
              View Calendar
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start p-4 border rounded-lg hover:bg-blue-50">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4 text-center min-w-[60px]">
                <div className="text-sm font-bold">Mar</div>
                <div className="text-xl font-bold">05</div>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Parent-Teacher Conference</h4>
                <p className="text-gray-500 text-sm my-1">Annual meeting for discussing student progress</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock size={16} className="mr-1" />
                  <span>9:00 AM - 4:00 PM</span>
                  <MapPin size={16} className="ml-3 mr-1" />
                  <span>School Auditorium</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start p-4 border rounded-lg hover:bg-blue-50">
              <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4 text-center min-w-[60px]">
                <div className="text-sm font-bold">Mar</div>
                <div className="text-xl font-bold">12</div>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Science Fair</h4>
                <p className="text-gray-500 text-sm my-1">Annual student science projects exhibition</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock size={16} className="mr-1" />
                  <span>10:00 AM - 3:00 PM</span>
                  <MapPin size={16} className="ml-3 mr-1" />
                  <span>School Gymnasium</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start p-4 border rounded-lg hover:bg-blue-50">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4 text-center min-w-[60px]">
                <div className="text-sm font-bold">Mar</div>
                <div className="text-xl font-bold">20</div>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Staff Development Day</h4>
                <p className="text-gray-500 text-sm my-1">Professional development for teachers and staff</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock size={16} className="mr-1" />
                  <span>9:00 AM - 5:00 PM</span>
                  <MapPin size={16} className="ml-3 mr-1" />
                  <span>Conference Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Top Performers</h3>
            <button className="text-blue-600 text-sm flex items-center">
              <Award size={16} className="mr-1" />
              View All
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center p-3 border rounded-md">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">
                SJ
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Grade 10 • 98.5% Average</p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-yellow-100 rounded-full">
                <Award size={16} className="text-yellow-700" />
              </div>
            </div>
            
            <div className="flex items-center p-3 border rounded-md">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-700 font-bold">
                AP
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Aisha Patel</h4>
                <p className="text-sm text-gray-500">Grade 11 • 97.2% Average</p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-yellow-100 rounded-full">
                <Award size={16} className="text-yellow-700" />
              </div>
            </div>
            
            <div className="flex items-center p-3 border rounded-md">
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-700 font-bold">
                MT
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Maria Thompson</h4>
                <p className="text-sm text-gray-500">Grade 12 • 96.8% Average</p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-yellow-100 rounded-full">
                <Award size={16} className="text-yellow-700" />
              </div>
            </div>
            
            <div className="flex items-center p-3 border rounded-md">
              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-700 font-bold">
                MZ
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Michael Zhang</h4>
                <p className="text-sm text-gray-500">Grade 8 • 96.5% Average</p>
              </div>
              <div className="flex items-center justify-center h-8 w-8 bg-yellow-100 rounded-full">
                <Award size={16} className="text-yellow-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Fee Discount Modal
  const FeeDiscountModal = () => (
    feeDiscountModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6">
          <h3 className="text-lg font-bold mb-4">Add Fee Discount</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select a student</option>
              <option value="1">Sarah Johnson - Grade 10</option>
              <option value="2">Michael Zhang - Grade 8</option>
              <option value="3">Aisha Patel - Grade 11</option>
              <option value="4">James Wilson - Grade 9</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="staff">Staff Child</option>
              <option value="merit">Merit-based</option>
              <option value="financial">Financial Aid</option>
              <option value="sibling">Sibling Discount</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Percentage</label>
            <input 
              type="number" 
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter percentage (e.g. 50)"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
            <textarea 
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Additional information"
              rows={3}
            ></textarea>
          </div>
          
          <div className="flex justify-end space-x-2 mt-6">
            <button 
              className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => setFeeDiscountModalOpen(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py