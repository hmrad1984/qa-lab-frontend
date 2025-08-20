import { useEffect, useState } from "react";
import BugReportCard from "../components/BugReportCard";

export default function BugReportListPage() {
  const [bugReports, setBugReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/bugs`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bug reports");
        return res.json();
      })
      .then((data) => setBugReports(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-white">Bug Reports</h1>

      {loading && <p className="text-zinc-300">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bugReports.map((report) => (
            <BugReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
