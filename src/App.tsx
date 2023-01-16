import { createContext } from 'react';
import './App.css';
import InteractiveMap from './components/interactiveMap';

function App() {

  const iconContext = createContext<string>('bus');

  return (
    <div className="App">
      <nav> </nav>
      <InteractiveMap />

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquam laborum voluptatum quaerat numquam modi eaque quos corporis ipsam, laudantium distinctio eos debitis sunt consectetur autem incidunt ipsa explicabo sint!</p>
    </div>
  );

}

export default App;
