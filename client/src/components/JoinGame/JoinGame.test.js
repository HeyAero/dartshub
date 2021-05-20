import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import JoinGame from '.';

describe('JoinGame', () => {
    beforeEach(() => {
        render(
        <BrowserRouter>
            <JoinGame />
        </BrowserRouter>
        )
    });


    test('it should render a form', () => {
        const form = screen.getByLabelText('Your Room Code:')
        expect(form).toBeInTheDocument()
    })
    test('it updates code on submit', () => {
        const sub = screen.getByLabelText('Your Room Code:')
        fireEvent.change(sub, { target: { value: 'test'}})
        expect(sub.value).toBe('test')
      })

})