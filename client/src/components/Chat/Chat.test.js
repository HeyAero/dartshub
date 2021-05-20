import { screen, render, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Chat from '.';

describe('Chat', () => {
  let container;
  const getById = queryByAttribute.bind(null, 'id');
  beforeEach(() => {
    render(<Chat/>)
  })

  test('it renders', () => {
    const submit = screen.getByTestId('chat-inputs')
    expect(submit).toBeInTheDocument()
  })
  
})
