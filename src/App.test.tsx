import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App state={{
      dialogsPage: {
          messagesData: [],
          dialogsData: []
      },
      profilePage: {
          postsData: []
      },
      navbarData: {
          friendsList: []
      }
  }} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
