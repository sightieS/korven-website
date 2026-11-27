import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import AppIcon from "./AppIcon";
import { statusClass, type AppInfo } from "../data/apps";

export default function AppCard({ app }: { app: AppInfo }) {
  return (
    <Link to={`/apps/${app.slug}`} className="card card-hover app-card" aria-label={`${app.name}: ${app.tagline}`}>
      <div className="app-card-top">
        <AppIcon app={app} size={60} />
        <span className={`badge ${statusClass(app.status)}`}>
          <span className="badge-dot" />
          {app.status}
        </span>
      </div>
      <h3 className="h3">{app.name}</h3>
      <div className="app-card-meta">
        <span>{app.category}</span>
        <span aria-hidden="true">·</span>
        <span>Windows</span>
      </div>
      <p className="body">{app.tagline}</p>
      <div className="app-card-foot">
        <span>Learn more</span>
        <ArrowUpRight size={18} />
      </div>
    </Link>
  );
}
