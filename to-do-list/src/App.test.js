import {render as rtlRender, screen} from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './management/store';

const render = component =>
  rtlRender(<Provider store={store}>{component}</Provider>);

test('is app exist', () => {
  render(<App />);
  const linkElement = screen.getByTestId('container');
  expect(linkElement).toBeInTheDocument();
});
