import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
          transitionTime={300}
          waitingTime={1500}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path='/' element={<LandingPage setProgress={setProgress}
          />}></Route>
          <Route exact path='/about' element={<About setProgress={setProgress}
          />}></Route>
          <Route exact path='/contact' element={<Contact setProgress={setProgress}
          />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;