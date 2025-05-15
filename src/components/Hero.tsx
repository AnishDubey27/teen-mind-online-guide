
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-theme-100 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-600 mb-4">
            Social Media Use and Mental Health in Adolescents
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Understanding the impact of social media on young people's mental well-being: 
            opportunities, risks, and recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContent}
              size="lg" 
              className="bg-theme-400 hover:bg-theme-500 text-white"
            >
              Explore Findings
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-theme-300 text-theme-500 hover:bg-theme-100"
              asChild
            >
              <a href="#recommendations">View Recommendations</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToContent}>
        <ArrowDown className="h-6 w-6 text-theme-400" />
      </div>
    </section>
  );
};

export default Hero;
