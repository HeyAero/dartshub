import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Leaderboard from '.';

describe('Leaderboard', () => {
  beforeEach(() => {
    
    render(
      <Leaderboard/>
    )
  })

  test('it renders', () => {
    const banner = screen.getAllByRole('banner')
    const length = banner.length
    expect(length).toBe(2)
  })
  
})
