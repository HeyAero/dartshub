import userEvent from '@testing-library/user-event';
import { queryByAttribute, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { prettyDOM, screen } from '@testing-library/react';
global.React = React;
global.render = render;
global.userEvent = userEvent;

import JoinGame from './index';

describe('JoinGame', () => {
    const findByRole = queryByAttribute.bind(null, 'id');
    beforeEach(() =>{
        render(<JoinGame/>);
    })
    test('it should render a Join room form', () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

})