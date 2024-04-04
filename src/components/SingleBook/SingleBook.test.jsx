import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import SingleBook from './SingleBook';
import horror from './horror.json';



test('Verifica che vengano renderizzate tante cards quanti libri presenti nel json', ()=>{

    render (<SingleBook/>);
    const cards = screen.getByTestId('book-card');
    expect(cards.lenght).toBe(horror.length);
});