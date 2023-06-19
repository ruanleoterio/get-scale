
import useSound from "use-sound";
import cMajor from "../sounds/major/c-major/cmajor.mp3"


export default function Tonica(){

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
  <div>
    <button 
    aria-label="Dó major"
    onMouseDown={()=> play({id: "c"})}>
      C 
    </button>
    <button 
      aria-label="Dó major"
      onMouseDown={()=> play({id: "am"})}>
        Am
    </button>
  </div>
  )
}