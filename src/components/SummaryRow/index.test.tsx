import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import SummaryRow from './index';
import { Cell } from '@/app/types';

describe('SummaryRow', () => {
  const cells: Cell[] = [
    { Value: 'Cell 1' },
    { Value: 'Cell 2' },
    { Value: 'Cell 3' },
  ];

  it('renders without crashing', () => {
    const { container } = render(<SummaryRow cells={cells} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of cells', () => {
    const { getAllByRole } = render(<SummaryRow cells={cells} />);
    const cellsRendered = getAllByRole('cell');
    expect(cellsRendered).toHaveLength(cells.length);
  });

  it('renders cells with correct values', () => {
    const { getAllByRole } = render(<SummaryRow cells={cells} />);
    const cellsRendered = getAllByRole('cell');
    cells.forEach((cell, index) => {
      expect(cellsRendered[index]).toHaveTextContent(cell.Value);
    });
  });

  it('applies correct text alignment based on cell index', () => {
    const { getAllByRole } = render(<SummaryRow cells={cells} />);
    const cellsRendered = getAllByRole('cell');
    expect(cellsRendered[0]).toHaveClass('text-left');
    for (let i = 1; i < cellsRendered.length; i++) {
      expect(cellsRendered[i]).toHaveClass('text-right');
    }
  });
});