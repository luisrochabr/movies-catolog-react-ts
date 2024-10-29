import { render, screen } from '@testing-library/react';
import MovieDetailsLoader from './MovieDetailsLoader';

describe('MovieDetailsLoader', () => {
  test('should correctly renders loading skeletons', () => {
    render(<MovieDetailsLoader />);

    // Verifica se dois elementos Skeleton com o data-testid estão presentes
    const skeletons = screen.getAllByTestId('movie-details-skeleton');
    expect(skeletons).toHaveLength(2);
  });
});
