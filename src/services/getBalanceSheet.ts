import { BALANCE_SHEET_ENDPOINT } from "@/constant";
import { BalanceSheetData } from "@/app/types";

export const fetchBalanceSheetData = async (): Promise<BalanceSheetData | null> => {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}${BALANCE_SHEET_ENDPOINT}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch balance sheet data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching balance sheet data", error);
    return null;
  }
};