import { render, screen } from '@testing-library/react';

import Timer from './Timer';

describe('Timer', () => {
  it('should render', () => {
    render(<Timer />);

    expect(screen.getByText('Timer')).toBeInTheDocument();
  });
});
