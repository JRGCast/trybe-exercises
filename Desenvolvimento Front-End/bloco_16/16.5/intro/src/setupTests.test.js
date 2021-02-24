
import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { renderWithRedux } from './renderWithRedux'
import App from './App';
describe('testing clicks', () => {
  beforeEach(cleanup);
  it('checks if the page has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByRole('button', { name: 'Clique aqui' });

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });
  it('checks if button is working', () => {
    renderWithRedux(<App />)
      const buttonAdicionar = screen.getByRole('button', { name: 'Clique aqui' });
      expect(buttonAdicionar).toBeInTheDocument();
      expect(screen.queryByText('0')).toBeInTheDocument();
      userEvent.click(buttonAdicionar);
      expect(screen.queryByText('1')).toBeInTheDocument();
      userEvent.click(buttonAdicionar);
      userEvent.click(buttonAdicionar);
      expect(screen.queryByText('3')).toBeInTheDocument();
  })
  it('checks initial state and button', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = screen.getByRole('button', { name: 'Clique aqui' });
      expect(screen.queryByText('4')).toBeInTheDocument();
      userEvent.click(buttonAdicionar)
      expect(screen.queryByText('6')).toBeInTheDocument();
    // renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    //   expect(screen.queryByText('10')).toBeInTheDocument();
  })
});
