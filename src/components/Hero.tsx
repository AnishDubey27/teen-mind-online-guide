
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-theme-100 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-theme-200 rounded-full -top-20 -left-20 opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-theme-300 rounded-full -bottom-40 -right-20 opacity-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-40 h-40 bg-theme-100 rounded-full top-1/4 right-10 opacity-30 animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>
      
      {/* Main background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1746972170275-53dd382e49af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')" }}
      ></div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-600 mb-6 leading-tight">
            <span className="inline-block animate-enter" style={{animationDelay: '0.1s'}}>Social Media Use</span> <span className="inline-block animate-enter" style={{animationDelay: '0.3s'}}>and Mental Health</span> <span className="inline-block animate-enter" style={{animationDelay: '0.5s'}}>in Adolescents</span>
          </h1>
        
          <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-enter" style={{animationDelay: '0.7s'}}>
            Understanding the impact of social media on young people's mental well-being: 
            opportunities, risks, and recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-enter" style={{animationDelay: '0.9s'}}>
            <Button 
              onClick={scrollToContent}
              size="lg" 
              className="bg-theme-400 hover:bg-theme-500 text-white group transition-all duration-300 transform hover:scale-105"
            >
              Explore Findings
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-theme-300 text-theme-500 hover:bg-theme-100 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#recommendations">View Recommendations</a>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center animate-fade-in" style={{animationDelay: '1.1s'}}>
            <img 
              src="https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
              alt="Digital technology" 
              className="rounded-lg w-full max-w-lg h-auto shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" onClick={scrollToContent}>
        <ArrowDown className="h-8 w-8 text-theme-400" />
      </div>
    </section>
  );
};

export default Hero;
