//TESTE DE TIPOS DE PROPS
import Produto from "./Produto"
function Lista(){

    return(
        <>
            <Produto nome={"Produto"} preço={25}/>
            <Produto />
        </>
    )
}

export default Lista