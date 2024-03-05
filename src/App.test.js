import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './App Components/BookingPage/BookingPage';
import BookingComponent from 'App Components/BookingPage/BookingComponent/BookingComponent';
import Nav from 'App Components/Nav/Nav';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

test('Booking Page Render Test', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getAllByText('Reservations');
  fireEvent.click(linkElement[0]);
  const submitButton = screen.getByText('Make Your Reservation');
  expect(submitButton).toBeInTheDocument();
});

test('Time Initialization Test', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getAllByText('Reservations');
  fireEvent.click(linkElement[0]);
  const timeElement = screen.getByLabelText('Choose Time:');
  const options = timeElement.querySelectorAll('option');
  const expectedOptions = ['10:00', '11:00', '12:30'];
  const actualOptions = Array.from(options).map(option => option.textContent);
  console.log(actualOptions);
  expect(options).toHaveLength(24);
  expect(actualOptions).toEqual(expect.arrayContaining(expectedOptions));
});

test('Time Update Test', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getAllByText('Reservations');
  fireEvent.click(linkElement[0]);
  const timeElement = screen.getByLabelText('Choose Time:');
  const init_options = timeElement.querySelectorAll('option');
  fireEvent.change(timeElement, {target: {value: '10:00'}});
  fireEvent.click(screen.getByText('Make Your Reservation'));
  const updated_options = timeElement.querySelectorAll('option');
  expect(updated_options).toHaveLength(23);
  const dayElement = screen.getByLabelText('Choose Date:');
  fireEvent.change(dayElement, {target: {value: '2022-10-10'}});
  const updated_options_2 = timeElement.querySelectorAll('option');
  expect(updated_options_2).toHaveLength(23);
  fireEvent.change(timeElement, {target: {value: '11:00'}});
  fireEvent.click(screen.getByText('Make Your Reservation'));
  const updated_options_3 = timeElement.querySelectorAll('option');
  expect(updated_options_3).toHaveLength(22);
});