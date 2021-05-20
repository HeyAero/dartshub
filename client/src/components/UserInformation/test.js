import { prettyDOM, screen } from '@testing-library/react';
import UserInformation from '.';


describe('Userinformation', () => {
    const username='bob'
    const email='a@a.com'
    const props = {username, email}

    beforeEach(() => {
        
        render(<UserInformation {...props}/>);
    })

    test('it renders with a table and heading successfully' , async () => {
        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()
        expect(screen.getByText('User Information')).toBeInTheDocument();
        expect(screen.getByText('Hey User, some of your account details are below...')).toBeInTheDocument();

    })

    test('it renders with a username and email after props passed', () => {
        expect(screen.getByText('bob')).toBeInTheDocument();
        expect(screen.getByText('a@a.com')).toBeInTheDocument();
    })
})