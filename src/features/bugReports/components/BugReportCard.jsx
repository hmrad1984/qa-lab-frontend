export default function BugReportCard({ report }) {
  return (
    <div className="border rounded-xl shadow p-4 bg-white">
      <h2 className="text-xl font-semibold text-blue-600">{report.title}</h2>
      <p className="text-gray-700">{report.description}</p>
      <div className="mt-2 text-sm text-gray-500">
        <span>Status: {report.status}</span> | <span>Severity: {report.severity}</span>
      </div>
    </div>
  );
}
