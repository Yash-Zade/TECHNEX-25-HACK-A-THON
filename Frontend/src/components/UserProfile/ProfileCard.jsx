import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import WalletComponent from "../Wallet/Wallet.jsx";
import apiClient from "../Auth/ApiClient";
import { useNavigate } from "react-router-dom";

const GradientOrb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

const Modal = ({ isOpen, onClose, title, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-white/20 rounded-xl p-6 w-full max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/60 hover:text-white"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const RoleModal = ({ isOpen, onClose, role ,id}) => {
  const [formData, setFormData] = useState({
    expertise: "",
    yearsOfExperience: "",
    companyName: "",
    website: "",
  });
  console.log("ID:",id);
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    if(role==="mentor"){
      try {
          const response = await apiClient.post(`applicants/request/mentor` , formData);
          console.log("API Response:", response.data); // Add this for debugging
          if(response.data){
            console.log("Mentor added successfully");
          }
      } catch (error) {
        console.log("Error adding mentor:", error);
      }
    }
    else if(role==="employer"){
      try {
          const response = await apiClient.post(`applicants/request/employer` , formData);
          console.log("API Response:", response.data); // Add this for debugging
          if(response.data){
            console.log("Employer added successfully");
          }
      } catch (error) {
          console.log("Error adding employer:", error);
      }
    }
    onClose();
  };
  
  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={role === "mentor" ? "Become a Mentor" : "Register as Employer"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {role === "mentor" ? (
          <>
            <div>
              <label className="block text-sm text-white/60 mb-1">Expertise</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                value={formData.expertise}
                onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Years of Experience</label>
              <input
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                value={formData.yearsOfExperience}
                onChange={(e) =>
                  setFormData({ ...formData, yearsOfExperience: e.target.value })
                }
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm text-white/60 mb-1">Company Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm text-white/60 mb-1">Website</label>
              <input
                type="url"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const dummyData = {
    applicants: [
      {
        applicantId: 1,
        name: "John Doe",
        skills: ["JavaScript", "React", "Node.js", "CSS"],
        preferredLocations: ["New York", "San Francisco", "Remote"],
        jobApplications: [
          { jobId: 1001, status: "Applied" },
          { jobId: 1003, status: "Interview Scheduled" }
        ]
      },
      {
        applicantId: 2,
        name: "Jane Smith",
        skills: ["Python", "Data Analysis", "SQL", "Machine Learning"],
        preferredLocations: ["Austin", "Seattle", "Remote"],
        jobApplications: [
          { jobId: 1002, status: "Applied" },
          { jobId: 1007, status: "Rejected" }
        ]
      },
      {
        applicantId: 3,
        name: "Michael Johnson",
        skills: ["Marketing", "SEO", "Content Creation", "Google Analytics"],
        preferredLocations: ["Chicago", "Boston", "Remote"],
        jobApplications: [
          { jobId: 1003, status: "Applied" },
          { jobId: 1010, status: "Hired" }
        ]
      },
      {
        applicantId: 4,
        name: "Emily Brown",
        skills: ["Java", "Spring Boot", "Kubernetes", "Docker"],
        preferredLocations: ["Los Angeles", "Denver", "Remote"],
        jobApplications: [
          { jobId: 1001, status: "Rejected" },
          { jobId: 1009, status: "Interview Scheduled" }
        ]
      },
      {
        applicantId: 5,
        name: "Sophia Davis",
        skills: ["UI/UX Design", "Adobe XD", "Figma", "User Research"],
        preferredLocations: ["San Diego", "New York", "Remote"],
        jobApplications: [
          { jobId: 1005, status: "Hired" },
          { jobId: 1008, status: "Applied" }
        ]
      }
    ]
  };
  

  useEffect(() => {
    const getProfile = async () => {
      try {
        // const response = await apiClient.get("http://localhost:8080/applicants/profile");
        // console.log("API Response:", response.data); // Add this for debugging
        // if (response.data) {
        //   setProfile(response.data.data);
        // }
        setProfile(dummyData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    getProfile();
  }, []);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
    setShowRoleModal(true);
  };

  const handleMentorRole = () => {
    navigate('/mentor-profile/');
  };

  const handleEmployerRole = () => {
    navigate('/employer-profile/');
  };

  // Check loading and error states first
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <p>No profile data available</p>
      </div>
    );
  }

  // Destructure with default values for all properties
  console.log("Profile:", profile); // Add this for debugging
  const {
    applicantId = '',
    skills = [],
    preferredLocations = [],
    jobApplications = [],
    user = {}
  } = profile || {};
  console.log("Applicant ID:",applicantId)
  const { 
    name = 'No name available',
    email = 'No email available',
    roles = []
  } = user || {};

  // Add this for debugging

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden p-4 md:p-8">
      <GradientOrb className="w-96 h-96 bg-purple-500 left-0 top-0" />
      <GradientOrb className="w-96 h-96 bg-blue-500 right-0 bottom-0" />
      <GradientOrb className="w-64 h-64 bg-pink-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-6xl">
        <div className="backdrop-blur-xl bg-gray-900/30 rounded-3xl p-4 md:p-6 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Applicant Profile
            </h1>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <WalletComponent />
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition-colors"
                >
                  <span>Select Role</span>
                  <ChevronDown size={20} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-white/10 overflow-hidden">
                    <button
                      onClick={() => handleRoleSelect("mentor")}
                      className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                    >
                      Become a Mentor
                    </button>
                    <button
                      onClick={() => handleRoleSelect("employer")}
                      className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors"
                    >
                      Register as Employer
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-2 flex flex-col justify-start">
                  <p><span className="text-white/60">Name:</span> {name}</p>
                  <p><span className="text-white/60">Email:</span> {email}</p>
                </div>
              </div>

            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.length>0 && skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white/10 rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {skills.length === 0 && <p className="w-full flex justify-center items-center">No skills specified</p>}
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Preferred Locations</h2>
                <div className="space-y-2">
                  {preferredLocations.length > 0 ? (
                    preferredLocations.map((location, index) => (
                      <p key={index}>{location}</p>
                    ))
                  ) : (
                    <p>No preferred locations specified</p>
                  )}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Current Role</h2>
                <div className="flex flex-col justify-start">
                {roles.map((roleItem, index) => (
                  <p key={index} className="capitalize">{roleItem || "No role selected"}</p>
                ))}
                </div>
                
              </div>
              {roles.length >1 && (
                  <div className="flex">
                  {roles.map((roleItem, index) =>(
                    <div key={index} className="bg-white/5 rounded-xl pt-2 pb-2 border border-white/10 w-2/4 m-4">
                    {roleItem === "Mentor" && (
                      <button onClick={() => handleMentorRole("mentor")}>
                        Go to Mentor Profile
                      </button>
                    )}
                    {
                      roleItem ==="Employer" && (
                        <button onClick={() => handleEmployerRole("employer")}>
                          Go to Employer Profile
                        </button>
                    )}  
                    
                  </div>
                  ))}
                  </div>
              )}
              
            </div>
          </div>
        </div>
      </div>

      <RoleModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        role={selectedRole}
        id={applicantId}
      />
    </div>
  );
};

export default UserProfile;