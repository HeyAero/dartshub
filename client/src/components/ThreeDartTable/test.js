import {screen } from '@testing-library/react';
import ThreeDartTable from '.';


describe('ThreeDartTable', () => {
    beforeEach(() => {
        
        render(<ThreeDartTable />);
    })

    test('it renders  a table successfully' , async () => {
        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()
        expect(screen.getByText('3-DART AVERAGE')).toBeInTheDocument();
        expect(screen.getByText('USERNAME')).toBeInTheDocument();

    })


})