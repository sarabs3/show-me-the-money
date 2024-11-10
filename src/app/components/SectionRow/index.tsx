import { Cell } from '@/app/types';
import React from 'react';

type SectionRowProps = {
  cells: Cell[];
};

const SectionRow: React.FC<SectionRowProps> = ({ cells }) => {
  return (
    <tr className="border-b">
    {cells.map((cell, cellIndex) => (
      <td
        key={cellIndex}
        className={`px-4 py-2 text-gray-700 ${cellIndex > 0 ? 'text-right' : 'text-left'}`}
      >
        {cell.Value}
      </td>
    ))}
  </tr>
);
};

export default SectionRow;