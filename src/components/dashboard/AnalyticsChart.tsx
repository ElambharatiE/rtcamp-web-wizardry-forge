import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3 } from "lucide-react";

interface AnalyticsChartProps {
  title: string;
}

export const AnalyticsChart = ({ title }: AnalyticsChartProps) => {
  // Simulated chart data
  const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * 100) + 20,
    trend: Math.random() > 0.5 ? 'up' : 'down'
  }));

  const maxValue = Math.max(...chartData.map(d => d.value));
  const avgValue = Math.floor(chartData.reduce((sum, d) => sum + d.value, 0) / chartData.length);
  const trend = chartData[chartData.length - 1].value > chartData[0].value ? '+' : '-';
  const trendPercent = Math.abs(((chartData[chartData.length - 1].value - chartData[0].value) / chartData[0].value) * 100).toFixed(1);

  return (
    <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
        <Badge variant="outline" className="gap-1">
          <TrendingUp className="w-3 h-3" />
          {trend}{trendPercent}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart Visualization */}
          <div className="h-48 flex items-end justify-between gap-1 p-4 bg-background/30 rounded-lg">
            {chartData.slice(-15).map((data, i) => (
              <div
                key={i}
                className="bg-gradient-primary rounded-t-sm transition-all duration-300 hover:opacity-80 min-w-[8px] flex-1"
                style={{ 
                  height: `${(data.value / maxValue) * 100}%`,
                  animation: `fade-in 0.5s ease-out ${i * 50}ms both`
                }}
                title={`Day ${data.day}: ${data.value}`}
              />
            ))}
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{maxValue}</div>
              <div className="text-xs text-muted-foreground">Peak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{avgValue}</div>
              <div className="text-xs text-muted-foreground">Average</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">{chartData[chartData.length - 1].value}</div>
              <div className="text-xs text-muted-foreground">Current</div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary" className="text-xs">
              30-day trend
            </Badge>
            <Badge variant="outline" className="text-xs">
              Real-time data
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};