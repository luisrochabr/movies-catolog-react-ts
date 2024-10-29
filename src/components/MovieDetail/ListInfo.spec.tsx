import { render, screen } from '@testing-library/react';
import ListInfo from './ListInfo';

describe('ListInfo', () => {
  test('should correctly renders title and content items', () => {
    const title = 'Genres';
    const content = 'Action, Adventure, Comedy';

    render(<ListInfo title={title} content={content} />);

    expect(screen.getByText(title)).toBeInTheDocument();

    content.split(', ').forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
