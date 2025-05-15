
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface RecommendationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

const RecommendationCard = ({
  title,
  description,
  icon,
  index
}: RecommendationCardProps) => {
  return (
    <Card className="h-full border-none shadow-md overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-theme-100 rounded-full translate-x-12 -translate-y-12 z-0"></div>
      
      <CardHeader className="relative z-10 border-b">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-theme-300 text-white p-2 rounded-full">
            {icon}
          </div>
          <span className="text-sm font-medium text-theme-400">
            Recommendation {index + 1}
          </span>
        </div>
        <CardTitle className="text-xl text-theme-500">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-4">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
