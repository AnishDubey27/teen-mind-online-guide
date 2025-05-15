
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: string;
  threshold?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  delay = "0s", 
  threshold = 0.1,
  className = ""
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`${className} ${isVisible ? 'animate-enter opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
