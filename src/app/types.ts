
export type Cell = {
  Value: string;
  Attributes?: Array<{ Value: string; Id: string }>;
}
export type Row = {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

type Report = {
  ReportTitles: string[];
  Rows: Row[];
}

export type BalanceSheetData = {
  Reports: Report[];
}
