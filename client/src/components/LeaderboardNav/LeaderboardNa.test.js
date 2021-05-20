import userEvent from '@testing-library/user-event';
import { queryByAttribute, render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { prettyDOM, screen } from '@testing-library/react';
global.React = React;
global.render = render;
global.userEvent = userEvent;

import LeaderboardNav from './index';
import { TestScheduler } from '@jest/core';

describe('LeaderboardNav', () => {
    test('it renders a Nav bar', () => {
       render(<LeaderboardNav />) 
       const nav = screen.queryByRole('navigation');
       expect(nav).toBeInTheDocument();
    })
})