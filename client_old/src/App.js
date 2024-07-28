import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes></Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
