function Loader({ label = "Loading..." }) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-premium border border-brand-border bg-brand-card px-6 py-10 text-center shadow-card">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-border border-t-brand-red" />
      <p className="text-sm text-brand-muted">{label}</p>
    </div>
  );
}

export default Loader;
