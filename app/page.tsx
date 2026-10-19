"use client";

import React, { useState } from 'react';

// Built-in SVG Icons
const TrophyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const MicIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" x2="17" y1="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Page() {
  const [activeProject, setActiveProject] = useState(0);
  const [forecastTriggered, setForecastTriggered] = useState(false);
  const [selectedRiskMetric, setSelectedRiskMetric] = useState(0);
  const [clustersGenerated, setClustersGenerated] = useState(false);
  const [isBallKicked, setIsBallKicked] = useState(false);
  const [ballScore, setBallScore] = useState(2);
  const [speakingActive, setSpeakingActive] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Automatic photo rotation timer (2 seconds each) for football celebration popup
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBallKicked) {
      setActivePhotoIndex(0);
      interval = setInterval(() => {
        setActivePhotoIndex((prev) => (prev + 1) % 3);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isBallKicked]);

  const projects = [
    {
      id: 1,
      badge: "Full-Stack Retail AI • Live on Vercel",
      title: "AI Retail Intelligence Platform",
      tagline: "Sales Analytics, Smart Inventory Monitoring & ARIMA Demand Forecasting",
      description: "Full-stack retail analytics application built with FastAPI, PostgreSQL/SQLAlchemy (9 REST API endpoints), and a React.js + Vite + Recharts frontend. Features CSV data pipelines, low-stock detection, Apriori association-rule mining, smart restocking recommendations, ARIMA time-series demand forecasting, and PDF report exports.",
      tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "SQLAlchemy", "ARIMA", "Apriori", "Recharts", "Vercel"],
      metrics: [
        { label: "Inventory Tracked", value: "1,065 Items" },
        { label: "Sample Valuation", value: "₹31.50L" },
        { label: "Backend Architecture", value: "9 REST APIs" }
      ],
      github: "https://github.com/seelasuraj/ai-retail-intelligence-platform",
      live: "https://ai-retail-intelligence-platform.vercel.app/"
    },
    {
      id: 2,
      badge: "Quantitative Financial Analytics",
      title: "Bluestock Mutual Fund Analytics Platform",
      tagline: "Risk-Adjusted Performance Engine & Star-Schema SQL Warehouse",
      description: "Comprehensive mutual fund intelligence system analyzing ~40 mutual fund schemes (HDFC, SBI, ICICI Prudential, Nippon India, Axis, Kotak) and 46,000+ NAV records via AMFI & MFAPI. Engineered a star-schema SQLite warehouse, 10 analytical SQL queries, risk-adjusted return engines (CAGR, Sharpe, Alpha, Beta, Max Drawdown, VaR, CVaR), scheme recommendation logic, and Power BI SIP dashboards.",
      tech: ["Python", "Pandas", "SQLite (Star Schema)", "SQL", "Power BI", "AMFI / MFAPI", "Quantitative Risk"],
      metrics: [
        { label: "Historical NAVs", value: "46,000+" },
        { label: "MF Schemes", value: "40+ Funds" },
        { label: "SIP Dataset Context", value: "₹31,002 Cr" }
      ],
      github: "https://github.com/seelasuraj/bluestock_mf_capstone",
      live: ""
    },
    {
      id: 3,
      badge: "Equity Screening & Unsupervised ML",
      title: "N100 Financial Intelligence Platform",
      tagline: "10-Year Nifty 100 Equity Screener with PCA & K-Means Clustering",
      description: "Financial analysis and stock-screening application evaluating 90+ Nifty 100 companies using 10 years of historical data and 20+ valuation metrics. Built with Python, FastAPI, and Streamlit, applying Scikit-learn's Principal Component Analysis (PCA) and K-Means clustering to uncover company-level risk and growth patterns.",
      tech: ["Python", "FastAPI", "Streamlit", "Scikit-Learn", "PCA", "K-Means Clustering", "Automated Testing"],
      metrics: [
        { label: "Equities Screened", value: "90+ Nifty 100" },
        { label: "Historical Depth", value: "10 Years" },
        { label: "Test Suite Pass", value: "64 / 64 (100%)" }
      ],
      github: "https://github.com/seelasuraj",
      live: ""
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      tag: "Cloud & Data Science",
      desc: "Validated expertise in building AI/ML models and managing end-to-end data science workflows on OCI.",
      proofFile: "/certificates/oci-datascience.png"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      tag: "AI Foundations",
      desc: "Certified in foundational artificial intelligence, machine learning concepts, and OCI AI cloud services.",
      proofFile: "/certificates/oracle-ai.png"
    },
    {
      title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
      issuer: "Udemy (Krish Naik)",
      tag: "Machine Learning & NLP",
      desc: "101.5-hour comprehensive bootcamp covering end-to-end data science lifecycle and NLP techniques.",
      proofFile: "/certificates/udemy.png"
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL / SWAYAM (IIT Roorkee)",
      tag: "Data Analysis & Statistics",
      desc: "12-week course covering Python libraries (Pandas, Matplotlib, NumPy) and statistical analysis.",
      proofFile: "/certificates/nptel-python.jpg"
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      tag: "Agentic AI & CRM",
      desc: "Specialist credential for building and deploying autonomous Agentforce agents in the Salesforce platform.",
      proofFile: "/certificates/salesforce-agentforce.png"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      tag: "Business Analytics Simulation",
      desc: "Completed practical tasks in data analysis, visualization, and forensic technology using real-world datasets.",
      proofFile: "/certificates/deloitte-simulation.png"
    },
    {
      title: "IEEE Section Student Congress '25 (Certificate & Badge)",
      issuer: "IEEE Hyderabad Section",
      tag: "Leadership & Volunteering",
      desc: "Official Certificate of Appreciation and Volunteer ID badge awarded for dedicated service during the Section Student Congress '25 hosted at Vardhaman College.",
      proofFile: "/certificates/ieee-appreciation-suraj.jpg",
      badgeFile: "/certificates/ieee-volunteer-id.jpg"
    }
  ];

  const handleKickBall = () => {
    if (isBallKicked) return;
    setIsBallKicked(true);
    setBallScore((prev) => prev + 1);
    setTimeout(() => {
      setIsBallKicked(false);
    }, 6500);
  };

  return (
    <div className="min-h-screen bg-[#0d0705] text-stone-100 font-sans selection:bg-orange-500 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-orange-500/20 rounded-full blur-[160px]" />
        <div className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] bg-amber-500/15 rounded-full blur-[150px]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0705]/90 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-300 flex items-center justify-center font-black text-xl text-stone-950 shadow-lg shadow-orange-600/30">
              S
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white uppercase">
                SEELA VENKATA NAGA SURAJ
              </span>
              <span className="hidden lg:inline-block text-[10px] uppercase tracking-wider text-orange-400 font-semibold px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40">
                CSE (DATA SCIENCE) • VARDHAMAN (&apos;27)
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-5 text-xs font-semibold tracking-wide">
            <a href="#experience" className="hidden sm:inline-block text-stone-300 hover:text-orange-400 transition-colors uppercase">
              EXPERIENCE
            </a>
            <a href="#projects" className="text-stone-300 hover:text-orange-400 transition-colors uppercase">
              CREATIONS
            </a>
            <a href="#certifications" className="hidden md:inline-block text-stone-300 hover:text-orange-400 transition-colors uppercase">
              CERTIFICATIONS
            </a>
            <a href="#achievements" className="text-stone-300 hover:text-orange-400 transition-colors uppercase">
              SPORTS
            </a>
            <a href="#leadership" className="text-stone-300 hover:text-orange-400 transition-colors uppercase">
              LEADERSHIP
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xs uppercase shadow-md shadow-orange-600/30 hover:brightness-110 active:scale-95 transition-all"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden z-10 px-6 py-12">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30 transform scale-105"
            style={{ backgroundImage: `url('/IMAGE.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0705] via-[#0d0705]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-transparent to-orange-950/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500" />
              <img 
                src="/IMAGE.png" 
                alt="Seela Venkata Naga Suraj" 
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-amber-300 bg-stone-900 shadow-2xl"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1b0b06] border border-orange-500/40 text-orange-300 text-xs font-semibold tracking-wider mb-8 shadow-inner shadow-orange-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            DATA SCIENCE &amp; AI ENGINEER • BLUESTOCK FINTECH INTERN • IEEE CIS VICE CHAIR
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">HELLO, I&apos;M </span>
            <span className="relative inline-block bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              SURAJ
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-orange-500/80" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0,6 Q12,0 25,6 T50,6 T75,6 T100,6" />
              </svg>
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-300 leading-relaxed font-normal mb-8 mt-6">
            Final-year B.Tech CSE (Data Science) undergraduate at <span className="text-white font-semibold">Vardhaman College of Engineering</span>  bridging full-stack data analytics, machine learning, financial intelligence, and client-facing technology consulting.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
            <div className="p-3 rounded-2xl bg-stone-900/80 border border-orange-500/30">
              <div className="text-xl sm:text-2xl font-black text-amber-300">8.34 CGPA</div>
              <div className="text-[11px] text-stone-400 uppercase font-mono">B.Tech CSE (DS) • 99% Class X</div>
            </div>
            <div className="p-3 rounded-2xl bg-stone-900/80 border border-orange-500/30">
              <div className="text-xl sm:text-2xl font-black text-orange-400">50,000+</div>
              <div className="text-[11px] text-stone-400 uppercase font-mono">Financial Records Processed</div>
            </div>
            <div className="p-3 rounded-2xl bg-stone-900/80 border border-orange-500/30">
              <div className="text-xl sm:text-2xl font-black text-red-400">2x Champion</div>
              <div className="text-[11px] text-stone-400 uppercase font-mono">Inter-College Football </div>
            </div>
            <div className="p-3 rounded-2xl bg-stone-900/80 border border-orange-500/30">
              <div className="text-xl sm:text-2xl font-black text-amber-300">Vice Chair</div>
              <div className="text-[11px] text-stone-400 uppercase font-mono">IEEE CIS Student Chapter</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-stone-950 font-black tracking-wide text-sm shadow-xl shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ChevronRightIcon />
            </a>
            <a 
              href="#certifications" 
              className="px-8 py-3.5 rounded-2xl bg-[#140b08] hover:bg-stone-900 border border-orange-500/30 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg"
            >
              <TrophyIcon />
              <span>Certifications &amp; Proofs</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="py-20 relative z-10 px-6 max-w-7xl mx-auto border-t border-orange-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-gradient-to-b from-stone-900/90 to-[#140b08]/90 border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
              Professional Experience
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Data Analyst Intern • Bluestock Fintech</h3>
              <span className="text-xs font-mono text-amber-300 bg-stone-950 px-3 py-1 rounded-full border border-orange-500/30">
                June 2026 – Present
              </span>
            </div>
            <p className="text-sm text-orange-300 font-semibold mb-6">
              Financial Data Engineering, ETL Workflows &amp; Executive Power BI Reporting
            </p>
            <ul className="space-y-3 text-sm text-stone-300 leading-relaxed mb-6">
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 mt-1"><CheckIcon /></span>
                <span>Processed, cleaned, and structured <strong>50,000+ financial records</strong> using Python, Pandas, SQL, SQLite, and PostgreSQL to power investment analytics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 mt-1"><CheckIcon /></span>
                <span>Designed and deployed <strong>4+ interactive Microsoft Power BI dashboards</strong> tracking financial KPIs, SIP inflow trends, and portfolio risk metrics.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-orange-400 mt-1"><CheckIcon /></span>
                <span>Collaborated via Git and REST API workflows to transform raw market feeds into production-ready analytical schemas.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "Pandas", "Power BI", "PostgreSQL", "SQLite", "REST APIs", "Git"].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-stone-950 text-orange-300 text-xs font-mono rounded-lg border border-orange-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-900/70 border border-orange-500/20 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                Academic Foundation
              </div>
              <h3 className="text-xl font-black text-white mb-1">
                Vardhaman College of Engineering (JNTUH)
              </h3>
              <p className="text-xs text-amber-300 font-mono mb-4">
                B.Tech in CSE (Data Science) • Sept 2023 – May 2027
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800 flex justify-between items-center">
                  <span className="text-xs text-stone-300">Undergraduate CGPA</span>
                  <span className="text-sm font-black text-amber-300">8.34 / 10.0</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800 flex justify-between items-center">
                  <span className="text-xs text-stone-300">Class XII (MPC Stream)</span>
                  <span className="text-sm font-bold text-orange-400">83%</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800 flex justify-between items-center">
                  <span className="text-xs text-stone-300">Class X (SSC)</span>
                  <span className="text-sm font-black text-emerald-400">99%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs text-stone-300 leading-relaxed">
              <strong className="text-orange-300 block mb-1">🎯 Career &amp; Consulting Focus:</strong>
              Combining deep Python/SQL analytics with business intelligence, ERP/SAP processes, and client-facing consulting to bridge technical engineering with executive decision-making.
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROJECTS ENGINE */}
      <section id="projects" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-orange-500/20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            <TerminalIcon />
            Interactive Portfolio Engine
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Flagship Creations &amp; <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Live Simulations</span>
          </h2>
          <p className="text-stone-400 mt-3 text-base">
            Click numbers <strong>1, 2, or 3</strong> below to inspect architecture specs and interact with each project&apos;s simulation engine.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            {projects.map((proj, idx) => {
              const isSelected = activeProject === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl font-black text-xl transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 text-stone-950 scale-110 shadow-xl shadow-orange-600/50 ring-4 ring-orange-400/40' 
                      : 'bg-stone-900/90 text-stone-300 border border-orange-500/20 hover:border-orange-500/60 hover:text-white'
                  }`}
                >
                  <span>{idx + 1}</span>
                  {isSelected && (
                    <span className="absolute -bottom-2 w-3 h-3 bg-amber-400 rotate-45 rounded-sm" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-gradient-to-b from-stone-900/90 to-[#140b08]/90 border border-orange-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-extrabold text-orange-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-500/30">
                  {projects[activeProject].badge}
                </span>
                <span className="text-xs text-stone-500 font-mono">0{activeProject + 1} / 0{projects.length}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm font-semibold text-orange-300/90 mb-4">
                {projects[activeProject].tagline}
              </p>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-stone-800/80 text-stone-200 text-xs font-medium rounded-lg border border-stone-700/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-orange-500/20 pt-6">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {projects[activeProject].metrics.map((m, idx) => (
                  <div key={idx} className="bg-stone-950/60 p-3 rounded-xl border border-stone-800/80 text-center">
                    <div className="text-sm sm:text-base font-black text-amber-300">{m.value}</div>
                    <div className="text-[10px] uppercase font-semibold text-stone-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {projects[activeProject].live && (
                  <a 
                    href={projects[activeProject].live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:brightness-110 transition-all"
                  >
                    Live Vercel App <ArrowUpRightIcon />
                  </a>
                )}
                <a 
                  href={projects[activeProject].github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-stone-950 border border-orange-500/40 text-orange-300 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <GithubIcon /> GitHub Repo <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0b0503] border border-orange-500/40 rounded-3xl p-6 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[460px]">
            <div className="flex items-center justify-between pb-4 border-b border-orange-500/20 z-20">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                INTERACTIVE TELEMETRY: {projects[activeProject].title.toUpperCase()}
              </div>
            </div>

            {activeProject === 0 && (
              <div className="flex-1 flex flex-col justify-between my-4 bg-stone-950/90 rounded-2xl border border-stone-800 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <div className="text-xs font-mono text-orange-400 font-bold">ARIMA DEMAND FORECASTER (LAPTOP SKU)</div>
                    <div className="text-[11px] text-stone-400">Historical Series: [10, 12, 15, 18, 22] ➔ Next-Period Prediction</div>
                  </div>
                  <button
                    onClick={() => setForecastTriggered(!forecastTriggered)}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
                  >
                    {forecastTriggered ? "Reset Forecast" : "▶ Run ARIMA Forecast"}
                  </button>
                </div>

                <div className="flex items-end justify-between h-44 gap-4 px-4 pt-6 border-b border-orange-500/30">
                  {[
                    { period: "P1", units: 10, h: "40%" },
                    { period: "P2", units: 12, h: "48%" },
                    { period: "P3", units: 15, h: "60%" },
                    { period: "P4", units: 18, h: "72%" },
                    { period: "P5", units: 22, h: "88%" },
                    { period: "ARIMA (P6)", units: 24, h: forecastTriggered ? "98%" : "15%", predicted: true }
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className={`text-xs font-mono font-bold ${item.predicted ? 'text-amber-300' : 'text-stone-300'}`}>
                        {item.predicted && !forecastTriggered ? "?" : `${item.units}u`}
                      </span>
                      <div 
                        style={{ height: item.h }} 
                        className={`w-full rounded-t-lg transition-all duration-700 ${
                          item.predicted 
                            ? 'bg-gradient-to-t from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/40 border border-white/40' 
                            : 'bg-gradient-to-t from-red-600 to-orange-500'
                        }`}
                      />
                      <span className="text-[10px] font-mono text-stone-400">{item.period}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                    <span className="text-stone-400 block text-[10px]">TOTAL INVENTORY VALUE</span>
                    <span className="text-amber-300 font-bold">₹31,50,300</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                    <span className="text-stone-400 block text-[10px]">AVG ITEM VALUE</span>
                    <span className="text-orange-300 font-bold">₹10,256.50</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-red-950/50 border border-red-500/40">
                    <span className="text-red-300 block text-[10px]">APRIORI &amp; STOCK ALERT</span>
                    <span className="text-white font-bold">RESTOCK: +24 UNITS</span>
                  </div>
                </div>
              </div>
            )}

            {activeProject === 1 && (
              <div className="flex-1 flex flex-col justify-between my-4 bg-stone-950/90 rounded-2xl border border-stone-800 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <div className="text-xs font-mono text-orange-400 font-bold">STAR-SCHEMA MF RISK ENGINE (40+ SCHEMES)</div>
                    <div className="text-[11px] text-stone-400">HDFC • SBI • ICICI Prudential • Nippon • Axis • Kotak</div>
                  </div>
                  <div className="flex gap-1.5">
                    {["Sharpe & Alpha", "VaR & CVaR", "SIP Inflow"].map((tab, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedRiskMetric(idx)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                          selectedRiskMetric === idx 
                            ? 'bg-orange-500 text-stone-950' 
                            : 'bg-stone-900 text-stone-400 border border-stone-800'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 my-4">
                  {[
                    { name: "CAGR & Rolling Return", val: selectedRiskMetric === 0 ? "18.6%" : "16.2%", w: "84%" },
                    { name: "Sharpe Ratio (Risk-Adjusted)", val: selectedRiskMetric === 0 ? "1.48" : "1.32", w: "76%" },
                    { name: "Max Drawdown & 95% VaR / CVaR", val: selectedRiskMetric === 1 ? "-8.4% (Low Risk)" : "-11.2%", w: "62%" }
                  ].map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-stone-900/90 border border-stone-800">
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-stone-300">{metric.name}</span>
                        <span className="text-amber-300 font-bold">{metric.val}</span>
                      </div>
                      <div className="w-full h-2 bg-stone-950 rounded-full overflow-hidden">
                        <div style={{ width: metric.w }} className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-orange-950/30 border border-orange-500/30 text-xs font-mono text-stone-300 flex items-center justify-between">
                  <span>📊 Power BI Context: ₹31,002 Cr SIP Inflow (Dec 2025)</span>
                  <span className="text-amber-300 font-bold">5,000 Investors • 12 States</span>
                </div>
              </div>
            )}

            {activeProject === 2 && (
              <div className="flex-1 flex flex-col justify-between my-4 bg-stone-950/90 rounded-2xl border border-stone-800 p-6 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-orange-400 font-bold block">PCA + K-MEANS NIFTY 100 CLUSTERING</span>
                    <span className="text-[11px] text-stone-400">90+ Companies • 10 Yrs Data • 20+ Financial Ratios</span>
                  </div>
                  <button
                    onClick={() => setClustersGenerated(!clustersGenerated)}
                    className="px-3 py-1.5 rounded-lg bg-orange-500 text-stone-950 font-bold text-xs hover:brightness-110 transition-all"
                  >
                    {clustersGenerated ? "Reset Clusters" : "Run K-Means"}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className={`p-3 rounded-xl border transition-all duration-500 ${clustersGenerated ? 'bg-emerald-950/40 border-emerald-500/50 scale-105' : 'bg-stone-900 border-stone-800'}`}>
                    <div className="text-emerald-400 font-bold mb-1">Cluster 0: High ROE</div>
                    <div className="text-[11px] text-stone-300">Low Debt, High Momentum Leaders (32 Equities)</div>
                  </div>
                  <div className={`p-3 rounded-xl border transition-all duration-500 ${clustersGenerated ? 'bg-amber-950/40 border-amber-500/50 scale-105' : 'bg-stone-900 border-stone-800'}`}>
                    <div className="text-amber-300 font-bold mb-1">Cluster 1: Value Core</div>
                    <div className="text-[11px] text-stone-300">Stable Dividend &amp; P/E Undervalued (41 Equities)</div>
                  </div>
                  <div className={`p-3 rounded-xl border transition-all duration-500 ${clustersGenerated ? 'bg-red-950/40 border-red-500/50 scale-105' : 'bg-stone-900 border-stone-800'}`}>
                    <div className="text-red-400 font-bold mb-1">Cluster 2: High Beta</div>
                    <div className="text-[11px] text-stone-300">Cyclical &amp; High Volatility Growth (19 Equities)</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-emerald-500/40 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">✓ PYTEST AUTOMATED SUITE: 64 / 64 TESTS PASSING</span>
                  <span className="text-white bg-emerald-600/30 px-2.5 py-0.5 rounded border border-emerald-500/40">100% PASS RATE</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-orange-500/20 text-xs text-stone-400 font-mono">
              <span className="flex items-center gap-1.5 text-stone-300">
                <CheckIcon /> Verified Portfolio Architecture
              </span>
              <a 
                href={projects[activeProject].github} 
                target="_blank" 
                rel="noreferrer"
                className="text-orange-400 hover:text-white flex items-center gap-1 font-bold underline decoration-orange-500"
              >
                Inspect Source Code <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & VERIFIED PROOFS SECTION */}
      <section id="certifications" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-orange-500/20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            Verified Credentials &amp; Continuous Learning
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Certifications &amp; <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Proof Gallery</span>
          </h2>
          <p className="text-stone-400 mt-3 text-sm">
            Click any certificate or badge button to inspect official verification proof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-b from-stone-900/90 to-[#140b08]/90 border border-orange-500/30 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-400 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-950/80 text-orange-300 border border-orange-500/30">
                    {cert.tag}
                  </span>
                  <span className="text-xs font-semibold text-amber-300">{cert.issuer}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-orange-500/20 flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckIcon /> Verified
                </span>
                
                <div className="flex items-center gap-2">
                  <a 
                    href={cert.proofFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-stone-950 hover:bg-orange-600 hover:text-stone-950 text-orange-300 border border-orange-500/40 text-xs font-bold transition-all flex items-center gap-1"
                  >
                    <span>📜 Certificate</span>
                    <ArrowUpRightIcon />
                  </a>

                  {cert.badgeFile && (
                    <a 
                      href={cert.badgeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-stone-950 hover:bg-amber-500 hover:text-stone-950 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all flex items-center gap-1"
                    >
                      <span>🏷️ Badge</span>
                      <ArrowUpRightIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ATHLETIC EXCELLENCE (FOOTBALL) SECTION */}
      <section id="achievements" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-orange-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              <TrophyIcon />
              Athletic Excellence &amp; Teamwork
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              2x Inter-College <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Football Champion
              </span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              Represented the college football team across competitive inter-collegiate tournaments in Hyderabad, securing <strong>Two Tournament Championships 🏆🏆</strong> and <strong>One Runner-Up Finish 🥈</strong>.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/80 border border-orange-500/30">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-lg">
                  2x
                </div>
                <div>
                  <div className="text-white font-bold text-sm">2 Championships &amp; 1 Runner-Up</div>
                  <div className="text-xs text-stone-400">Hyderabad Inter-College Football Tournaments</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-gradient-to-b from-[#0a180b] to-[#050e06] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-emerald-300">CHAMPIONSHIP PENALTY STRIKE ZONE</span>
              </div>
              <div className="text-xs font-mono font-bold text-amber-300 bg-stone-950/80 px-3 py-1 rounded-full border border-emerald-500/40">
                TROPHIES &amp; GOALS: {ballScore} 🏆
              </div>
            </div>

            <div className="relative h-64 sm:h-72 bg-[#0d2812] rounded-2xl border border-emerald-400/30 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
              <div className="relative z-10 w-48 mx-auto h-10 border-t-4 border-l-4 border-r-4 border-white/90 bg-white/10 flex items-center justify-center">
                <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">TARGET GOAL NET</span>
              </div>

              <div className="relative z-20 flex flex-col items-center justify-end h-full">
                <div 
                  className={`transition-all ${
                    isBallKicked 
                      ? '-translate-y-44 scale-75 rotate-[720deg] duration-700 ease-out' 
                      : 'translate-y-0 scale-100 rotate-0 duration-300'
                  }`}
                >
                  <div 
                    className="relative w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-stone-800 overflow-hidden cursor-pointer"
                    onClick={handleKickBall}
                  >
                    <div className="w-6 h-6 bg-stone-900 rounded-sm transform rotate-45" />
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-stone-900 rounded-full" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-stone-900 rounded-full" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-stone-900 rounded-full" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-stone-900 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="w-3 h-3 bg-white rounded-full mx-auto" />
            </div>

            {/* REAL FOOTBALL PHOTO & MEDAL POPUP (AUTO-SCROLLS EVERY 2 SECONDS) */}
            {isBallKicked && (
              <div className="absolute inset-0 z-30 bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-6 animate-fadeIn">
                <div className="text-amber-400 font-black text-2xl mb-1">GOAL! ⚽ 2x CHAMPION WIN!</div>
                <p className="text-xs text-stone-300 mb-3 font-mono">
                  Showing Moment {activePhotoIndex + 1} of 3 (Auto-rotating every 2s):
                </p>
                
                <div className="max-w-md w-full mb-3 flex flex-col items-center">
                  {activePhotoIndex === 0 && (
                    <img 
                      src="/football-team.jpg" 
                      alt="Football Team Champions" 
                      className="w-full h-56 object-cover rounded-2xl border-2 border-amber-400 shadow-2xl transition-all duration-500"
                    />
                  )}
                  {activePhotoIndex === 1 && (
                    <img 
                      src="/football-trophy.jpg" 
                      alt="Trophy Lift Tejas 2024" 
                      className="w-full h-56 object-cover rounded-2xl border-2 border-amber-400 shadow-2xl transition-all duration-500"
                    />
                  )}
                  {activePhotoIndex === 2 && (
                    <img 
                      src="/football-medals.jpg" 
                      alt="Medal Ceremony Presentation" 
                      className="w-full h-56 object-cover rounded-2xl border-2 border-amber-400 shadow-2xl transition-all duration-500"
                    />
                  )}
                </div>

                <div className="flex gap-2 mb-2">
                  {[0, 1, 2].map((idx) => (
                    <span 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-300 ${activePhotoIndex === idx ? 'w-8 bg-amber-400' : 'w-2 bg-stone-700'}`} 
                    />
                  ))}
                </div>

                <span className="text-[10px] text-stone-400 font-mono">Resuming pitch telemetry...</span>
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-300 text-center sm:text-left">
                <div className="font-bold text-white">Click the ball or button to score and view your medal gallery!</div>
                <div className="text-stone-400">2x Inter-Collegiate Tournament Winner • Hyderabad</div>
              </div>

              <button
                onClick={handleKickBall}
                disabled={isBallKicked}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-stone-950 font-black tracking-wider text-sm shadow-xl shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isBallKicked ? "CELEBRATING GOAL! ⚽" : "KICK BALL ⚽"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IEEE CIS LEADERSHIP SECTION */}
      <section id="leadership" className="py-24 relative z-10 px-6 max-w-7xl mx-auto border-t border-orange-500/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
            <UsersIcon />
            Leadership, Communication &amp; Community Impact
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            IEEE CIS Vice Chair &amp; <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Community</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-[#110906] border border-orange-500/40 rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px]">
            <div className="flex items-center justify-between pb-4 border-b border-orange-500/20 z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold">
                <MicIcon /> IEEE COMPUTATIONAL INTELLIGENCE SOCIETY (CIS)
              </div>
              <button 
                onClick={() => setSpeakingActive(!speakingActive)}
                className="text-xs px-3 py-1 rounded bg-stone-900 border border-orange-500/30 text-orange-300 font-mono"
              >
                {speakingActive ? "Pause Audio" : "Resume Audio"}
              </button>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center my-6">
              {speakingActive && (
                <div className="absolute -top-4 w-32 h-32 rounded-full border-2 border-orange-500/40 animate-ping pointer-events-none" />
              )}
              
              <div className="relative z-20 flex items-center justify-center mb-2">
                <div className="p-4 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 text-stone-950 shadow-lg shadow-orange-600/50">
                  <MicIcon />
                </div>
              </div>

              <div className="flex items-center gap-1.5 h-12 my-3">
                {[35, 65, 45, 90, 75, 40, 85, 95, 60, 30].map((val, idx) => (
                  <div 
                    key={idx}
                    style={{ 
                      height: speakingActive ? `${val}%` : '20%',
                      transition: 'height 0.25s ease'
                    }}
                    className="w-1.5 bg-gradient-to-t from-red-500 via-orange-400 to-amber-300 rounded-full"
                  />
                ))}
              </div>

              <div className="w-72 py-2.5 px-4 rounded-xl bg-stone-900 border border-orange-500/40 text-center shadow-lg">
                <div className="text-xs font-extrabold text-white tracking-wider">SURAJ • VICE CHAIR &amp; SECRETARY</div>
                <div className="text-[10px] text-orange-400 font-mono">IEEE CIS • VARDHAMAN COLLEGE OF ENGINEERING</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-stone-950/80 border border-orange-500/20 text-xs font-mono text-amber-400 text-center">
                IEEE Hyderabad Student Congress • Expert Talk on Computational Intelligence (19 Jan 2026)
              </div>
              
              {/* LinkedIn Posts Button */}
              <a 
                href="https://www.linkedin.com/company/ieee-cis-chapter/posts/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <LinkedinIcon /> View IEEE CIS LinkedIn Posts <ArrowUpRightIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-stone-900/80 border border-orange-500/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Vice Chair &amp; Former Secretary — IEEE CIS</h4>
                  <p className="text-xs text-stone-400">2 Years of Executive Student Chapter Leadership</p>
                </div>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed">
                Spearheaded chapter operations, coordinated the <strong>Expert Talk on Computational Intelligence (19 Jan 2026)</strong>, and contributed to the <strong>IEEE Hyderabad Student Congress</strong>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-900/80 border border-orange-500/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Communication &amp; Grassroots Social Impact</h4>
                  <p className="text-xs text-stone-400">Bilingual Fluency (English &amp; Telugu) • Community Fundraising</p>
                </div>
              </div>
              <p className="text-sm text-stone-300 leading-relaxed">
                Skilled at translating complex technical data into clear business insights for diverse stakeholders, alongside active participation in student fundraising initiatives for underprivileged children&apos;s education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 relative z-10 border-t border-orange-500/20 bg-[#080403] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 flex items-center justify-center font-black text-2xl text-stone-950 shadow-xl shadow-orange-600/40 mb-6">
            S
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Let&apos;s Build Data-Driven Impact
          </h3>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mb-8">
            Open to Data Analyst, Data Science, Business Intelligence, Python Developer, and Technology Consulting opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:seelasuraj@gmail.com" 
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              <MailIcon /> Email Suraj
            </a>
            <a 
              href="https://github.com/seelasuraj" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-stone-900 border border-orange-500/30 text-stone-200 hover:text-white font-bold text-sm flex items-center gap-2 transition-all hover:bg-stone-800"
            >
              <GithubIcon /> GitHub (seelasuraj)
            </a>
            <a 
              href="https://ai-retail-intelligence-platform.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-stone-900 border border-orange-500/30 text-amber-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-all hover:bg-stone-800"
            >
              Live AI Retail App <ArrowUpRightIcon />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-stone-900 border border-orange-500/30 text-stone-200 hover:text-white font-bold text-sm flex items-center gap-2 transition-all hover:bg-stone-800"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            Seela Venkata Naga Suraj • CSE (Data Science) • Vardhaman College of Engineering
          </div>
        </div>
      </footer>
    </div>
  );
}