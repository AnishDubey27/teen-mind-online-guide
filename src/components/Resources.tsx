
import { Mail, Phone, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-theme-600 mb-2">Mental Health Resources</h2>
        <p className="text-gray-600">
          If you're struggling with your mental health, please reach out to one of these trusted resources.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gradient-to-br from-theme-50 to-white p-6 rounded-lg shadow-md border border-theme-100">
          <h3 className="text-lg font-semibold text-theme-500 mb-3">Helpline Numbers</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">NIMHANS Mental Health Helpline</p>
                <p className="text-gray-600">080-46110007</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">iCall Helpline</p>
                <p className="text-gray-600">+91-9152987821</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">Vandrevala Foundation</p>
                <p className="text-gray-600">+91-9999666555</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">Roshni Trust</p>
                <p className="text-gray-600">+91-4066202000</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-theme-50 to-white p-6 rounded-lg shadow-md border border-theme-100">
          <h3 className="text-lg font-semibold text-theme-500 mb-3">Email Contacts</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">Research Contact</p>
                <p className="text-gray-600 break-all">anish.21scse1010057@galgotiasuniversity.edu.in</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">NIMHANS</p>
                <p className="text-gray-600">info@nimhans.ac.in</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-theme-400" />
              <div>
                <p className="font-medium">The Live Love Laugh Foundation</p>
                <p className="text-gray-600">info@thelivelovelaughfoundation.org</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-theme-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-theme-500 mb-3">Online Resources</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-theme-400" />
            <a href="https://mhinnovation.net/innovations/mann-mela" target="_blank" rel="noopener noreferrer" className="text-theme-500 hover:text-theme-700 transition-colors">
              Mann Mela - Digital Museum for Mental Health
            </a>
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-theme-400" />
            <a href="https://www.manastha.com/" target="_blank" rel="noopener noreferrer" className="text-theme-500 hover:text-theme-700 transition-colors">
              Manastha - Mental Health Services
            </a>
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="h-5 w-5 text-theme-400" />
            <a href="https://yourdost.com/" target="_blank" rel="noopener noreferrer" className="text-theme-500 hover:text-theme-700 transition-colors">
              YourDost - Online Counseling
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
