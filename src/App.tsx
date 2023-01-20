import { createContext } from 'react';
import InteractiveMap from './components/interactiveMap';

function App() {

  const iconContext = createContext<string>('bus');

  return (
    <div className="App">
      <InteractiveMap />
    </div>
  );

}

export default App;
