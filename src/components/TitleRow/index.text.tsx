import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import TitleRow from './index';

describe('TitleRow', () => {
  const title = 'Sample Title';

  it('renders without crashing', () => {
    render(<TitleRow title={title} />);
  });

  it('renders the correct title', () => {
    const { getByText } = render(<TitleRow title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<TitleRow title={title} />);
    const titleElement = container.firstChild;
    expect(titleElement).toHaveClass('title-row');
  });
});