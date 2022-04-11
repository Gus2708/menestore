import './App.css';
import { Footer } from './Footer';
import { Home } from './Home';
import { SignIn } from './SignIn';
import Navbar from './Navbar';
import { SignUp } from './SignUp';
import { Stores } from './Stores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stores" element={<Stores/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
  