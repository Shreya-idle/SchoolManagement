import React from 'react';

const DashboardSection: React.FC = () => {
  const studentApplications = [
    { id: 1, name: "Lily Parker", grade: "Grade 9", parentName: "Robert Parker", appliedDate: "Feb 15, 2025", status: "Documents Pending" },
    { id: 2, name: "Ethan Williams", grade: "Grade 10", parentName: "Susan Williams", appliedDate: "Feb 14, 2025", status: "Interview Scheduled" },
    { id: 3, name: "Maya Patel", grade: "Grade 8", parentName: "Raj Patel", appliedDate: "Feb 13, 2025", status: "Application Complete" },
    { id: 4, name: "Daniel Rodriguez", grade: "Grade 11", parentName: "Maria Rodriguez", appliedDate: "Feb 11, 2025", status: "Under Review" }
  ];

  const teacherApplications = [
    { id: 1, name: "Dr. Amanda Johnson", subject: "Mathematics", experience: "8 years", appliedDate: "Feb 10, 2025", status: "Under Review" },
    { id: 2, name: "Mr. Thomas Chen", subject: "Physics", experience: "5 years", appliedDate: "Feb 12, 2025", status: "Interview Scheduled" },
    { id: 3, name: "Ms. Sarah Miller", subject: "English Literature", experience: "7 years", appliedDate: "Feb 8, 2025", status: "Shortlisted" }
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Recent Student Applications</h3>
      <ul>
        {studentApplications.map(app => (
          <li key={app.id}>{app.name} - {app.status}</li>
        ))}
      </ul>
      <h3>Recent Teacher Applications</h3>
      <ul>
        {teacherApplications.map(app => (
          <li key={app.id}>{app.name} - {app.status}</li>
        ))}
      </ul>
    </div>
  );
};


export default DashboardSection;
