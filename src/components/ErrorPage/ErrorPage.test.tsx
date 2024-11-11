import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './index';

describe('ErrorPage', () => {
  const errorMessage = 'API Fail';

  it('renders without crashing', () => {
    render(<ErrorPage message={errorMessage} />);
  });

  it('displays the correct error message', () => {
    const { getByText } = render(<ErrorPage message={errorMessage} />);
    screen.debug(); 
    const messageElement = getByText(errorMessage);
    expect(messageElement).toBeInTheDocument();
  });
});