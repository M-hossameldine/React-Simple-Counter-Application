import React, {useState} from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
      <div>
        <CounterClass initialValue={0}/>
        <CounterHooks initialCount={0} />
        <button onClick={() => setTheme( prevTheme => (
          prevTheme === 'red' ? 'blue': 'red'
        ))}>Toggole Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
