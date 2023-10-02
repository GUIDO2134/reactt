import "./App.css";

import Navbar from "./componentes/NavBar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.1";
import ItemCount from "./componentes/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("cantidad agregada ", quantity)}
      />
      <ItemListContainer greeting={"bienvenidos"} />
    </div>
  );
}

export default App;
