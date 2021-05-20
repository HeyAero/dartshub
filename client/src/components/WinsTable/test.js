import { prettyDOM, screen } from '@testing-library/react';
import WinsTable from '.';


describe('Winstable test', () => {
    beforeEach(() => {
        render(<WinsTable/>);
    })

    test('it renders with a table on successfully', async () => {
        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()
        expect(screen.getByText('USERNAME')).toBeInTheDocument();
        expect(screen.getByText('NUMBER OF WINS')).toBeInTheDocument();

    })
})