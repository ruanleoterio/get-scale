
import './App.css';
import useSound from 'use-sound';
import Tonica from './tonica/tonica';
import cMajor from "./sounds/major/c-major/cmajor.mp3"
import Subdom from './subdom/Subdom';


function App() {

  const [play] = useSound(cMajor, {
    sprite: {
      c: [1, 1200],
      dm: [1710, 1200],
      em: [3420, 1200],
      f: [5140, 1200],
      g7: [6850, 1200],
      am: [8570, 1200],
      b: [10285, 1200],
    },
  });

  return (
    <div className="App">
      <h1>Get scale</h1>
     <Tonica/>
     <Subdom/>

      <button aria-label="Mi minor"
        onMouseDown={() => play({ id: 'em' })}>Em</button>

      <button aria-label="Sol major 7"
        onMouseDown={() => play({ id: 'g7' })}>G7</button>
      <button aria-label="Sí major 5b7"
        onMouseDown={() => play({ id: 'b' })}>B7b5</button>
    </div>
  );
}

export default App;
