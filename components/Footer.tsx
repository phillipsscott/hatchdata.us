export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Hatch Analytics · hatchdata.us
          </p>
          <p className="text-xs text-subtle">
            Craft mockup for Squarespace redesign-in-place. Not the live production app.
          </p>
        </div>
        <span className="wip-badge">Polished work-in-progress</span>
      </div>
    </footer>
  );
}
