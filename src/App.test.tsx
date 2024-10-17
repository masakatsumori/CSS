import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Select from './component/Select';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders select component with options', () => {
  const handleChange = jest.fn();
  render(<Select options={['Option 1', 'Option 2', 'Option 3']} selectedValue="Option 1" onChange={handleChange} />);

  // セレクトボックスが存在するか確認
  const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
  expect(selectElement).toBeInTheDocument();

  // オプションが正しくレンダリングされているか確認
  const option1 = screen.getByText('Option 2');
  const option2 = screen.getByText('Option 2');
  const option3 = screen.getByText('Option 3');
  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();

  // オプションを選択するテスト
  fireEvent.change(selectElement, { target: { value: 'Option 2' } });
  expect(handleChange).toHaveBeenCalledWith('Option 2');
});

test('toggles button text and color through multiple states on click', () => {
  render(<App />);

  // 初期状態の確認
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('OFF');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });

  // ボタンをクリックして状態が変わることを確認
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('ON');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });

  // 再度ボタンをクリックして次の状態に変わることを確認
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('MAYBE');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'green' });

  // もう一度ボタンをクリックして元の状態に戻ることを確認
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('OFF');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'red' });
});