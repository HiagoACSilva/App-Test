//TESTE DE CONDICIONAIS
import { useState } from "react";

function Conditional(){
//CONSTANTES USANDO USESTATE
    const [Email, setEmail] = useState()
    const [UserEmail, setUserEmail] = useState()

    function SendEmail(e){//FUNÇÃO DE ENVIO DE EMAIL
        e.preventDefault()//PARA NAO PERDER OS DADOS
        setUserEmail(Email)//PEGANDO O EMAIL E ENVIANDO PARA O USEREMAIL
    }
    function CleanEmail(e){
        setUserEmail('')//LIMPANDO O USEREMAIL
    }

    return(
        <div>
            <>CADASTRANDO EMAIL</>
            <form>
                <input type = "email" placeholder="Digite um email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={SendEmail}>
                    Enviar E-mail
                </button>
                {UserEmail &&(
                    <div>
                        <p> o Email desse usuário é : {UserEmail}</p>
                        <button onClick={CleanEmail}>
                            Limpar Email
                        </button> 
                    </div>
                )}
            </form>
        </div>        
    )
}

export default Conditional