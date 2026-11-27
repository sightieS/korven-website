import type { AppInfo } from "../data/apps";

interface AppIconProps {
  app: Pick<AppInfo, "name" | "icon" | "initials">;
  size?: number;
}

/** The app's artwork, or a monogram tile for apps that don't have one yet. */
export default function AppIcon({ app, size = 56 }: AppIconProps) {
  const style = { width: size, height: size };
  if (app.icon) {
    return (
      <span className="app-icon" style={style}>
        <img src={app.icon} alt={`${app.name} icon`} width={size} height={size} />
      </span>
    );
  }
  return (
    <span className="app-icon monogram" style={{ ...style, fontSize: size * 0.44 }} aria-hidden="true">
      {app.initials}
    </span>
  );
}
