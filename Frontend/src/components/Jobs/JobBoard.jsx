import React, { useState, useEffect } from 'react';
import apiClient from '../Auth/ApiClient';
import { Search, Plus, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GradientOrb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

const JobCard = ({ job, onClick }) => (
  <button
    onClick={onClick}
    className="w-full backdrop-blur-xl bg-emerald-900/30 rounded-xl p-6 border border-white/10 
    hover:border-white/20 transition-all shadow-lg mb-4 text-left group"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{job.jobTitle}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{job.description}</p>
      </div>
      <ChevronRight className="text-white/50 group-hover:text-white/80 transition-colors" />
    </div>

    <div className="flex flex-wrap gap-2 mb-3">
      {job.skillsRequired && job.skillsRequired.length > 0 ? (
        job.skillsRequired.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-emerald-800/30 text-xs text-emerald-100/70"
          >
            {skill}
          </span>
        ))
      ) : (
        <span className="text-sm text-white/50">No skills specified</span>
      )}
    </div>

    <div className="flex justify-between items-center text-sm text-white/60">
      <span>Posted by: {job.company || 'Unknown'}</span>
      {/* <span>{job.location || 'No location specified'}</span> */}
      <span
        className={`px-2 py-1 rounded-full ${job.jobStatus === 'Active'
            ? 'bg-emerald-500/20 text-emerald-300'
            : 'bg-blue-800 text-white'
          }`}
      >
        {job.jobStatus || 'OPEN'}
      </span>
    </div>
  </button>
);

const JobBoard = () => {
  const [jobs, setJobs] = useState([null]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dummyJobs = [
    {
      jobId: 1001,
      jobTitle: "Software Engineer",
      description: "Develop and maintain software applications for various platforms.",
      skillsRequired: ["Java", "Python", "C++", "Problem Solving"],
      company: "Tech Innovations Inc.",
      status: "Open"
    },
    {
      jobId: 1002,
      jobTitle: "Data Analyst",
      description: "Analyze large datasets to extract actionable insights for decision making.",
      skillsRequired: ["SQL", "Excel", "Python", "Data Visualization"],
      company: "DataTech Solutions",
      status: "Closed"
    },
    {
      jobId: 1003,
      jobTitle: "Marketing Manager",
      description: "Create and implement marketing strategies to promote products and services.",
      skillsRequired: ["SEO", "Content Marketing", "Google Analytics"],
      company: "Global Marketing LLC",
      status: "Open"
    },
    {
      jobId: 1004,
      jobTitle: "Product Manager",
      description: "Oversee the development of new products from concept to launch.",
      skillsRequired: ["Project Management", "Agile", "Communication"],
      company: "Innovate Products Co.",
      status: "Open"
    },
    {
      jobId: 1005,
      jobTitle: "UX/UI Designer",
      description: "Design user-friendly interfaces for websites and mobile apps.",
      skillsRequired: ["Adobe XD", "Figma", "HTML/CSS", "User Research"],
      company: "DesignStudio Pro",
      status: "Interview"
    },
    {
      jobId: 1006,
      jobTitle: "HR Specialist",
      description: "Manage recruitment, employee relations, and benefits administration.",
      skillsRequired: ["HR Software", "Communication", "Conflict Resolution"],
      company: "PeopleFirst Inc.",
      status: "Closed"
    },
    {
      jobId: 1007,
      jobTitle: "Financial Analyst",
      description: "Analyze financial data, prepare reports, and advise on investment decisions.",
      skillsRequired: ["Excel", "Financial Modeling", "Accounting"],
      company: "FinSolutions Corp.",
      status: "Open"
    },
    {
      jobId: 1008,
      jobTitle: "Customer Support Lead",
      description: "Oversee customer service team and ensure customer satisfaction.",
      skillsRequired: ["Communication", "Problem Solving", "CRM Tools"],
      company: "ServicePlus Ltd.",
      status: "Open"
    },
    {
      jobId: 1009,
      jobTitle: "Network Administrator",
      description: "Manage and maintain network systems and infrastructure.",
      skillsRequired: ["Networking", "VPNs", "Troubleshooting"],
      company: "NetSecure Inc.",
      status: "Open"
    },
    {
      jobId: 1010,
      jobTitle: "Sales Executive",
      description: "Drive sales strategies, manage client relationships, and close deals.",
      skillsRequired: ["Negotiation", "CRM", "Presentation Skills"],
      company: "SalesForce Global",
      status: "Closed"
    }
  ];

  const date = new Date();

    useEffect(() => {
      // const fetchJobs = async () => {
      //   setLoading(true);
      //   setError(null);
      //   try {
      //     const response = await apiClient.get(`http://localhost:8080/public/jobs`,);

      //     console.log("response",response);
      //     if (response.data?.data) {
      //       const { content, totalPages } = response.data.data;
      //       setJobs( dummyJobs);
      //       setTotalPages(totalPages || 0);
      //     }
      //   } catch (error) {
      //     console.error('Error fetching jobs:', error);
      //     setError('Failed to fetch jobs. Please try again later.');
      //   } finally {
      //     setLoading(false);
      //   }
      // };

      // fetchJobs();
      const fetchJobs=async()=>{
          setJobs( dummyJobs);
          setTotalPages(totalPages);
          setLoading(false);
      }
      fetchJobs();
  }, [page, searchQuery]);

  // useEffect(() => {
  //   async function GetJobs() {
  //     const JobDetails = await apiClient.get(`${import.meta.env.VITE_BASE_URL}/public/jobs`);
  //     setJobs(JobDetails.data);
  //   }
  //   GetJobs();
  // }, [page, searchQuery])


  const handleJobClick = (job) => {
    navigate(`/jobs/${job.jobId}`);
  };

  const filteredJobs = searchQuery
    ? jobs.filter((job) =>
      job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : jobs;



  return (
    <div className="min-h-screen bg-black text-white p-20 relative overflow-hidden">
      <GradientOrb className="w-96 h-96 bg-emerald-500 left-0 top-0" />
      <GradientOrb className="w-96 h-96 bg-green-500 right-0 bottom-0" />
      <GradientOrb className="w-64 h-64 bg-teal-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <div className="backdrop-blur-xl bg-emerald-900/30 rounded-2xl p-6 mb-6 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Job Board
            </h1>

          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-800/20 border border-emerald-700/30 rounded-xl px-4 py-3 pl-11
              focus:outline-none focus:border-emerald-600/40 transition-colors text-white placeholder-white/50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
          </div>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="text-center text-white/70">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center text-white/70">No jobs found</div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard key={job.jobId} job={job} onClick={() => handleJobClick(job)} />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`px-4 py-2 rounded-lg transition-colors ${page === index
                    ? 'bg-emerald-700/40 text-white'
                    : 'bg-emerald-800/20 text-white/70 hover:bg-emerald-700/30'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;