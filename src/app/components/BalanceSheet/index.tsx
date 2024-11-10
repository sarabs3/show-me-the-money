import BalanceSheetTable from "./BalanceSheetTable";
import ErrorPage from "../ErrorPage";
import { fetchBalanceSheetData } from "@/services/getBalanceSheet";

const BalanceSheet = async () => {
  const data = await fetchBalanceSheetData();
  if (!data) {
    return <ErrorPage message="We encountered an error while trying to load the data. Please try again." />;
  }
  const report = data.Reports[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">{report.ReportTitles[0]}</h1>
      <p className="text-center text-gray-600">{report.ReportTitles[1]}</p>
      <p className="text-center text-gray-500 mb-6">{report.ReportTitles[2]}</p>
      <BalanceSheetTable report={report} />
    </div>
  );
};

export default BalanceSheet;
