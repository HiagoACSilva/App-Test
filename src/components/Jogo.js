function Jogo({nome, ano, imagem}){
    //TESTE DE CLASSE(UTILIZANDO {} NOS PARAMETROS DA FUNÇÃO)
    return(
    <div>
        <img src = {imagem} alt = {nome}/>
        <h2>Nome: {nome}</h2>
        <p>Ano de lançamento: {ano}</p>
    </div>
    )
}

export default Jogo