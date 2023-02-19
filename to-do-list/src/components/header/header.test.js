import {render as rtlRender, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';
import {Provider} from 'react-redux';
import {store} from '../../management/store';
import Container from '../container/container';

describe('toDoTests', () => {
  let input;
  const render = component =>
    rtlRender(<Provider store={store}>{component}</Provider>);
  let text;
  beforeEach(() => {
    //eslint-disable-next-line
    render(<Header />);
    text = 'hello';
    input = screen.getByPlaceholderText('What needs to be done?');
  });

  it('when pressed enter input changes', async () => {
    await userEvent.type(input, `${text}[Enter]`);
    expect(input).toHaveValue('');
  });

  it('when pressed enter adds to list', async () => {
    await userEvent.type(input, `${text}[Enter]`);
    render(<Container />);
    const findElement = screen.getAllByText(text);
    expect(findElement[0]).toBeInTheDocument();
  });
});
