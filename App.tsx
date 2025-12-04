import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Zap, 
  Briefcase, 
  GraduationCap,
  Youtube, 
  Globe,
  TrendingUp,
  Cpu,
  FileText,
  Utensils,
  BookOpen,
  Activity,
  Code,
  Award,
  Dumbbell
} from 'lucide-react';

// --- Components Definitions (Merged for Standalone) ---

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, noPadding = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-3xl border-2 border-brand-dark 
        shadow-neo transition-all duration-200 ease-out
        hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-hover
        flex flex-col relative overflow-hidden
        ${noPadding ? '' : 'p-6'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="font-bold text-xl leading-tight">{title}</h3>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
    {icon && (
      <div className="text-brand-dark bg-gray-100 p-2 rounded-xl">
        {icon}
      </div>
    )}
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/michelemerelli/',
      color: 'text-blue-600',
      bgHover: 'hover:bg-blue-50'
    },
    {
      name: 'Strava',
      icon: <Activity size={24} />,
      url: 'https://www.strava.com/athletes/14488475',
      color: 'text-orange-500',
      bgHover: 'hover:bg-orange-50'
    },
    {
      name: 'Email Me',
      icon: <Mail size={24} />,
      url: 'mailto:michelemerelli.8@gmail.com',
      color: 'text-gray-900',
      bgHover: 'hover:bg-gray-100'
    },
    {
      name: 'Newsletter',
      icon: <FileText size={24} />,
      url: 'https://fortissimo.substack.com/p/ff139-e-stato-lai',
      color: 'text-purple-600',
      bgHover: 'hover:bg-purple-50'
    },
    {
        name: 'YouTube',
        icon: <Youtube size={24} />,
        url: 'https://www.youtube.com/@VeI2ax',
        color: 'text-red-600',
        bgHover: 'hover:bg-red-50'
    }
  ];

  const apps = [
      {
          name: 'Mangia Fortissimo',
          desc: 'AI Recipe Assistant',
          icon: <Utensils size={24} />,
          url: 'https://ai.studio/apps/drive/1uoLqlNLJwaPKWcPuwAiD-2GCnzXY2jHz',
          color: 'bg-brand-accent'
      },
      {
          name: 'Leggi Fortissimo',
          desc: 'AI Reading Companion',
          icon: <BookOpen size={24} />,
          url: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221WPA0lWFGzTQP_gb7z6FWUEUGio91gAc4%22%5D,%22action%22:%22open%22,%22userId%22:%22106401608954636383910%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
          color: 'bg-brand-green'
      }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-8">
      
      {/* Navbar - Simplified */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-dark text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-neo-sm transform -rotate-2">
            M
          </div>
          <span className="font-bold text-xl tracking-tight">Michele Merelli</span>
        </div>
        
        <a href="mailto:michelemerelli.8@gmail.com" className="px-5 py-2.5 bg-brand-dark text-white rounded-xl font-bold text-sm shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all">
          Get in touch
        </a>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
        
        {/* 1. Hero Card */}
        <Card className="md:col-span-2 md:row-span-2 bg-white flex flex-col justify-between relative overflow-hidden min-h-[350px]">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg border border-brand-dark text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Based in Milan, Italy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-[1.1]">
              Futurist, Engineer & <span className="bg-brand-accent px-1">Builder.</span>
            </h1>
            <p className="text-gray-600 text-lg font-medium max-w-lg mt-4">
              Bridging the gap between <strong>Science</strong>, <strong>Engineering</strong>, and <strong>Decentralization</strong>. 
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8 z-10">
             <button onClick={() => window.open('https://linkedin.com/in/michelemerelli/', '_blank')} className="flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl font-bold shadow-neo hover:translate-y-[-2px] hover:shadow-neo-hover transition-all">
                <FileText size={18} />
                Full CV
             </button>
          </div>
          
          {/* Abstract Background Element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent rounded-full opacity-20 blur-3xl pointer-events-none"></div>
        </Card>

        {/* 2. Quick Insights */}
        <Card className="md:col-span-2 bg-brand-bg flex flex-col justify-center min-h-[160px]">
            <CardHeader title="The Convergence" icon={<Cpu size={20} />} />
            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              Passionate about digital transition, simulations, and disruptive tech. 
              Background in <span className="underline decoration-brand-accent decoration-2">Nanoscience</span> and <span className="underline decoration-brand-accent decoration-2">Mechanical Engineering</span>.
            </p>
        </Card>

        {/* 3. Apps Section */}
        {apps.map((app) => (
            <Card 
                key={app.name} 
                className={`${app.color} border-brand-dark cursor-pointer group relative overflow-hidden flex flex-col justify-between min-h-[160px]`}
                onClick={() => window.open(app.url, '_blank')}
            >
                <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    {React.cloneElement(app.icon as React.ReactElement<any>, { size: 100 })}
                </div>
                <div className="flex justify-between items-start z-10">
                    <div className="p-2 bg-white rounded-lg border-2 border-brand-dark shadow-neo-sm">
                        {React.cloneElement(app.icon as React.ReactElement<any>, { size: 24, className: "text-brand-dark" })}
                    </div>
                    <ArrowUpRight className="text-brand-dark opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="z-10 mt-4">
                    <h3 className="font-extrabold text-xl text-brand-dark">{app.name}</h3>
                    <p className="text-brand-dark/80 font-bold text-sm">{app.desc}</p>
                </div>
            </Card>
        ))}

        {/* 4. Experience & Education List */}
        <Card className="md:col-span-2 md:row-span-2 overflow-hidden flex flex-col">
            <CardHeader title="Experience & Education" icon={<Briefcase size={20} />} />
            <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                
                {/* Work Experience */}
                <div className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="mt-1 min-w-[48px] h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 border border-orange-200">
                        <TrendingUp size={20} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-lg">Particleworks Europe</h4>
                            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Current</span>
                        </div>
                        <p className="text-sm font-bold text-gray-500">VP Growth & Marketing (2021 - Present)</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Managed European reseller network. Led lead gen & outreach for mesh-less CFD software.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="mt-1 min-w-[48px] h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 border border-gray-200">
                        <Zap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">EnginSoft</h4>
                        <p className="text-sm font-bold text-gray-500">Simulation Engineer (2018 - Present)</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Expert in CAE/CFD simulations (e-motor cooling, gearbox lubrication).
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2 py-2">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-xs font-black uppercase text-gray-400 tracking-wider">Education</span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                {/* Education */}
                <div className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="mt-1 min-w-[48px] h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 border border-blue-200">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">MSc Nanoscience</h4>
                        <p className="text-sm font-bold text-gray-500">University of Groningen (2016 - 2018)</p>
                        <p className="text-sm text-gray-600 mt-1">
                            Thesis: Molecular Electronics. Cum Laude Distinction.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="mt-1 min-w-[48px] h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 border border-blue-100">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">BEng Materials & Nanotech</h4>
                        <p className="text-sm font-bold text-gray-500">Politecnico di Milano (2013 - 2016)</p>
                        <p className="text-sm text-gray-600 mt-1">
                             Grade: 109/110. Thesis: Organic Nanoparticles for Biomedical Applications.
                        </p>
                    </div>
                </div>

            </div>
        </Card>

        {/* 5. Uniform Social Links Grid */}
        <div className="md:col-span-2 md:row-span-2 grid grid-cols-2 gap-4">
             {socialLinks.map((link) => (
                 <Card 
                    key={link.name} 
                    className={`flex flex-col justify-center items-center gap-3 cursor-pointer transition-all hover:scale-[1.02] ${link.bgHover}`}
                    onClick={() => window.open(link.url, '_blank')}
                 >
                    <div className={`${link.color} p-3 bg-white rounded-2xl border-2 border-gray-100 shadow-sm`}>
                        {link.icon}
                    </div>
                    <div className="text-center">
                        <span className="font-bold text-brand-dark block">{link.name}</span>
                        <span className="text-xs text-gray-400 font-bold flex items-center justify-center gap-1 group">
                            Visit <ArrowUpRight size={12} />
                        </span>
                    </div>
                 </Card>
             ))}
             {/* Filler Card for even grid */}
             <Card className="flex flex-col justify-center items-center gap-2 bg-brand-dark text-white cursor-default">
                <Globe size={24} className="opacity-50" />
                <span className="font-bold text-sm">EN / IT</span>
                <span className="text-xs text-gray-400">Native / Prof</span>
             </Card>
        </div>

        {/* 6. Skills & Interests (Replaces Chat) */}
        <Card className="md:col-span-2 md:row-span-2 flex flex-col gap-6">
            <CardHeader title="Skills & Interests" icon={<Award size={20} />} />
            
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <Code size={16} /> Technical & Engineering
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'HTML', 'FastAPI', 'Docker', 'CFD (Particleworks)', 'CAD (SpaceClaim)'].map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-bold text-gray-700 border border-gray-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-sm text-gray-500 mb-2 flex items-center gap-2">
                         <Dumbbell size={16} /> Athletics & Extracurriculars
                    </h4>
                    <div className="space-y-2">
                         <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-xl border border-yellow-100">
                            <span className="text-xl">🏊‍♂️🚴🏃</span>
                            <span className="font-bold text-brand-dark text-sm">Ironman 70.3 Finisher</span>
                         </div>
                         <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-xl border border-blue-100">
                            <span className="text-xl">🏃‍♂️</span>
                            <span className="font-bold text-brand-dark text-sm">Boston Marathon Finisher</span>
                         </div>
                         <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-xl border border-purple-100">
                            <span className="text-xl">📈</span>
                            <span className="font-bold text-brand-dark text-sm">Active Investor (Crypto/Stocks)</span>
                         </div>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-sm text-gray-500 mb-2 flex items-center gap-2">
                         <Award size={16} /> Certificates
                    </h4>
                     <ul className="text-sm font-medium text-gray-600 list-disc list-inside space-y-1">
                        <li>HarvardX: Intro to AI with Python</li>
                        <li>IELTS: 7.5 (2015)</li>
                     </ul>
                </div>
            </div>
        </Card>

      </main>

      {/* Footer */}
      <footer className="pt-12 pb-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
        <p>&copy; 2024 Michele Merelli. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:michelemerelli.8@gmail.com" className="hover:text-brand-dark">Email</a>
            <a href="https://linkedin.com/in/michelemerelli/" className="hover:text-brand-dark">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

// --- Mount the App ---

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}