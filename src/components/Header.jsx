import { useState } from "react"
import { Logo } from "./icons/Logo"
import { useBookStore } from "../store/bookStore"

export const Header = () => {
  const [value, setValue] = useState('cat');
  const updateValue = useBookStore(state => state.updateValue);


  const handleKey = (e) => {
    if (e.key === "Enter") {
        //console.log('press enter: ', value);
        updateValue(value);
    }
}


  return (
    <header>
      <ul>
        <li><a href="#"><Logo /></a></li>
        <li><a className="op-inicio" href="#">Inicio</a></li>
        <li><a className="op-hoy" href="#">Hoy</a></li>
        <li><a className="op-crear" href="#">Crear</a></li>

        <li> <input  className="search" type="text"
          placeholder="search"
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKey}
        />
        </li>


        <li className="logosc"><a className="op-logo" href="#"></a>Logo</li>

      </ul>
    </header>
  )
}
