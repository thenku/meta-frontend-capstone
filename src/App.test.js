import * as React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {initializeTimes, updateTimes} from './util/api';
import App from './App';
import { BrowserRouter, Navigate } from 'react-router-dom';

test('test initializeTimes()', () => {
  const value = initializeTimes();
  expect(value.length).toBeGreaterThan(0);
});

test('test updateTimes()', () => {
    const value = updateTimes(initializeTimes(), '2023-07-31');
    expect(value).toEqual([
        '17:00', '17:30',
        '18:00', '18:30',
        '21:00', '21:30',
        '22:00', '23:00'
      ]);
});

test('Renders the Home h1', () => {
    render(<App />);
    
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();
})
test('Navigates to and Renders the "Book Now" heading', async () => {
    render(<App />);
    const user = userEvent.setup()
   
    // verify page content for default route
    expect(screen.getByText(/Reservations/i)).toBeInTheDocument()
    
    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Reservations/i));
    expect(screen.getByText(/Book Now/i)).toBeInTheDocument();
})