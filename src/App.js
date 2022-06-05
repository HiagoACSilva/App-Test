import './App.css';
import TesteProps from './components/TesteProps';
import Jogo from './components/Jogo';
import Css from './components/Css';

function App() { 

  const num = 2 
  return (
    <div className="App">
      <TesteProps 
        name = {"Teste"}
        num1 = {num} 
        num2 = {5}
      />
      <p>Testando Js Jogo</p>
      <Jogo
        imagem={"https://via.placeholder.com/150"}
        nome ={"Teste de Classe"}
        ano = {"BETA"}
      />
      <Css/>
    </div>
  );
}

export default App;
