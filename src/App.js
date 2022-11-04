import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />}/>
        
        <Route path='/contact' element={<Contact />}/>

      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
