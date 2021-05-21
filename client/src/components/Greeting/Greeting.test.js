import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Greeting from '.';

describe('Greeting', () => {
  beforeEach(() => {
    
    render(
      <Greeting/>
    )
  })

  test('it renders', () => {
    const message = screen.getByText('WELCOME TO DARTS HUB!!!')
    expect(message).toBeInTheDocument()
  })
  
})
