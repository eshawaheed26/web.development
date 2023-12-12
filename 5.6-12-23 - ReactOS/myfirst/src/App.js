import './App.css';
import { Homepage } from './pages/home/Homepage';
import pico from './resource/12.png'


function App() {
  return (
    <div className="App">
<Homepage pico={pico}/>
    </div>
  );
}

export default App;
