import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import Button from './components/Button/Index';
import React from "react";
import './app.css'


import {Routes, Route, NavLink} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Detalle from "./pages/Detalle/Detalle";
import Catalogo from "./pages/Catalogo/Catalogo";
import DetalleItem from "./pages/Detalle-item/DetalleItem";

export default function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <ItemDetailContainer />
      <ItemListContainer/>
      */}

      <ul>
        <li><NavLink to={'/'} className={(nav) => nav.isActive ? 'link-active' : ''}>Home</NavLink></li>

        <li><NavLink to={'/Catalogo'} className={(nav) => nav.isActive ? 'link-active' : ''}>Catalogo</NavLink></li>

        <li><NavLink to={'/Detalle'} className={(nav) => nav.isActive ? 'link-active' : ''}>Detalle</NavLink></li>

        <li><NavLink to={'/Detalle/supermas'} className={(nav) => nav.isActive ? 'link-active' : ''}>Detalle de superman</NavLink></li>
      </ul>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detalle' element={<Detalle/>}/>
        <Route path='/Catalogo/*' element={<Catalogo/>}/>
        <Route path='/Detalle/:id' element={<DetalleItem/>}/>

      </Routes>
    </div>
  );
}

// --- Ejemplo ---

// import React, {useState, useEffect} from "react";
// import "./style.css";

// export default function App() {
//   const [pokemons, setPokemons] = useState ([])

//   useEffect(()=> {
//     fetch('https://pokeapi.co/api/v2/pokemon')
//     .then( (response) => {
//       return response.json()
//     })
//     .then(pokemons => {
//       setPokemons(pokemons.results)
//     })
//   }, [])

//   return (
//     <div>
//       <ul>

//         {pokemons.map(pok => <li>{pok.name}</li>)}

//       </ul>
//     </div>
//   );
// }

// function SuperButton({ buttonText }) {
  // function doSomething() {
    // console.log("Hello Coders");
  // }
  // return (
    // <button type="button" onClick={doSomething}>
      // {" "}
      // {buttonText}{" "}
    // </button>
  // );
// }
// function SuperForm(props) {
  // console.log(props);
  // return (
    // <>
      // {/* <h1>{props.title}</h1> */}
      // {/* {props.boton({ buttonText: "SuperForm button" })} */}
    // {/* </> */}
  // );
// }
{/* <SuperForm title="Hey!" boton={SuperButton} /> */}

// --- Ejemplo --
