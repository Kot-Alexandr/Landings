import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import CreativeStudio from './Landings/ShortPages/CreativeStudio/CreativeStudio';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' Component={Main} />
      <Route path='/CreativeStudio' Component={CreativeStudio} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
