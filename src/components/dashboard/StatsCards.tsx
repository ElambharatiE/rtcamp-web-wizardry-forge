import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Zap, 
  FileText, 
  Activity,
  Shield,
  Clock
} from "lucide-react";

interface StatsCardsProps {
  role: "admin" | "editor" | "viewer";
}

export const StatsCards = ({ role }: StatsCardsProps) => {
  const stats = [
    {
      title: "Active Projects",
      value: "24",
      change: "+12%",
      icon: Globe,
      description: "Enterprise clients",
      access: ["admin", "editor", "viewer"]
    },
    {
      title: "Total Users",
      value: "1,247",
      change: "+18%",
      icon: Users,
      description: "Monthly active",
      access: ["admin"]
    },
    {
      title: "Content Items",
      value: "5,832",
      change: "+7%",
      icon: FileText,
      description: "Published articles",
      access: ["admin", "editor"]
    },
    {
      title: "Performance Score",
      value: "98.5%",
      change: "+2.1%",
      icon: TrendingUp,
      description: "Site optimization",
      access: ["admin", "editor", "viewer"]
    },
    {
      title: "Response Time",
      value: "1.2s",
      change: "-0.3s",
      icon: Zap,
      description: "Average load time",
      access: ["admin", "viewer"]
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "0%",
      icon: Activity,
      description: "Last 30 days",
      access: ["admin", "editor", "viewer"]
    }
  ];

  const filteredStats = stats.filter(stat => stat.access.includes(role));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredStats.map((stat, index) => (
        <Card 
          key={index} 
          className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 group animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <Badge 
                variant={stat.change.startsWith('+') ? 'default' : stat.change.startsWith('-') && stat.title === "Response Time" ? 'default' : 'secondary'}
                className="text-xs"
              >
                {stat.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Role Indicator Card */}
      <Card className="bg-gradient-primary border-0 text-primary-foreground animate-fade-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium opacity-90">
            Current Role
          </CardTitle>
          <Shield className="h-4 w-4 opacity-90" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold capitalize">{role}</div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs opacity-75">Access level</p>
            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-0">
              <Clock className="w-3 h-3 mr-1" />
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};