import styles from '../CSS/BolsonaroHist.module.css'
function BolsonaroHist(){
    return(
        <section className={styles.corpo}>
            <div className={styles.timeLine}>
                historico
            </div>
            <div className={styles.grafico}>
                grafico
            </div>
        </section>
    )
}

export default BolsonaroHist