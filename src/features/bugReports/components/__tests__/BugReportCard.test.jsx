import { render, screen } from "@testing-library/react";
import BugReportCard from "../BugReportCard";

const baseReport = {
  id: 1,
  title: "UI issue on login",
  description: "The login button overlaps the input field.",
  status: "OPEN",
  severity: "MEDIUM",
};

describe("BugReportCard", () => {
  test("renders title, description, status, and severity", () => {
    render(<BugReportCard report={baseReport} />);

    expect(screen.getByText("UI issue on login")).toBeInTheDocument();
    expect(
      screen.getByText("The login button overlaps the input field.")
    ).toBeInTheDocument();

    expect(screen.getByText(/Status:\s*OPEN/i)).toBeInTheDocument();
    expect(screen.getByText(/Severity:\s*MEDIUM/i)).toBeInTheDocument();
  });

  // Validate severity color classes for each level
  const cases = [
    { severity: "LOW", expectClasses: ["bg-green-100", "text-green-800"] },
    { severity: "MEDIUM", expectClasses: ["bg-yellow-100", "text-yellow-800"] },
    { severity: "HIGH", expectClasses: ["bg-orange-100", "text-orange-800"] },
    { severity: "CRITICAL", expectClasses: ["bg-red-100", "text-red-800"] },
  ];

  test.each(cases)(
    "applies correct classes for severity: %s",
    ({ severity, expectClasses }) => {
      render(<BugReportCard report={{ ...baseReport, severity }} />);
      const badge = screen.getByText(new RegExp(`Severity:\\s*${severity}`, "i"));
      expectClasses.forEach((cls) => expect(badge).toHaveClass(cls));
    }
  );
});
