import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import fireEvent from '@testing-library/user-event';
import MyNav from './MyNav';



test('Verifica del filtraggio dei libri', () => {

    render(<MyNav />);
    const searchInput = screen.getByPlaceholderText('Cerca il tuo libro');

    fireEvent.change(searchInput, { target: { value: 'man' } })

    const BookCard = screen.getAllByTestId('book-card')
    expect(BookCard).toHaveLength(1)
});


