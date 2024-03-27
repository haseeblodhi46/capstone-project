import './App.css';
import Header from './App Components/Header/Header';
import Nav from './App Components/Nav/Nav';
import Main from './App Components/Main/Main';
import BookingPage from './App Components/BookingPage/BookingPage';
import ConfirmationPage from './App Components/ConfirmationPage/ConfirmationPage';
import Footer from './App Components/Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';

function App() {
  return (
    <>
      {/*<Header />*/}
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
