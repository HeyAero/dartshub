import { screen } from '@testing-library/react';
import Game from '.';
import 'react-router-dom';
import {runConnect} from './actions'
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";

    jest.mock('react-router-dom', () => ({
        useLocation: jest.fn().mockReturnValue({
            state: {code: 'game', legs: '3', creator: true}
        })
    }))

    
    // jest.mock('./actions', () => (
    //     {
    //     ...(jest.requireActual('./actions')),
    //     runConnect: jest.fn()
    //     }
    // ))
 

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

let ws = WS;
describe('Game func test', () => {


    let recieved = JSON.stringify({type :"chat_message", data : "null:Hey"})
    let send = JSON.stringify({ message : "null:Hey"})


    beforeEach(() => {
        ws = new WS("wss://dartshub.herokuapp.com/ws/chat/game/");
        render(<Game/>);
    })

    afterEach(() => {
        WS.clean();
      });

    
    test('it runs runconnect on initial load', async () => {
        await ws.connected;
        let success = JSON.stringify({'success' : '2'})
        ws.send(success)

        let data = JSON.stringify({'init_data' : {username: 'bob', legs: 3}})
        ws.send(data)
        expect(screen.getByText('bob')).toBeInTheDocument();
        expect(screen.getByText('1/3')).toBeInTheDocument()

    })


    test('it reduces player one score number on entering score and pressing enter', async () => {
        
        
        const input = await screen.findByPlaceholderText('Enter Round Score Here')
        userEvent.type(input, "50");
        expect(parseInt(input.value)).toBe(50)
        userEvent.type(input, '{Enter}')
        expect(screen.getByText('451')).toBeInTheDocument();
    })

    test('it updates number of legs and user score when input sent and recieved', async () => {
        await ws.connected;
        expect(screen.getByText('1/3')).toBeInTheDocument()
        expect(screen.getByText('0 - 0')).toBeInTheDocument()
        const input = await screen.findByPlaceholderText ('Enter Round Score Here')
        userEvent.type(input, "550");
        expect(parseInt(input.value)).toBe(550)
        userEvent.type(input, '{Enter}')
        expect(screen.getByText('2/3')).toBeInTheDocument()
        expect(screen.getByText('1 - 0')).toBeInTheDocument()

        // simulating recieving player 2 score and leg to be updated
        let data = JSON.stringify({
            'type': 'score_data',
            'data': { creator: true, score: "0550"}
        }); 
        await expect(ws).toReceiveMessage(data)
        let sent = JSON.stringify({score: "0550"})
        ws.send(sent)
        expect(screen.getByText('1 - 1')).toBeInTheDocument()
        expect(screen.getByText('3/3')).toBeInTheDocument()



       
    })

    test('it chat message entered it adds it to textarea when message sent', async () => {
       
        await ws.connected;
       
        const input = await screen.findByRole('chatinput')
        const textbox = await screen.findByRole('textbox')
        expect(input).toBeInTheDocument()
        expect(textbox).toBeInTheDocument()
        userEvent.type(input, "Hey");
        expect((input.value)).toBe("Hey")
        userEvent.type(input, '{Enter}')
        expect((textbox.value)).toBe("")
        await expect(ws).toReceiveMessage(recieved);
        ws.send(send);
        expect((textbox.value)).toEqual('null:Hey\n')
       
    })


})