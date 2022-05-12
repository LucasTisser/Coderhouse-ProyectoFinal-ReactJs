import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import "./app.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
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
// {/* <SuperForm title="Hey!" boton={SuperButton} /> */}
// import Button from './components/Button/Index';
// --- Ejemplo --
