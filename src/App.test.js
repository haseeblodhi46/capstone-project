import { fireEvent, render, screen, waitFor, cleanup, history } from '@testing-library/react';
import App from './App';
import BookingPage from './App Components/BookingPage/BookingPage';
import BookingComponent from 'App Components/BookingPage/BookingComponent/BookingComponent';
import Nav from 'App Components/Nav/Nav';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { wait } from '@testing-library/user-event/dist/utils';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/'); // Reset the URL to the initial state
});

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

test('Time Initialization Test', async () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );

  const linkElement = screen.getAllByText('Reservations');
  fireEvent.click(linkElement[0]);
  const timeElement = screen.getByLabelText('Choose Time:');
  const expectedOptions = ['10:00', '11:00', '12:00'];

const options1 = await waitFor(() => {
  const options = timeElement.querySelectorAll('option');
  expect(options).toHaveLength(3);
  return options;
});

const actualOptions = Array.from(options1).map(option => option.textContent);
expect(actualOptions).toEqual(expect.arrayContaining(expectedOptions));

});

test('Time Update Test',  async () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  const linkElement = screen.getAllByText('Reservations');
  fireEvent.click(linkElement[0]);
  const timeElement = screen.getByLabelText('Choose Time:');
  await waitFor(() => {
    const init_options = timeElement.querySelectorAll('option');
    expect(init_options).toHaveLength(3);
  });
  fireEvent.change(timeElement, {target: {value: '11:00'}});
  userEvent.click(screen.getByText('Make Your Reservation'));
  await waitFor(() => {
    const currentUrl = window.location.href;
    expect(currentUrl).toContain('ConfirmationPage');
  },{ timeout: 10000 });
  fireEvent.click(linkElement[0]);
  waitFor(() => {
    const updated_options = timeElement.querySelectorAll('option');
    expect(updated_options).toHaveLength(2);
  });
  const dayElement = screen.getByLabelText('Choose Date:');
  fireEvent.change(dayElement, {target: {value: '2024-03-23'}});
  waitFor(() => {
    const updated_options_2 = timeElement.querySelectorAll('option');
    expect(updated_options_2).toHaveLength(3);
  });
},10000);