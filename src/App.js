import * as React from 'react';
import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Home from './pages/Home';
import {updateTimes,initializeTimes} from './util/api';

export const BookingTimesContext = React.createContext(null);

function App(props) {
  const [availableTimes, setAvailableTimes] = React.useReducer(updateTimes, initializeTimes());
  // // const navigate = useNavigate();

  // React.useEffect(()=>{
  //   if(props.pathname){
  //     // navigate(props.pathname);
  //     Navigate({to:props.pathname})
  //   }
  // })

  // const RouteList = [
  //   ["/", Home],
  //   ["/booking", BookingPage],
  //   ["/booking-confirmed", ConfirmedBooking],
  // ]

  return (
    <BookingTimesContext.Provider value={{availableTimes, setAvailableTimes}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </BookingTimesContext.Provider>
  );
}

export default App;