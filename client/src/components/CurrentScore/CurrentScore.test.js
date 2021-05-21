import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import CurrentScore from '.';

describe('CurrentScore', () => {
  beforeEach(() => {
    
    render(
      <CurrentScore myName={"test"} myScore={501}/>
    )
  })

  test('it renders', () => {
    const main = screen.getByRole('div', {id: scorecontainer})
    expect(main).toBeInTheDocument()
  })

  test('it renders myName', () => {
    const name = screen.getByText('test')
    expect(name).toBeInTheDocument()
  })

  test('it renders myScore', () => {
    const score = screen.getByText('501')
    expect(score).toBeInTheDocument()
  })
  
  
})
