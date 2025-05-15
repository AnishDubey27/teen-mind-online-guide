
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FindingCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  color?: string;
}

const FindingCard = ({ 
  title, 
  description, 
  icon,
  color = "theme-300" 
}: FindingCardProps) => {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
      <CardHeader className={`bg-${color}/10 border-b`}>
        {icon && (
          <div className="mb-3 text-theme-400">
            {icon}
          </div>
        )}
        <CardTitle className="text-theme-500 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-gray-700 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FindingCard;
