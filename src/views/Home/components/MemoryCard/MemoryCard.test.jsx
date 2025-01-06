import { render, screen } from '@testing-library/react';

import { MemoryCard } from './index';

describe('MemoryCard', () => {
  it('should render', () => {
    render(<MemoryCard />);

    expect(screen.getByText('MemoryCard')).toBeInTheDocument();
  });
});
