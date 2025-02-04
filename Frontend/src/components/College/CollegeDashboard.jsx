import React, { useState } from 'react';
import WalletComponent from "../Wallet/Wallet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Briefcase, Mail, Home, User, MapPin, Globe, GraduationCap } from "lucide-react";

const CollegeDashboard = () => {
  const [expandedStudent, setExpandedStudent] = useState(null);

  const collegeProfile = {
    name: "Innovate Tech University",
    location: "College Town, State 12345",
    established: 1985,
    description: "A leading institution committed to innovative education and technology leadership.",
    stats: {
      students: 5200,
      programs: 42,
      internshipRate: 87
    }
  };

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
      "Interview": "text-green-400",
      "Accepted": "text-emerald-400",
      "Rejected": "text-red-400"
    };
    return colors[status] || "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-400/20 rounded-full mix-blend-screen filter blur-3xl animate-float-delay" />
        <div className="absolute bottom-0 left-1/3 w-88 h-88 bg-green-300/20 rounded-full mix-blend-screen filter blur-3xl animate-float-long" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 bg-gray-900/10 border-gray-800 shadow-xl backdrop-blur-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-green-500 flex items-center">
              <GraduationCap className="mr-3 text-green-500" size={24} />
              {collegeProfile.name}
              <div className='pl-10'>
                <WalletComponent />
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="mr-2 text-green-500" size={16} />
                  <span>{collegeProfile.location}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Globe className="mr-2 text-green-500" size={16} />
                  Established: {collegeProfile.established}
                </div>
                <p className="text-gray-400 mb-4">{collegeProfile.description}</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="text-green-500 font-semibold mb-3">Quick Stats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-300">Total Students</span>
                    <span className="text-green-300">{collegeProfile.stats.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">Academic Programs</span>
                    <span className="text-green-300">{collegeProfile.stats.programs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">Internship Rate</span>
                    <span className="text-green-300">{collegeProfile.stats.internshipRate}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg border border-gray-800 bg-gray-800/20">
              <div className="p-4 mb-4">
                <h2 className="text-xl text-green-500 font-medium">Student Job Applications Dashboard</h2>
              </div>
              {students.map((student, index) => (
                <div key={index} className="border-b border-gray-800 last:border-b-0">
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800/50 transition-colors"
                    onClick={() => setExpandedStudent(expandedStudent === index ? null : index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        <User className="text-green-500" size={20} />
                      </div>
                      <div>
                        <h3 className="text-gray-100 font-medium">{student.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Mail size={14} className="mr-1 text-green-500" />
                            {student.email}
                          </div>
                          <div className="flex items-center">
                            <Home size={14} className="mr-1 text-green-500" />
                            {student.address}
                          </div>
                        </div>
                      </div>
                    </div>
                    {expandedStudent === index ? 
                      <ChevronDown className="text-green-500" size={20} /> : 
                      <ChevronRight className="text-green-500" size={20} />
                    }
                  </div>
                  
                  {expandedStudent === index && (
                    <div className="p-4 bg-gray-800/30 rounded-lg m-4">
                      <table className="w-full">
                        <thead>
                          <tr className="text-green-500 text-sm">
                            <th className="text-left py-2 px-4">Company</th>
                            <th className="text-left py-2 px-4">Role</th>
                            <th className="text-left py-2 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {student.applications.map((app, appIndex) => (
                            <tr key={appIndex} className="hover:bg-gray-800/50 transition-colors">
                              <td className="py-3 px-4 text-gray-100">
                                <div className="flex items-center">
                                  <Briefcase size={14} className="mr-2 text-green-500" />
                                  {app.company}
                                </div>
                              </td>
                              <td className="py-3 px-4 text-gray-300">{app.role}</td>
                              <td className={`py-3 px-4 ${getStatusColor(app.status)}`}>
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