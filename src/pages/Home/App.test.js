import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text from h1Element', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText("99 bottles song");
  expect(h1Element).toBeInTheDocument();
});

test('renders text from h3Element', () => {
  const { getByText } = render(<App />);
  const h3Element = getByText("99 bottles of beer");
  expect(h3Element).toBeInTheDocument();
});

test('renders text from h6Element', () => {
  const { getByText } = render(<App />);
  const h6Element = getByText("Number of bottles must be between 1 and 99");
  expect(h6Element).toBeInTheDocument();
});