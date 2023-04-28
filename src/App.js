
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/itemListConteiner/itemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting = {'Bienvenidos a la tienda de indumentaria'}/>
    </div>
  );
}

export default App;
