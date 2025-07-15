import { mockBugReports } from "../data/mockBugReports";
import BugReportCard from "../components/BugReportCard";

export default function BugReportListPage() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Bug Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockBugReports.map((report) => (
          <BugReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
