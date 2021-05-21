import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import GameNavbar from '.';
import jest from 'jest'

describe('GameNavbar', () => {
  beforeEach(() => {
    
    render(
      <GameNavbar/>
    )
  })

  test('it renders', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

})
