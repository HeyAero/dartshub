import userEvent from '@testing-library/user-event';
import { queryByAttribute, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { prettyDOM, screen } from '@testing-library/react';
global.React = React;
global.render = render;
global.userEvent = userEvent;

import Legdisplay from './index';

describe('Legdisplay', () => {
    test('it renders the legs div', () => {
       render(<Legdisplay />) 
       const leg = screen.queryById('legCounter');
       expect(leg).toBeInTheDocument();
    })
})