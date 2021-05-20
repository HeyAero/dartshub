import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import User from '.';

describe('User', () => {
  beforeEach(() => {
    
    render(
      <User/>
    )
  })

  test('it renders', () => {
    const message = screen.getByText('YOU ARE NOT AUTHORISED. LOGIN!')
    expect(message).toBeInTheDocument()
  })
  
})
