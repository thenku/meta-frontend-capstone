// import { render, screen } from '@testing-library/react';
//
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
 
    //open Booking Page
    const link1 = screen.getByText("Reservations")
    fireEvent.click(link1)
    // expect(link1).toBeInTheDocument();

    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})