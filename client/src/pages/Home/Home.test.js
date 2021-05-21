import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
  beforeEach(() => {
    
    render(
      <Home/>
    )
  })

  test('it renders', () => {
    const header = screen.getByRole('header')
    expect(header).toBeInTheDocument()
  })
  
})
