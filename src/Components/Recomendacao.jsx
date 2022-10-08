import styles from '../CSS/Recomendacao.module.css'
function Recomendacao(){
    return(
        <section className={styles.corpo}>
            Recomendações de sites sobre fake news

            SÓ PRA VER O ESPAÇO DO SLIDE
            <div className={styles.slideContainer}>
            <div className={styles.slide}><div className={styles.circulo}>circulo</div></div>
            <div className={styles.slide}><div className={styles.circulo}>circulo</div></div>
            <div className={styles.slide}><div className={styles.circulo}>circulo</div></div>
            </div>
        </section>
    )
}

export default Recomendacao