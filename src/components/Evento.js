//TESTE DE EVENTO

function Evento(){
    function FunctionEvento(){
        console.log("ATIVADO")
    }
    return(
        <div>
            <p>Testando Evento Botao</p>
            <button onClick = {FunctionEvento}>BOTAO</button>
        </div>
    )
}

export default Evento