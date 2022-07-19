import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from './components/header';
import Info from './components/pages/info/Info';
import Education from './components/pages/education/Education';
import Experience from './components/pages/experience/Experience';
import Hobbies from './components/pages/hobbies/Hobbies';
import Skills from './components/pages/skills/Skills';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="info" element={<Info />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="skills" element={<Skills />} />
      </Routes>    
    </>

  );
}

export default App;
