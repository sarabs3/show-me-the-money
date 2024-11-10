import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import SectionRow from './index';
import { Cell } from '@/app/types';

describe('SectionRow', () => {
  const cells: Cell[] = [
    { Value: 'Cell 1' },
    { Value: 'Cell 2' },
    { Value: 'Cell 3' },
  ];

  it('renders without crashing', () => {
    render(<SectionRow cells={cells} />);
  });

  it('renders the correct number of cells', () => {
    const { getAllByRole } = render(<SectionRow cells={cells} />);
    const cellElements = getAllByRole('cell');
    expect(cellElements).toHaveLength(cells.length);
  });

  it('renders cell values correctly', () => {
    const { getAllByRole } = render(<SectionRow cells={cells} />);
    const cellElements = getAllByRole('cell');
    cellElements.forEach((cellElement, index) => {
      expect(cellElement.textContent).toBe(cells[index].Value);
    });
  });

  it('applies the correct text alignment classes', () => {
    const { getAllByRole } = render(<SectionRow cells={cells} />);
    const cellElements = getAllByRole('cell');
    cellElements.forEach((cellElement, index) => {
      if (index > 0) {
        expect(cellElement).toHaveClass('text-right');
      } else {
        expect(cellElement).toHaveClass('text-left');
      }
    });
  });
});