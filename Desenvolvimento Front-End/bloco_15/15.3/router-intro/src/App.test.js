import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App, {About} from './App';

describe('testando a aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
    
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    userEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, getByRole, history } = renderWithRouter(<App />);
    // history.push equivale a digitar na barra de endereços:
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
    // role heading level 1 = h1
    expect(getByRole('heading', {level: 1})).toBeInTheDocument()
    userEvent.click(getByText(/Início/i))
    userEvent.click(getByText(/Sobre/i))
    expect(getByText(/Você está na página Sobre/i)).toBeInTheDocument()
    expect(getByRole('heading', {level: 1})).toBeInTheDocument()
    // history.location.pathname é justamente a barra de endereço/navegação:
    const {pathname} = history.location;
    expect(pathname).toBe('/about')
    history.push('/')
    expect(history.location.pathname).toBe('/')
    expect(getByRole('heading', {level: 1})).toBeInTheDocument()
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  
  });
})

