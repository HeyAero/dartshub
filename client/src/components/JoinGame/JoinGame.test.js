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
    beforeEach(() => {
        render(<JoinGame />)
    });


    test('it should render a quiz form', () => {
        const form = screen.getAllByRole('form', { hidden: true})
        expect(form).toBeInTheDocument()
    })

})