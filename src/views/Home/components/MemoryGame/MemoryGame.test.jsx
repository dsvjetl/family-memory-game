import { render, screen } from '@testing-library/react';
import { MemoryGame } from './index';

describe('MemoryGame', () => {
  it('should render', () => {
    render(<MemoryGame />);

    expect(screen.getByText('MemoryGame')).toBeInTheDocument();
  });
});
