import NavBar from './components/NavBar/NavBar';

// import Button from './components/Button/Index'; 

// import Box from './components/Box'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Esto es un box que incluira mi catalogo' />

      {/* <Button  texto='Boton1' color='red' />
      <Button  texto='Boton2' color='blue' />
      <Button  texto='Boton3' color='yellow' />
      <Button  texto='Boton4' color='brown'>
        <p>
          Esto es el children del boton 4
        </p>
      </Button>
      <Button  color='gold'>
        <p>
          Esto es un children
        </p>
      </Button>
      <Box titulo='Caja contenedora'/> */}
    </div>
  );
}

export default App;
