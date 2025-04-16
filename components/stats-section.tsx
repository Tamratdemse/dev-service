import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, Award } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Code className="h-6 w-6" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "200+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
