import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('should correctly renders the loader', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
