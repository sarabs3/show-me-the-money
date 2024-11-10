import { Cell } from '@/app/types';
import React from 'react';

type SummaryRowProps = {
  cells: Cell[];
};

const SummaryRow: React.FC<SummaryRowProps> = ({ cells }) => {
  return (
    <tr className="border-t bg-blue-100 font-bold">
      {cells.map((cell, cellIndex) => (
        <td
          key={`${cell}-${cellIndex}`}
          className={`px-4 py-2 ${cellIndex > 0 ? 'text-right' : 'text-left'}`}
        >
          {cell.Value}
        </td>
      ))}
    </tr>
  );
};

export default SummaryRow;