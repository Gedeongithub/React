import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import InputLogger from './components/Phone.jsx';
import SecondPhone from './components/SecondPhone.jsx';
import ItemSelector from './components/ItemSelector.jsx';

function App() {
  return (
    <div className="App">
      <ItemSelector/>

     <Button/>
     <Counter/>
     <InputLogger/>
     <SecondPhone/>
    </div>
  );
}

export default App;
