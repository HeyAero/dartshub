import { screen, fireEvent, getByTestIdm, queryByAttribute  } from '@testing-library/react';
import Chat from '.';

describe('Chat', () => {
  let container;
  const getById = queryByAttribute.bind(null, 'id');
  beforeEach(() => {
    container = ({container} = render(<Chat/>))
  })

  test('it renders', () => {
    const someElement = container.querySelector('#chat-inputs')
    expect(someElement).toBeInTheDocument()
  })
  
})
