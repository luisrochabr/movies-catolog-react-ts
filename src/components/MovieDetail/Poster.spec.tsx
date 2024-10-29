import { fireEvent, render, screen } from '@testing-library/react';
import Poster from './Poster';
import NoImage from '../../assets/no_data.png';

describe('Poster', () => {
  test('should renders the correct image when the poster is provided', () => {
    const posterUrl = 'https://example.com/poster.jpg';
    const title = 'Sample Movie';

    render(<Poster poster={posterUrl} title={title} />);

    const image = screen.getByRole('img', { name: title });
    expect(image).toHaveAttribute('src', posterUrl);
    expect(image).toHaveAttribute('alt', title);
  });

  test('should use default image when poster fails to load', () => {
    const title = 'Sample Movie';

    render(<Poster poster="invalid-url.jpg" title={title} />);

    const image = screen.getByRole('img', { name: title });

    fireEvent.error(image);

    expect(image).toHaveAttribute('src', NoImage);
  });
});
