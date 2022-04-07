import './App.css';
import { Footer } from './Footer';
import { Home } from './Home';
import { SignIn } from './SignIn';
import Navbar from './Navbar';

function App() {
  return (
  <div>
    <Navbar/>
    <SignIn/>
    <Footer/>
  </div>
  );
}

export default App;
