import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Briefcase, Mail, Home, User } from "lucide-react";

const CollegeDashboard = () => {
  const [expandedStudent, setExpandedStudent] = useState(null);

  const students = [
    {
      name: "John Smith",
      address: "123 University Ave, College Town",
      email: "john.smith@college.edu",
      applications: [
        { company: "Google", role: "Software Engineer", status: "Under Review" },
        { company: "Microsoft", role: "Frontend Developer", status: "Interview" },
        { company: "Amazon", role: "Full Stack Developer", status: "Applied" }
      ]
    },
    {
      name: "Emma Wilson",
      address: "456 Campus Drive, College Town",
      email: "emma.w@college.edu",
      applications: [
        { company: "Meta", role: "Data Scientist", status: "Rejected" },
        { company: "Netflix", role: "Data Analyst", status: "Accepted" },
        { company: "Apple", role: "ML Engineer", status: "Interview" }
      ]
    },
    {
      name: "Michael Chen",
      address: "789 Student Lane, College Town",
      email: "m.chen@college.edu",
      applications: [
        { company: "Adobe", role: "UX Designer", status: "Interview" },
        { company: "Figma", role: "Product Designer", status: "Applied" }
      ]
    },
    {
      name: "Sarah Johnson",
      address: "321 College Blvd, College Town",
      email: "sarah.j@college.edu",
      applications: [
        { company: "Twitter", role: "Backend Developer", status: "Applied" },
        { company: "LinkedIn", role: "Software Engineer", status: "Under Review" },
        { company: "Salesforce", role: "Cloud Engineer", status: "Interview" }
      ]
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      "Applied": "text-blue-400",
      "Under Review": "text-yellow-400",
      "Interview": "text-purple-400",
      "Accepted": "text-green-400",
      "Rejected": "text-red-400"
    };
    return colors[status] || "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pt-20 from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-gray-800 border-green-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-green-400">
              Student Job Applications Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-green-500/20 bg-gradient-to-r from-green-500/10 to-green-400/5">
              {students.map((student, index) => (
                <div key={index} className="border-b border-green-500/20 last:border-b-0">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-green-500/5"
                    onClick={() => setExpandedStudent(expandedStudent === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <User className="text-green-400" size={20} />
                      <div>
                        <h3 className="text-gray-200 font-medium">{student.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Mail size={14} className="mr-1" />
                            {student.email}
                          </div>
                          <div className="flex items-center">
                            <Home size={14} className="mr-1" />
                            {student.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    {expandedStudent === index ? 
                      <ChevronDown className="text-green-400" size={20} /> : 
                      <ChevronRight className="text-green-400" size={20} />
                    }
                  </div>
                  
                  {expandedStudent === index && (
                    <div className="p-4 bg-gray-800/50">
                      <table className="w-full">
                        <thead>
                          <tr className="text-green-400 text-sm">
                            <th className="text-left py-2 px-4">Company</th>
                            <th className="text-left py-2 px-4">Role</th>
                            <th className="text-left py-2 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {student.applications.map((app, appIndex) => (
                            <tr key={appIndex} className="hover:bg-green-500/5">
                              <td className="py-2 px-4 text-gray-200">
                                <div className="flex items-center">
                                  <Briefcase size={14} className="mr-2 text-green-400" />
                                  {app.company}
                                </div>
                              </td>
                              <td className="py-2 px-4 text-gray-300">{app.role}</td>
                              <td className={`py-2 px-4 ${getStatusColor(app.status)}`}>
                                {app.status}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegeDashboard;