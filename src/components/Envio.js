//TESTE DE ENVIO DE INFORMAÇÕES USANDO EVENTOS E USESTATE
import { useState } from 'react'

function Envio(){
    function Mensagem(e){
        e.preventDefault() //A PAGINA NÃO IRÁ RECARREGAR
        console.log(`Usuário: ${nome}|Senha: ${password}`)
    }

    const [nome, setNome] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <>Enviando uma informação</>
            <form onSubmit={Mensagem}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id = "nome"
                        name = "nome"
                        placehold="Digite algum nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password"
                        id="password"
                        name = "password"
                        placehold="Enviar"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type = "submit" value = "Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Envio