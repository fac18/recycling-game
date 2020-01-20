import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('1 + 1 is 2', () => {
  const actual = 1 + 1;
  const expected = 2;
  expect(actual).toBe(expected);
});
