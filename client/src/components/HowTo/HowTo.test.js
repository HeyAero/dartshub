import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import HowTo from '.';

describe('HowTo', () => {
  beforeEach(() => {
    
    render(
      <HowTo/>
    )
  })

  test('it renders', () => {
    const message = screen.getByText('Create A Game')
    expect(message).toBeInTheDocument()
  })
  
})
