import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DataNotFound from './index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('DataNotFound', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('should correctly renders error text', () => {
    render(
      <MemoryRouter>
        <DataNotFound />
      </MemoryRouter>,
    );
    expect(screen.getByText('Ops...movie not found')).toBeInTheDocument();
  });

  test('should "Go back" button is working', () => {
    render(
      <MemoryRouter>
        <DataNotFound />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /go back/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
