import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
