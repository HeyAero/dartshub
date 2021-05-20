import {  screen } from '@testing-library/react';
import Game from '.';
import 'react-router-dom';
import { act } from 'react-dom/test-utils'

    jest.mock('react-router-dom', () => ({
        useLocation: jest.fn().mockReturnValue({
            state: {code: 'game', legs: '3', creator: true}
        })
    }))

describe('Game render test', () => {
    beforeEach(() => {
        render(<Game/>);
    })

    test('it renders successfully with route props', async () => {
        const chatbox = await screen.findByRole('chatbox');
        expect(chatbox).toBeInTheDocument()
        expect(screen.getByText('Return home.')).toBeInTheDocument();
        expect(screen.getByText('Leave Game')).toBeInTheDocument();
        expect(screen.getByText('1/3')).toBeInTheDocument();
    })


})

describe('Game func test', () => {
    const runConnect= jest.fn();
    // beforeEach(() => {
    //     render(<Game/>);
    // })

    test('it renders successfully with route props', async () => {
        await  act(async() => {
        render(<Game />);
         }); 
        expect(runConnect).toHaveBeenCalledTimes(1);
    })


})