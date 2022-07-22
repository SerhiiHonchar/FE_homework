import { Routes, Route } from "react-router-dom";

import './App.scss';
import Home from './components/pages/home/Home';
import User from './components/pages/user/User';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<User />} />
      </Routes>    
    </>

  );
}

export default App;
