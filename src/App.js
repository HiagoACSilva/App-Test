import './App.css';
import TesteProps from './components/TesteProps';
import Jogo from './components/Jogo';
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
        nome ={"StoneShard"}
        ano = {"BETA"}
      />
    </div>
  );
}

export default App;
