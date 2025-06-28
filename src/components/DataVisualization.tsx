
import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  speed: number;
}

const DataVisualization = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [connections, setConnections] = useState<Array<[number, number]>>([]);

  useEffect(() => {
    // Generate floating data points
    const points: DataPoint[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 2 + 1
    }));

    // Generate connections between nearby points
    const conns: Array<[number, number]> = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = Math.sqrt(
          Math.pow(points[i].x - points[j].x, 2) + 
          Math.pow(points[i].y - points[j].y, 2)
        );
        if (distance < 30 && Math.random() > 0.6) {
          conns.push([i, j]);
        }
      }
    }

    setDataPoints(points);
    setConnections(conns);

    // Animate data points
    const interval = setInterval(() => {
      setDataPoints(prev => prev.map(point => ({
        ...point,
        x: (point.x + point.speed * 0.1) % 100,
        y: point.y + Math.sin(Date.now() * 0.001 + point.id) * 0.1,
        opacity: 0.2 + 0.4 * Math.sin(Date.now() * 0.002 + point.id)
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--tech-blue))" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--navy-primary))" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="hsl(var(--tech-blue))" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="hsl(var(--navy-primary))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="animate-pulse-premium"/>
        </svg>
      </div>

      {/* Floating data points */}
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Connection lines */}
        {connections.map(([i, j], index) => (
          <line
            key={`connection-${index}`}
            x1={`${dataPoints[i]?.x}%`}
            y1={`${dataPoints[i]?.y}%`}
            x2={`${dataPoints[j]?.x}%`}
            y2={`${dataPoints[j]?.y}%`}
            stroke="hsl(var(--tech-blue))"
            strokeWidth="1"
            opacity="0.2"
            className="animate-pulse-soft"
          />
        ))}
        
        {/* Data points */}
        {dataPoints.map((point) => (
          <circle
            key={point.id}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r={point.size}
            fill="hsl(var(--navy-primary))"
            opacity={point.opacity}
            className="animate-pulse-premium"
          />
        ))}
      </svg>

      {/* Flowing data streams */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-data-flow"
            style={{
              top: `${20 + i * 30}%`,
              width: '200%',
              animationDelay: `${i * 2}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>

      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 tech-pattern opacity-40" />
    </div>
  );
};

export default DataVisualization;
