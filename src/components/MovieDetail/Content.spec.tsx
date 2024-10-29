import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  test('should correctly renders title and plot text', () => {
    const plotText = 'This is a sample plot text.';

    render(<Content plot={plotText} />);

    expect(screen.getByText('Plot')).toBeInTheDocument();

    expect(screen.getByText(plotText)).toBeInTheDocument();
  });
});
