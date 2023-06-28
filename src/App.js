import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Home from './pages/Home';
import API from './util/api';

function updateTimes(state, action){
  const date = new Date(action);
  return API.fetchAPI(date);
}
function initializeTimes(){
  // return fetchData(new Date());
  return API.fetchAPI(new Date())
}
export const BoookingTimesContext = React.createContext(null);

function App(props) {
  const [availableTimes, setAvailableTimes] = React.useReducer(updateTimes, initializeTimes());

  return (
    <BoookingTimesContext.Provider value={{availableTimes, setAvailableTimes}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </BrowserRouter>
      </Layout>
      </BoookingTimesContext.Provider>
  );
}

export default App;