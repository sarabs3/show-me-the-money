import { BalanceSheetData } from "@/app/types";
import BalanceSheetTable from "./BalanceSheetTable";
import { BALANCE_SHEET_ENDPOINT } from "@/constant";

const BalanceSheet = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}${BALANCE_SHEET_ENDPOINT}`, {
    cache: "no-store",
  });
  const data: BalanceSheetData = await res.json();

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
