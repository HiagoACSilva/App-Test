//TESTE DE ENVIO DE INFORMAÇÕES USANDO EVENTOS
function Envio(){
    function Mensagem(e){
        e.preventDefault() //A PAGINA NÃO IRÁ RECARREGAR
        console.log("ENVIADO") //MENSAGEM NO CONSOLE DA PAGINA
    }
    return(
        <div>
            <>Enviando uma informação</>
            <form onSubmit={Mensagem}>
                <div>
                    <input type="text" placehold="Digite algo"/>
                </div>
                <div>
                    <input type="submit" placehold="Enviar"/>
                </div>
            </form>
        </div>
    )
}

export default Envio