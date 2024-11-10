import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import BalanceSheet from "./index";
import { fetchBalanceSheetData } from "@/services/getBalanceSheet";

jest.mock("@/services/getBalanceSheet", () => ({
  __esModule: true,
  fetchBalanceSheetData: jest.fn(),
}));

describe("BalanceSheet Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test("renders BalanceSheetTable when data is successfully fetched", async () => {
    const mockData = {
      Reports: [
        {
          ReportTitles: ["Balance Sheet", "For the Year Ended", "December 31, 2023"],
          Rows: [
            {
              Cells: [
                { Value: "Cell 1" },
                { Value: "Cell 2" },
                { Value: "Cell 3" },
              ],
            }
          ],
        },
      ],
    };

    (fetchBalanceSheetData as jest.Mock).mockResolvedValue(mockData);
    const { getByText } = render(await BalanceSheet());

    await waitFor(() => {
      expect(getByText("Balance Sheet")).toBeInTheDocument();
      expect(getByText("For the Year Ended")).toBeInTheDocument();
      expect(getByText("December 31, 2023")).toBeInTheDocument();
      expect(getByText("Cell 1")).toBeInTheDocument();
    });
  });

  test("renders ErrorPage when data fetching fails", async () => {

    (fetchBalanceSheetData as jest.Mock).mockResolvedValue(null);
    const { getByText } = render(await BalanceSheet());

    await waitFor(() => {
      expect(getByText("Something went wrong")).toBeInTheDocument();
      expect(getByText("We encountered an error while trying to load the data. Please try again.")).toBeInTheDocument();

    });
  });
});
