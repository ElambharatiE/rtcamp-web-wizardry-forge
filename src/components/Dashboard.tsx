import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  Activity, 
  Globe,
  Zap,
  Shield,
  Clock,
  Target
} from "lucide-react";
import { StatsCards } from "./dashboard/StatsCards";
import { AnalyticsChart } from "./dashboard/AnalyticsChart";
import { ProjectsList } from "./dashboard/ProjectsList";
import { UserManagement } from "./dashboard/UserManagement";
import { ContentManager } from "./dashboard/ContentManager";

export const Dashboard = () => {
  const [activeRole, setActiveRole] = useState<"admin" | "editor" | "viewer">("admin");

  const rolePermissions = {
    admin: ["full-access", "user-management", "analytics", "content-edit"],
    editor: ["content-edit", "content-view", "limited-analytics"],
    viewer: ["content-view", "basic-analytics"]
  };

  const hasPermission = (permission: string) => 
    rolePermissions[activeRole].includes(permission);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              rtcamp Web Wizardry Forge
            </h1>
            <p className="text-muted-foreground text-lg">
              Enterprise Dashboard for Modern Web Solutions
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2">
              {(["admin", "editor", "viewer"] as const).map((role) => (
                <Button
                  key={role}
                  variant={activeRole === role ? "premium" : "enterprise"}
                  size="sm"
                  onClick={() => setActiveRole(role)}
                  className="capitalize"
                >
                  <Shield className="w-4 h-4" />
                  {role}
                </Button>
              ))}
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              <Activity className="w-3 h-3 mr-1" />
              Live Demo
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <StatsCards role={activeRole} />

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex items-center gap-2"
              disabled={!hasPermission("analytics")}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger 
              value="content" 
              className="flex items-center gap-2"
              disabled={!hasPermission("content-edit") && !hasPermission("content-view")}
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex items-center gap-2"
              disabled={!hasPermission("user-management")}
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnalyticsChart title="Performance Overview" />
              <ProjectsList />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <AnalyticsChart title="Traffic Analytics" />
              <AnalyticsChart title="User Engagement" />
            </div>
            <Card className="bg-card/50 backdrop-blur border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Real-time Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Active Users", value: "1,247", trend: "+12%" },
                    { label: "Page Views", value: "23.8K", trend: "+8%" },
                    { label: "Bounce Rate", value: "32%", trend: "-5%" },
                    { label: "Avg. Session", value: "4m 23s", trend: "+15%" }
                  ].map((metric, i) => (
                    <div key={i} className="text-center p-4 rounded-lg bg-background/50">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-xs text-green-400 mt-1">{metric.trend}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectsList detailed />
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <ContentManager role={activeRole} />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UserManagement />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-muted-foreground text-sm py-8 border-t border-border/50">
          <p>Built with modern web technologies • Showcasing enterprise-level development skills</p>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Badge variant="outline" className="gap-1">
              <Clock className="w-3 h-3" />
              Real-time Demo
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Target className="w-3 h-3" />
              Production Ready
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};