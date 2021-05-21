import {  screen } from '@testing-library/react';
import Lobby from '.';
import WS from "jest-websocket-mock";
import { MemoryRouter } from 'react-router-dom';

let ws = WS;
describe('Lobby test', () => {

    beforeEach(() => {
        ws = new WS('wss://dartshub.herokuapp.com/ws/game/');
        
        render(
        <MemoryRouter>
        <Lobby/>
        </MemoryRouter>
        );
    })

    afterEach(() => {
        WS.clean();
      });

    test('it renders  successfully', async () => {
        const headings = await screen.findAllByRole('heading');
        expect(headings.length).toBe(2);
        expect(screen.getByText('Available Games!')).toBeInTheDocument();
        expect(screen.getByText('click to enter room')).toBeInTheDocument();

    })

    test('it renders with no rooms and then rooms when data recieved from websocket server successfully', async () => {

        await ws.connected;
        
        expect(screen.getByText('No Games Currently available')).toBeInTheDocument();
        let dataz = JSON.stringify(
           [{fields: { rname: 'testroom1' }},{fields: { rname: 'testroom' }}]
        ); 
        ws.send(dataz);
        expect(screen.getByText('Name: testroom1')).toBeInTheDocument();
        expect(screen.getByText('Name: testroom2')).toBeInTheDocument();


    })
})