
interface DataPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

const DataVisualization = () => {
  // Static data points for subtle background pattern
  const staticPoints: DataPoint[] = [
    { id: 1, x: 15, y: 20, opacity: 0.1, size: 4 },
    { id: 2, x: 75, y: 15, opacity: 0.15, size: 6 },
    { id: 3, x: 25, y: 80, opacity: 0.08, size: 3 },
    { id: 4, x: 85, y: 70, opacity: 0.12, size: 5 },
    { id: 5, x: 45, y: 35, opacity: 0.06, size: 2 },
    { id: 6, x: 65, y: 85, opacity: 0.1, size: 4 },
  ];

  const connections: Array<[number, number]> = [
    [0, 1], [1, 3], [2, 5], [0, 4]
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle geometric grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="professional-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--navy-primary))" strokeWidth="0.3" opacity="0.4"/>
            </pattern>
            <linearGradient id="subtle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--navy-primary))" stopOpacity="0.03"/>
              <stop offset="50%" stopColor="hsl(var(--tech-blue))" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="hsl(var(--navy-primary))" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#professional-grid)"/>
          <rect width="100%" height="100%" fill="url(#subtle-gradient)"/>
        </svg>
      </div>

      {/* Static professional data points */}
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Subtle connection lines */}
        {connections.map(([i, j], index) => (
          <line
            key={`connection-${index}`}
            x1={`${staticPoints[i]?.x}%`}
            y1={`${staticPoints[i]?.y}%`}
            x2={`${staticPoints[j]?.x}%`}
            y2={`${staticPoints[j]?.y}%`}
            stroke="hsl(var(--navy-primary))"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}
        
        {/* Static data points */}
        {staticPoints.map((point) => (
          <circle
            key={point.id}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r={point.size}
            fill="hsl(var(--navy-primary))"
            opacity={point.opacity}
          />
        ))}
      </svg>

      {/* Professional overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-navy-primary/5"></div>
    </div>
  );
};

export default DataVisualization;
