
import { BookOpen } from "lucide-react";

interface StudyHighlightProps {
  authors: string;
  year: string;
  title: string;
  finding: string;
  platform?: string;
  statistic?: string;
}

const StudyHighlight = ({
  authors,
  year,
  title,
  finding,
  platform,
  statistic
}: StudyHighlightProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-theme-100 rounded-full hidden sm:flex">
          <BookOpen className="h-5 w-5 text-theme-400" />
        </div>
        
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold text-theme-500">{authors} ({year})</h3>
            
            {platform && (
              <span className="text-xs bg-theme-100 text-theme-500 px-2 py-1 rounded-full">
                {platform}
              </span>
            )}
          </div>
          
          <p className="text-sm font-medium text-gray-900 mb-1.5">{title}</p>
          <p className="text-gray-600 text-sm">{finding}</p>
          
          {statistic && (
            <div className="mt-3 text-sm font-medium text-theme-400">
              Key statistic: {statistic}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyHighlight;
