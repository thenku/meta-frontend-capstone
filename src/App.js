import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import BookingPage from './pages/BookingPage';
import Home from './pages/Home';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Layout><Home /></Layout>} />
          <Route path="booking" element={<Layout><BookingPage /></Layout>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
{/* <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes> */}