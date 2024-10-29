import { render, screen } from '@testing-library/react';
import SubHeader from './SubHeader';

describe('SubHeader', () => {
  test('should renders correctly with all props', () => {
    const runtime = '120 min';
    const year = '2024';
    const rated = 'PG-13';

    render(<SubHeader runtime={runtime} year={year} rated={rated} />);

    expect(screen.getByText(runtime)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
    expect(screen.getByText(rated)).toBeInTheDocument();
  });

  test('should does not render separator if only runtime or year are missing', () => {
    const runtime = '120 min';
    const year = '2024';

    render(<SubHeader runtime={runtime} year={year} rated="N/A" />);

    expect(screen.getByText(runtime)).toBeInTheDocument();
    expect(screen.getByText(year)).toBeInTheDocument();
  });

  test('should does not render rated if it is "N/A"', () => {
    render(<SubHeader runtime="120 min" year="2024" rated="N/A" />);

    expect(screen.getByText('120 min')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.queryByText('N/A')).not.toBeInTheDocument();
  });

  test('should renders only the given elements', () => {
    render(<SubHeader runtime="120 min" rated="PG-13" />);

    expect(screen.getByText('120 min')).toBeInTheDocument();
    expect(screen.queryByText('2024')).not.toBeInTheDocument();
    expect(screen.getByText('PG-13')).toBeInTheDocument();
  });
});
