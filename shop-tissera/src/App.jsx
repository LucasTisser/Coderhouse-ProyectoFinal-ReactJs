import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Button from './components/Button/Index'; 
import React from 'react';

function SuperButton( {buttonText}) {
  function doSomething(){
    console.log('Hello Coders');
  }
  return <button type='button' onClick={doSomething}> {buttonText} </button>
}
function SuperForm(props) {
  console.log(props)
  return(
    <>
      <h1>{props.title}</h1>
      {props.boton({buttonText: 'SuperForm button'})}
    </>
  )
}



export default function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Esto es un box que incluira mi catalogo' />
      
      <SuperForm title='Hey!' boton={SuperButton}/>
      
      
    </div>
  );
}
