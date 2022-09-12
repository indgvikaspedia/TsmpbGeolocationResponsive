import logo from './logo.svg';
import './App.css';
import TSMPBHeader from './shared/TSMPBHeader' 
import HomePageCarousel from './shared/HomePageCarousel';
import TSMPBFooter from './shared/TSMPBFooter';
import Location from './shared/Location/Location'

function App() {
  return (
    <div 
    // className="App"
    >
    <TSMPBHeader/>
    {/* <HomePageCarousel/> */}
    <Location/>
  
    <TSMPBFooter/>
    </div>
  );
}

export default App;
