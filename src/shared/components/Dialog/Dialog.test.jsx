import { render, screen } from '@testing-library/react';

import Dialog from './Dialog';

describe('Dialog', () => {
  it('should render', () => {
    render(<Dialog />);

    expect(screen.getByText('Dialog')).toBeInTheDocument();
  });
});
