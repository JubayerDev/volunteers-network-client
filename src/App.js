import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
