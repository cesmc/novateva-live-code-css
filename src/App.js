import "./App.css";
import Atributos from "./components/Atributos/Atributos";
import Header from "./components/Header/Header";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <Atributos />
    </div>
  );
}

export default App;
