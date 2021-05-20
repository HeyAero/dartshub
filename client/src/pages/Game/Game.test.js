import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Game from '.';
import { MemoryRouter, Route } from 'react-router-dom'

describe('CurrentScore', () => {

  beforeEach(() => {
    
    render(
      <MemoryRouter>
        <Game/>
      </MemoryRouter>
    )
  })

  test('it renders', () => {
    const main = screen.getByRole('body')
    expect(main).toBeInTheDocument()
  })
  
  
})
