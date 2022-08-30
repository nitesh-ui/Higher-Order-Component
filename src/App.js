import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Destructing from './components/Destructing';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';

function App() {
  return (
    <div className="App">
      <h4>Welcome to React JS Learning</h4>
      <Welcome/>
      <Greet name="Nitesh" age="28"/>
      <Greet name="Madhav" age="30"/>
      <Message/>
      <Counter/>
      <Destructing name="Pralay" heroName="Sachin"/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <div>
        <p>Higher Order Component Example</p>
        <ClickCounter name="Nitesh"/>
        <HoverCounter/>
      </div>
    </div>
  );
}

export default App;
