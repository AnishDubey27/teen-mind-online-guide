
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AnimatedSection from "./AnimatedSection";

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <AnimatedSection delay="0.2s">
          <h2 className="text-3xl font-bold text-center text-theme-600 mb-8">Understanding Social Media's Impact</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Watch this informative video about how social media affects mental health in adolescents and learn about ways to promote healthier online habits.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay="0.4s">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <AspectRatio ratio={16/9}>
              <iframe 
                src="https://www.youtube.com/embed/Czg_9C7gw0o?rel=0" 
                title="The Impact of Social Media on Mental Health" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
