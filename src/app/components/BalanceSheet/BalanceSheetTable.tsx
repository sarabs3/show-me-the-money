'use client';

import React from 'react';
import SummaryRow from '../SummaryRow';
import SectionRow from '../SectionRow';
import TitleRow from '../TitleRow';
import { Row } from '@/app/types';

type BalanceSheetTableProps = {
  report: {
    Rows: Row[];
};
};
const BalanceSheetTable = ({ report }: BalanceSheetTableProps) => {
  const headers = report.Rows[0].Cells;
  const balanceSheetRows = report.Rows.slice(1);

  return (
      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {headers?.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 bg-gray-200 font-bold text-left text-gray-600"
                >
                  {header.Value}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {balanceSheetRows.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.RowType === "Section" && (
                  <TitleRow title={section.Title} columns={headers?.length} />
                )}

                {section.Rows?.map((row, rowIndex) =>
                  (row.RowType === 'SummaryRow' && row.Cells) 
                  ? (<SummaryRow cells={row.Cells} key={`summary-${sectionIndex}`} />) 
                  : <SectionRow key={rowIndex} cells={row.Cells} /> 
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default BalanceSheetTable;
