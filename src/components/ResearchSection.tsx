
import { ReactNode } from "react";

interface ResearchSectionProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  bgColor?: string;
}

const ResearchSection = ({ 
  id, 
  title, 
  description, 
  children, 
  bgColor = "bg-white" 
}: ResearchSectionProps) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-500 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
