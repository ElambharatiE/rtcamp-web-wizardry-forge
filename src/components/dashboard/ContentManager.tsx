import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Eye,
  Calendar,
  User,
  Clock,
  MoreVertical,
  Filter,
  Image,
  Video,
  Newspaper
} from "lucide-react";

interface ContentManagerProps {
  role: "admin" | "editor" | "viewer";
}

export const ContentManager = ({ role }: ContentManagerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("articles");

  const content = {
    articles: [
      {
        id: 1,
        title: "Building Scalable WordPress Solutions for Enterprise",
        author: "Sarah Johnson",
        status: "published",
        lastModified: "2 hours ago",
        views: "12.5K",
        category: "Tutorial",
        featured: true
      },
      {
        id: 2,
        title: "Modern JavaScript Frameworks in CMS Development",
        author: "Mike Chen",
        status: "draft",
        lastModified: "1 day ago",
        views: "0",
        category: "Development",
        featured: false
      },
      {
        id: 3,
        title: "Performance Optimization Techniques",
        author: "Emily Rodriguez",
        status: "review",
        lastModified: "3 hours ago",
        views: "8.2K",
        category: "Performance",
        featured: true
      },
      {
        id: 4,
        title: "Security Best Practices for Web Applications",
        author: "David Kim",
        status: "published",
        lastModified: "1 week ago",
        views: "15.1K",
        category: "Security",
        featured: false
      }
    ],
    media: [
      { id: 1, name: "hero-banner.jpg", type: "image", size: "2.4 MB", uploaded: "2 days ago" },
      { id: 2, name: "tutorial-video.mp4", type: "video", size: "124 MB", uploaded: "1 week ago" },
      { id: 3, name: "logo-variants.svg", type: "image", size: "45 KB", uploaded: "3 days ago" }
    ],
    pages: [
      { id: 1, title: "About Us", status: "published", lastModified: "1 week ago" },
      { id: 2, title: "Services", status: "published", lastModified: "2 days ago" },
      { id: 3, title: "Contact", status: "draft", lastModified: "5 hours ago" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "draft": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "review": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const canEdit = role === "admin" || role === "editor";
  const canView = true; // All roles can view

  const stats = {
    totalArticles: content.articles.length,
    published: content.articles.filter(a => a.status === "published").length,
    drafts: content.articles.filter(a => a.status === "draft").length,
    totalViews: content.articles.reduce((sum, a) => sum + parseFloat(a.views.replace('K', '')) * 1000, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Content Management
          </h2>
          <p className="text-muted-foreground">
            {canEdit ? "Create and manage content" : "View content library"}
          </p>
        </div>
        {canEdit && (
          <Button variant="premium" className="gap-2">
            <Plus className="w-4 h-4" />
            New Content
          </Button>
        )}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{stats.totalArticles}</div>
            <div className="text-sm text-muted-foreground">Total Articles</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{stats.published}</div>
            <div className="text-sm text-muted-foreground">Published</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.drafts}</div>
            <div className="text-sm text-muted-foreground">Drafts</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{Math.floor(stats.totalViews / 1000)}K</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
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
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full lg:w-auto grid-cols-3 bg-card border border-border">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <Newspaper className="w-4 h-4" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="media" className="flex items-center gap-2">
            <Image className="w-4 h-4" />
            Media
          </TabsTrigger>
          <TabsTrigger value="pages" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur border-primary/10">
            <CardHeader>
              <CardTitle>Articles ({content.articles.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {content.articles.map((article, index) => (
                  <div 
                    key={article.id}
                    className="flex items-center justify-between p-4 border-b border-border/50 last:border-b-0 hover:bg-background/30 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{article.title}</h3>
                          {article.featured && (
                            <Badge variant="outline" className="text-xs">Featured</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.lastModified}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {article.views} views
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <Badge className={`text-xs capitalize ${getStatusColor(article.status)}`}>
                        {article.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {canEdit && (
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur border-primary/10">
            <CardHeader>
              <CardTitle>Media Library ({content.media.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.media.map((item) => (
                  <div key={item.id} className="p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      {item.type === "image" ? (
                        <Image className="w-5 h-5 text-primary" />
                      ) : (
                        <Video className="w-5 h-5 text-primary" />
                      )}
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Size: {item.size}</div>
                      <div>Uploaded: {item.uploaded}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur border-primary/10">
            <CardHeader>
              <CardTitle>Pages ({content.pages.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {content.pages.map((page) => (
                  <div 
                    key={page.id}
                    className="flex items-center justify-between p-4 border-b border-border/50 last:border-b-0 hover:bg-background/30 transition-colors"
                  >
                    <div>
                      <div className="font-medium">{page.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Modified: {page.lastModified}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs capitalize ${getStatusColor(page.status)}`}>
                        {page.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {canEdit && (
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};