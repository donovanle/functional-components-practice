import logo from './logo.svg';
import './App.css';
import Personcard from './components/personcard';

function App() {
  return (
    <div className="App">
      <Personcard firstname="Jane" lastname="Doe" age={45} haircolor="Black"/>
      <Personcard firstname="John" lastname="Smith" age={88} haircolor="Brown"/>
      <Personcard firstname="Millard" lastname="Fillmore" age={50} haircolor="Brown"/>
      <Personcard firstname="Maria" lastname="Smith" age={62} haircolor="Brown"/>
    </div>
  );
}

export default App;
