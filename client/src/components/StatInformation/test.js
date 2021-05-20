import { screen } from '@testing-library/react';
import Statinformation from '.';


describe('Statinformation', () => {
    
    let props = {totalGames:35.5}
    beforeEach(() => {
        
        render(<Statinformation {...props}/>);
    })

    test('it renders with a threee table and heading successfully' , async () => {
        const table = await screen.findAllByRole('table');
        expect(table.length).toEqual(3)
        expect(screen.getByText("Look At How Well You've Been Doing username")).toBeInTheDocument();
        expect(screen.getByText('Total Number Of:')).toBeInTheDocument();

    })

    test('it renders with  props passed', () => {
        expect(screen.getByText('35.5')).toBeInTheDocument();
    })
})