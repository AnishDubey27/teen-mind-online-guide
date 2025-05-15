
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, MessageCircle, Users } from "lucide-react";

const KeyStats = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-theme-300" />,
      value: "95%",
      label: "Of American teens use social media daily",
    },
    {
      icon: <Calendar className="h-8 w-8 text-theme-300" />,
      value: "3-4 hrs",
      label: "Average daily social media usage",
    },
    {
      icon: <Star className="h-8 w-8 text-theme-300" />,
      value: "40%",
      label: "Increase in teen depression since 2010",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-theme-300" />,
      value: "35",
      label: "Studies analyzed in this systematic review",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-theme-100 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-theme-500 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
