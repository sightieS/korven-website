import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./AppCard.css";

export interface AppInfo {
  name: string;
  slug: string;
  description: string;
  category: string;
  status: "Available" | "In development" | "Coming soon";
  icon?: string;
  initials?: string;
}

interface AppCardProps {
  app: AppInfo;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link to={`/apps/${app.slug}`} className="app-card">
      <div className="app-card-top">
        <div className="app-card-icon">
          {app.icon ? (
            <img src={app.icon} alt={`${app.name} icon`} />
          ) : (
            <span>{app.initials ?? app.name.slice(0, 1)}</span>
          )}
        </div>

        <span className={`app-status ${app.status.toLowerCase().replaceAll(" ", "-")}`}>
          <span className="app-status-dot" />
          {app.status}
        </span>
      </div>

      <div className="app-card-content">
        <span className="app-card-category">{app.category}</span>
        <h3>{app.name}</h3>
        <p>{app.description}</p>
      </div>

      <div className="app-card-bottom">
        <span>Explore application</span>
        <span className="app-card-arrow">
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
}