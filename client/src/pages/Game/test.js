import {  screen } from '@testing-library/react';
import Game from '.';
import 'react-router-dom';
import {runConnect} from './actions'
import userEvent from "@testing-library/user-event";

    jest.mock('react-router-dom', () => ({
        useLocation: jest.fn().mockReturnValue({
            state: {code: 'game', legs: '3', creator: true}
        })
    }))

    
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

    test('it runs runconnect on initial load', async () => {
   
        expect(runConnect).toHaveBeenCalledTimes(1);

    })
    test('it reduces player one score on entering score and pressing enter', async () => {
        
        
        const input = await screen.findByPlaceholderText('Enter Round Score Here')
        userEvent.type(input, "50");
        expect(parseInt(input.value)).toBe(50)
        userEvent.type(input, '{Enter}')
        expect(screen.getByText('451')).toBeInTheDocument();
    })

    test('it updates number of legs and user score to increase after one game', async () => {
        
        expect(screen.getByText('1/3')).toBeInTheDocument()
        expect(screen.getByText('0 - 0')).toBeInTheDocument()
        const input = await screen.findByPlaceholderText ('Enter Round Score Here')
        userEvent.type(input, "550");
        expect(parseInt(input.value)).toBe(550)
        userEvent.type(input, '{Enter}')
        expect(screen.getByText('2/3')).toBeInTheDocument()
        expect(screen.getByText('1 - 0')).toBeInTheDocument()
       
    })

    test('it reduces player one score on entering score and pressing enter', async () => {
        
        
        const input = await screen.findByRole(input, {})
        userEvent.type(input, "50");
        expect(parseInt(input.value)).toBe(50)
        userEvent.type(input, '{Enter}')
        expect(screen.getByText('451')).toBeInTheDocument();
    })


})