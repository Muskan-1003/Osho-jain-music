import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './component/navbar/About';
import Contact from './component/navbar/Contact';
import Home from './component/Home';
import Music from './component/navbar/Music';
import NotFound from './component/navbar/NotFound';
import NavBar from './component/navbar/NavBar';


function App() {
  return (
   
    <div className="bg-slate-100">
        <NavBar/>
      <Routes>
        <Route path="/" element={<div>{<Home />}</div>} />
        <Route path="/About" element={<div>{<About />}</div>} />
        <Route path="/Work" element={<div>{<Contact />}</div>} />
        <Route path="/Music" element={<div>{<Music />}</div>} />
        <Route path="/*" element={<div>{<NotFound />}</div>} />
      </Routes>
    </div>
  );
}

export default App;
