
import './App.css';
import Counter from './HOC/Counter'
import {HOCRed} from './HOC/Counter'
import {HOCGreen} from './HOC/Counter'

function App() {
  return (
   <>
     <HOCRed cmp={Counter}/>
     <HOCGreen cmp={Counter}/>
        </>
  );
}

export default App;
