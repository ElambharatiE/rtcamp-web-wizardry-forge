import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  Plus, 
  Mail, 
  Phone, 
  Calendar,
  Shield,
  MoreVertical,
  UserCheck,
  UserX,
  Edit
} from "lucide-react";

export const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@rtcamp.com",
      role: "admin",
      status: "active",
      lastSeen: "2 minutes ago",
      projects: 8,
      avatar: "/api/placeholder/40/40",
      joinDate: "Jan 2023"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@rtcamp.com",
      role: "editor",
      status: "active",
      lastSeen: "1 hour ago",
      projects: 12,
      avatar: "/api/placeholder/40/40",
      joinDate: "Mar 2023"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@rtcamp.com",
      role: "editor",
      status: "inactive",
      lastSeen: "2 days ago",
      projects: 6,
      avatar: "/api/placeholder/40/40",
      joinDate: "Jul 2023"
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@rtcamp.com",
      role: "viewer",
      status: "active",
      lastSeen: "30 minutes ago",
      projects: 3,
      avatar: "/api/placeholder/40/40",
      joinDate: "Sep 2023"
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@rtcamp.com",
      role: "admin",
      status: "active",
      lastSeen: "5 minutes ago",
      projects: 15,
      avatar: "/api/placeholder/40/40",
      joinDate: "Feb 2023"
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "editor": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "viewer": return "bg-gray-500/20 text-gray-300 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" 
      ? "bg-green-500/20 text-green-300 border-green-500/30"
      : "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const roleStats = {
    admin: users.filter(u => u.role === "admin").length,
    editor: users.filter(u => u.role === "editor").length,
    viewer: users.filter(u => u.role === "viewer").length,
    active: users.filter(u => u.status === "active").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            User Management
          </h2>
          <p className="text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Button variant="premium" className="gap-2">
          <Plus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{roleStats.admin}</div>
            <div className="text-sm text-muted-foreground">Administrators</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{roleStats.editor}</div>
            <div className="text-sm text-muted-foreground">Editors</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{roleStats.viewer}</div>
            <div className="text-sm text-muted-foreground">Viewers</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{roleStats.active}</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-card/50 backdrop-blur border-primary/10">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="bg-card/50 backdrop-blur border-primary/10">
        <CardHeader>
          <CardTitle>Team Members ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {filteredUsers.map((user, index) => (
              <div 
                key={user.id}
                className="flex items-center justify-between p-4 border-b border-border/50 last:border-b-0 hover:bg-background/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{user.projects}</div>
                    <div className="text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground">Joined</div>
                    <div className="font-medium">{user.joinDate}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground">Last seen</div>
                    <div className="font-medium">{user.lastSeen}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={`text-xs capitalize ${getRoleColor(user.role)}`}>
                    {user.role}
                  </Badge>
                  <Badge className={`text-xs capitalize ${getStatusColor(user.status)}`}>
                    {user.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="gap-2">
          <UserCheck className="w-4 h-4" />
          Bulk Activate
        </Button>
        <Button variant="outline" className="gap-2">
          <UserX className="w-4 h-4" />
          Bulk Deactivate
        </Button>
        <Button variant="outline" className="gap-2">
          <Edit className="w-4 h-4" />
          Bulk Edit
        </Button>
        <Button variant="outline" className="gap-2">
          <Mail className="w-4 h-4" />
          Send Invite
        </Button>
      </div>
    </div>
  );
};