
import { Book } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-600 text-white pt-12 pb-6">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Book className="h-6 w-6" />
              <span className="font-bold text-lg">Social Media & Mental Health</span>
            </div>
            <p className="text-theme-100 text-sm">
              An educational resource based on systematic review research examining the impact of social media on adolescent mental health.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Key Topics</h3>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-theme-100 hover:text-white transition-colors">Introduction</a></li>
              <li><a href="#positive-effects" className="text-theme-100 hover:text-white transition-colors">Positive Effects</a></li>
              <li><a href="#negative-effects" className="text-theme-100 hover:text-white transition-colors">Negative Effects</a></li>
              <li><a href="#recommendations" className="text-theme-100 hover:text-white transition-colors">Recommendations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-theme-100 hover:text-white transition-colors">Mental Health Support</a></li>
              <li><a href="#" className="text-theme-100 hover:text-white transition-colors">Digital Wellbeing Tools</a></li>
              <li><a href="#" className="text-theme-100 hover:text-white transition-colors">For Parents</a></li>
              <li><a href="#" className="text-theme-100 hover:text-white transition-colors">For Educators</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-theme-100 text-sm mb-2">
              For more information about this research or to request educational materials.
            </p>
            <a href="mailto:research@example.com" className="text-theme-200 hover:text-white transition-colors">
              research@example.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-theme-100">
          <p>© {currentYear} Social Media & Mental Health Research. Based on systematic review by Vinay Dwivedi, Anish Dubey, and Deepanshi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
