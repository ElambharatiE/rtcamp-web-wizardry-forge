import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  ExternalLink, 
  Users, 
  Calendar, 
  TrendingUp,
  Zap,
  Shield,
  Clock
} from "lucide-react";

interface ProjectsListProps {
  detailed?: boolean;
}

export const ProjectsList = ({ detailed = false }: ProjectsListProps) => {
  const projects = [
    {
      name: "Google Search Console",
      client: "Google",
      status: "live",
      users: "50M+",
      uptime: "99.99%",
      lastUpdate: "2 hours ago",
      tech: ["WordPress", "React", "MySQL"],
      description: "Enterprise search analytics platform"
    },
    {
      name: "Meta Business Hub",
      client: "Meta (Facebook)",
      status: "development",
      users: "15M+",
      uptime: "99.95%",
      lastUpdate: "1 day ago",
      tech: ["WordPress", "Vue.js", "Redis"],
      description: "Business management dashboard"
    },
    {
      name: "Indian Express CMS",
      client: "Indian Express",
      status: "live",
      users: "2M+",
      uptime: "99.97%",
      lastUpdate: "6 hours ago",
      tech: ["WordPress", "PHP", "MySQL"],
      description: "News content management system"
    },
    {
      name: "Penske Media Portal",
      client: "Penske Media",
      status: "maintenance",
      users: "800K+",
      uptime: "99.92%",
      lastUpdate: "3 hours ago",
      tech: ["WordPress", "JavaScript", "Apache"],
      description: "Media publishing platform"
    },
    {
      name: "Al Jazeera Digital",
      client: "Al Jazeera",
      status: "live",
      users: "5M+",
      uptime: "99.98%",
      lastUpdate: "30 minutes ago",
      tech: ["WordPress", "React", "Nginx"],
      description: "International news platform"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "development": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "maintenance": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  if (!detailed) {
    return (
      <Card className="bg-card/50 backdrop-blur border-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Recent Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {projects.slice(0, 4).map((project, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div>
                    <div className="font-medium text-sm">{project.name}</div>
                    <div className="text-xs text-muted-foreground">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`text-xs capitalize ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Projects
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Enterprise Projects</h2>
        <Button variant="premium" className="gap-2">
          <Zap className="w-4 h-4" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
                </div>
                <Badge className={`capitalize ${getStatusColor(project.status)}`}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Users:</span>
                  <span className="font-medium">{project.users}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-medium">{project.uptime}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Last update:</span>
                <span className="font-medium">{project.lastUpdate}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button variant="enterprise" size="sm" className="flex-1">
                  <Shield className="w-4 h-4 mr-2" />
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};