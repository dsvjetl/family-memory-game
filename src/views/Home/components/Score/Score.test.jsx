import { render, screen } from '@testing-library/react';

import Score from './Score';

describe('Score', () => {
  it('should render', () => {
    render(<Score />);

    expect(screen.getByText('Score')).toBeInTheDocument();
  });
});
