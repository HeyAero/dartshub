import {  screen } from '@testing-library/react';
import Game from '.';
import 'react-router-dom';


    jest.mock('react-router-dom', () => ({
        useLocation: jest.fn().mockReturnValue({
            state: {code: 'game', legs: '3', creator: true}
        })
    }))

import {runConnect} from './actions'
    
jest.mock('./actions', () => (
        {
        ...(jest.requireActual('./actions')),
        runConnect: jest.fn()
        }
    ))
 

describe('Game render test', () => {
    beforeEach(() => {
        render(<Game/>);
    })
    afterEach(() => {
        jest.clearAllMocks();
      });

    test('it renders successfully with route props', async () => {
        const chatbox = await screen.findByRole('chatbox');
        expect(chatbox).toBeInTheDocument()
        expect(screen.getByText('Return home.')).toBeInTheDocument();
        expect(screen.getByText('Leave Game')).toBeInTheDocument();
        expect(screen.getByText('1/3')).toBeInTheDocument();
    })


})

describe('Game func test', () => {
   
    beforeEach(() => {
        render(<Game/>);
    })

    test('it renders successfully with route props', async () => {
        expect(runConnect).toHaveBeenCalledTimes(1);
    })


})