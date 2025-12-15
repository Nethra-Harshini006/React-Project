import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/functionalComponents/Navbar.jsx';
import Home from './components/functionalComponents/Home.jsx';
import About from './components/functionalComponents/About.jsx';
import LearningReact from './components/functionalComponents/LearningReact.jsx';
import Contact from './components/functionalComponents/Contact.jsx';
import ClassComponent from './components/ClassComponents/ClassComponent.jsx';
import Login from "./components/functionalComponents/Hooks/Login";
import Signup from "./components/functionalComponents/Hooks/Signup";

import "./css/App.css";

function App() {
  return (
    <header>
      <main>
        <BrowserRouter>
          <Navbar />

          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Learning React Page */}
            <Route path="/learn-react" element={<LearningReact />} />

            {/* Class Component Page (if needed) */}
            <Route path="/class" element={<ClassComponent />} />
 +           {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            {/*Login and Signup page*/}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


          </Routes>
        </BrowserRouter>
      </main>
    </header>
  );
}

export default App;
