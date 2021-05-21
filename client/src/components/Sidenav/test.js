import { screen } from '@testing-library/react';
import Sidenav from '.';



describe('Sidenav', () => {
    
   
    beforeEach(() => {
        render(<Sidenav />);
    })

    test('it renders with a threee table and heading successfully' , async () => {
        const list = await screen.findByRole('list');
        expect(list).toBeInTheDocument();
        
    })

    // test('it renders with  props passed', () => {
    //     expect(screen.getByText('35.5')).toBeInTheDocument();
    // })
})