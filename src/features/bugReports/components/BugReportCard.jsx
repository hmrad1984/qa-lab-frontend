export default function BugReportCard({ report }) {
  const severityColor = {
    LOW: "bg-green-100 text-green-800",
    MEDIUM: "bg-yellow-100 text-yellow-800",
    HIGH: "bg-orange-100 text-orange-800",
    CRITICAL: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow border border-zinc-700 space-y-2">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{report.title}</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{report.description}</p>  
      <span className="text-sm text-zinc-600 dark:text-zinc-400">Status: {report.status}</span>
      <p className="text-sm text-zinc-300">{report.description}</p>
      <div className="flex items-center gap-4 text-sm text-zinc-400">
        <span>Status: {report.status}</span>
        <span
          className={`px-2 py-0.5 rounded text-sm font-medium ${severityColor[report.severity]}`}
        >
          Severity: {report.severity}
        </span>
      </div>
    </div>
  );
}
