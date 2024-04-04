import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import SingleBook from './SingleBook';
import horror from './horror.json';


  test('Controllo che i libri siano selezionati e deselezionati', () => {

    render(<SingleBook books={horror}/>);

    const firstBook = horror[0];
    const firstCard = screen.getByTestId(`book-card${firstBook.asin}`)
    
    userEvent.click(firstCard);
    expect(firstCard).toHaveClass('selected');

    const secondBook = horror[1];
    const secondCard = screen.getByTestId(`book-card${secondBook.asin}`)

    userEvent.click(secondCard);
    expect(secondCard).toHaveClass('selected');
    expect(firstCard).not.toHaveClass('selected');

  });

