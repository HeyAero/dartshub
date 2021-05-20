import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Chat from '.';

describe('Chat', () => {
  beforeEach(() => {
    render(<Chat/>)
  })

  test('it renders', () => {
    const submit = screen.getByTestId('chat-inputs')
    expect(submit).toBeInTheDocument()
  })
  
})
