//TESTE DE EVENTO
//TESTE DE BOTAO EM BUTTON
import Button from "./Events/Button"
function Evento(){

    function FunctionEvento(){
        console.log("ATIVADO")
    }

    function FunctionEvento2(){
        console.log("ATIVADO 2")
    }
    return(
        <div>
            <p>Testando Evento Botao</p>

            <Button event={FunctionEvento} text="First Event"/>
            <Button event={FunctionEvento2} text="Second Event"/>
            
        </div>
    )
}

export default Evento