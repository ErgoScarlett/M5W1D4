import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Welcome from './Welcome';

test('Verifica che il componente Welcome venga montato correttamente',()=>{

    render(<Welcome />); 
    const component = screen.getByTestId('welcome');
    expect(component).toBeInTheDocument();
});