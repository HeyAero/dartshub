import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Lobby from '.';

describe('Lobby', () => {
  beforeEach(() => {
    
    render(
      <Lobby/>
    )
  })

  test('it renders', () => {
    const message = screen.getByText('Available Games!')
    expect(message).toBeInTheDocument()
  })
  
})
