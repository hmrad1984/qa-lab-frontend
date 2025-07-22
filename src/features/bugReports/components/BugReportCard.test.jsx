import { render, screen } from "@testing-library/react";
import BugReportCard from "./BugReportCard";

const mockReport = {
  id: 1,
  title: "Login button does not work",
  description: "Clicking login doesn't trigger the handler",
  status: "OPEN",
  severity: "CRITICAL",
};

describe("BugReportCard", () => {
  test("renders the bug title and description", () => {
    render(<BugReportCard report={mockReport} />);
    expect(screen.getByText(mockReport.title)).toBeInTheDocument();
    expect(screen.getByText(mockReport.description)).toBeInTheDocument();
  });

  test("displays the correct status and severity", () => {
    render(<BugReportCard report={mockReport} />);
    expect(screen.getByText(/Status: OPEN/)).toBeInTheDocument();
    expect(screen.getByText(/Severity: CRITICAL/)).toBeInTheDocument();
  });

  test("applies the correct severity badge style", () => {
    render(<BugReportCard report={mockReport} />);
    const severityElement = screen.getByText(/Severity: CRITICAL/);
    expect(severityElement).toHaveClass("bg-red-100", "text-red-800");
  });
});
