import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddP from './components/AddP';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchP from './components/SearchP';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
    <Route path='/viewall'element={<ViewAll/>}/>
      <Route path='/add'element={<AddP/>}/>
      <Route path='/search'element={<SearchP/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
