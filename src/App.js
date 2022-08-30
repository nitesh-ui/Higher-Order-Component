import './App.css';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';

function App() {
  return (
    <div className="App">
      <h4>Welcome to React JS Learning</h4>
      <div>
        <p>Higher Order Component Example</p>
        <ClickCounter name="Nitesh"/>
        <HoverCounter/>
      </div>
    </div>
  );
}

export default App;
