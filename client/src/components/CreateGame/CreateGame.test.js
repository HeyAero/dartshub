import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import CreateGame from '.';
import { BrowserRouter } from 'react-router-dom'

describe('CreateGame', () => {
  beforeEach(() => {
    
    render(
      <BrowserRouter>
        <CreateGame/>
      </BrowserRouter>
    )
  })

  test('it renders', () => {
    const label = screen.getByLabelText('Enter Room-Code:')
    expect(label).toBeInTheDocument()
  })

  test('it updates code on submit', () => {
    const input = screen.getByLabelText('Enter Room-Code:')
    fireEvent.change(input, { target: { value: 'test'}})
    expect(input.value).toBe('test')
  })

  test('it updates legs on submit', () => {
    const input = screen.getByLabelText('Number of Legs:')
    fireEvent.change(input, { target: { value: 1}})
    expect(input.value).toBe("1")
  })
  
})
