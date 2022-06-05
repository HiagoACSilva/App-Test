import './App.css';
import HelloWorld from './components/HelloWorld';
function App() {  
  const Var = 'String'
  
  return (
    <div className="App">

      <h1>APP TEST</h1>
      <p>My First HTML</p>
      <HelloWorld/>
      <h2>Alteração</h2>
      <p>{Var}</p> 
    </div>
  );
}

export default App;
