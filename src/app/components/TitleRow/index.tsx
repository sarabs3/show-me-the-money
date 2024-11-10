import React from 'react';

type TitleRowProps = {
  title?: string;
  columns?: number;
};

const TitleRow: React.FC<TitleRowProps> = ({ title, columns }) => {
  return (
    <tr>
    <td colSpan={columns} className="px-4 py-2 font-bold text-gray-700 bg-gray-100">
      {title}
    </td>
  </tr>
);
};

export default TitleRow;