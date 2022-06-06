//TESTE COLOCANDO TIPOS EM PROPS
import PropTypes from 'prop-types'

function Produto({nome, preço}){
    return (
        <>
            <li>{nome} - {preço}</li>
        </>
    )
}

//QUANDO USADO USAR "propTypes" para função e "PropTypes" para elementos
Produto.propTypes = {
    nome: PropTypes.string.isRequired,
    preço: PropTypes.number
}

//O DEFAULT DO ITEM SE NAO FOR PREENCHIDO

Produto.defaultProps = {
    nome: "ANY NAME",
    preço: 0
}


export default Produto