function TesteProps(props){
    //TESTE UTILIZANDO props NOS PARAMETROS
    return(
        <div>
            <p>
                Teste de Chamada: {props.name}
            </p>
            <p>
                Testando Somas: {props.num1} + {props.num2} = {props.num1 + props.num2}
            </p>
        </div>
    )
}
export default TesteProps