import './App.css';
import TesteProps from './components/TesteProps';
import Jogo from './components/Jogo';
import Css from './components/Css';
import Lista from './components/Lista';
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
      <p>Teste de Props Personalizadas em Produto</p>
      <Lista/>
    </div>
  );
}

export default App;
