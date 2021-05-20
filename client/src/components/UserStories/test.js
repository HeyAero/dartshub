import { prettyDOM, screen } from '@testing-library/react';
import UserStories from '.';


describe('UserStories', () => {
    beforeEach(() => {
        render(<UserStories/>);
    })

    test('it renders with a table on successfully', async () => {
        const heading = await screen.findByRole('heading');
        expect(heading).toBeInTheDocument()
        expect(screen.getByText('User Stories!')).toBeInTheDocument();

    })
})