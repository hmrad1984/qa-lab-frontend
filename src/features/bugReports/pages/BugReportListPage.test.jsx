import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import BugReportListPage from "./BugReportListPage";
import { vi } from "vitest";

// Sample mock bug reports
const mockBugReports = [
  {
    id: 1,
    title: "UI issue on login",
    description: "The login button overlaps the input field.",
    status: "OPEN",
    severity: "MEDIUM",
  },
  {
    id: 2,
    title: "Data not saving",
    description: "Form data is not being saved to the database.",
    status: "IN_PROGRESS",
    severity: "HIGH",
  },
];

describe("BugReportListPage", () => {
  beforeEach(() => {
    // Mock fetch before each test
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBugReports),
      })
    );
  });

  afterEach(() => {
    // Restore after test
    vi.restoreAllMocks();
  });

  test("renders the heading", async () => {
    await act(async () => {
      render(<BugReportListPage />);
    });
    expect(screen.getByText("Bug Reports")).toBeInTheDocument();
  });

  test("renders all bug report cards from API", async () => {
    await act(async () => {
      render(<BugReportListPage />);
    });

    // Wait for items to appear
    await waitFor(() => {
      expect(screen.getByText("UI issue on login")).toBeInTheDocument();
      expect(screen.getByText("Data not saving")).toBeInTheDocument();
    });
  });

  test("renders status and severity for each report", async () => {
    await act(async () => {
      render(<BugReportListPage />);
    });

    await waitFor(() => {
      expect(screen.getByText(/Status: OPEN/)).toBeInTheDocument();
      expect(screen.getByText(/Severity: MEDIUM/)).toBeInTheDocument();
      expect(screen.getByText(/Status: IN_PROGRESS/)).toBeInTheDocument();
      expect(screen.getByText(/Severity: HIGH/)).toBeInTheDocument();
    });
  });
});
