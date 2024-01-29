import './App.css';
import Header from './App Components/Header/Header';
import Nav from './App Components/Nav/Nav';
import Main from './App Components/Main/Main';
import Reservation from './App Components/Reservation/Reservation';
import Footer from './App Components/Footer/Footer';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      {/*<Header />*/}
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
