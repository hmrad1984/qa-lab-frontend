import { Route, Routes } from "react-router-dom";
import BugReportListPage from "../features/bugReports/pages/BugReportListPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/bug-reports" element={<BugReportListPage />} />
    </Routes>
  );
}
