
import { Book, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6 text-theme-300" />
              <span className="font-bold text-xl text-theme-300">Social Media & Mental Health</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              A systematic review of the impact of social media use on adolescent mental health, examining both positive and negative effects.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-theme-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-gray-400 hover:text-theme-300 transition-colors">Introduction</a>
              </li>
              <li>
                <a href="#positive-effects" className="text-gray-400 hover:text-theme-300 transition-colors">Positive Effects</a>
              </li>
              <li>
                <a href="#negative-effects" className="text-gray-400 hover:text-theme-300 transition-colors">Negative Effects</a>
              </li>
              <li>
                <a href="#recommendations" className="text-gray-400 hover:text-theme-300 transition-colors">Recommendations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-theme-300 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-theme-300" />
                <a href="mailto:anish.21scse1010057@galgotiasuniversity.edu.in" className="text-gray-400 hover:text-theme-300 transition-colors">
                  anish.21scse1010057@galgotiasuniversity.edu.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-theme-300" />
                <a href="https://www.galgotiasuniversity.edu.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-theme-300 transition-colors">
                  Galgotias University
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Department of Computer Science and Engineering, Galgotias University</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
