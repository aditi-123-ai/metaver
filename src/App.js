
import './App.css';
import Avatars from './component/Avatars';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import RoadMap from './component/RoadMap';

function App() {
  return (
    <div>
      <Home/>
      <RoadMap/>
      <Avatars/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
