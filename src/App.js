import './App.css';
import LandingPage from './Components/LandingPage';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
