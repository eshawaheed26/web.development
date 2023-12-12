import './App.css';
import FirstComponent from "./components/First/FirstComponent";
import Second from "./components/second/Second";

let a="NOBODY";
function App() {
  function handleClick(){

  }
  return (
    <div className="App">
      The Esha Waheed
      React
      <FirstComponent abc={a} clik={handleClick}/>
      <Second/>
    </div>
  );
}

export default App;
