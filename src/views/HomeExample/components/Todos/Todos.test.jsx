import { render, screen } from '@testing-library/react';
import { Todos } from './index';
import store from '../../../../store';
import { Provider } from 'react-redux';

describe('Todos', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>,
    );

    expect(screen.getByText('Todos')).toBeInTheDocument();
  });
});
