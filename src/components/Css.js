//IMPORTANDO styles DO CSS CRIADO 
import styles from './Css.module.css'

function Css(){
    return(
        <div className = {styles.Style1Container}>
            <p className = {styles.Style1Content}>
                Teste de Css
            </p>
        </div>
    )
}

export default Css