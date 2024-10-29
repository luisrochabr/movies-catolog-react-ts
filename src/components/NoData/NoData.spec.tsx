import { render, screen } from '@testing-library/react';
import NoData from './'; // Ajuste o caminho conforme necessário

describe('NoData', () => {
  test('should renders correctly with no data message', () => {
    render(<NoData />);

    const noDataImage = screen.getByAltText('No Data');
    expect(noDataImage).toBeInTheDocument();

    const mainMessage = screen.getByText("Don't know what to search?");
    expect(mainMessage).toBeInTheDocument();

    const offerMessage = screen.getByText("Here's an offer you can't refuse");
    expect(offerMessage).toBeInTheDocument();
  });
});
