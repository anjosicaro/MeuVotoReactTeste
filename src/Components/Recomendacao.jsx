import styles from '../CSS/Recomendacao.module.css'
import homem from '../images/LogoG1.png'
import tse from '../images/LogoTse.jfif'
import folha from '../images/LogoFolha.jpg'
function Recomendacao() {
    return (
        <section className={styles.corpo}>
            <div className={styles.slideContainer}>
                {/* =================================================================================  */}
                <div className={styles.slide}>
                    <div className={styles.back}>
                        <div className={styles.circulo}>
                            <a href="https://g1.globo.com" target="blank">
                            <img src={homem} alt="" />

                            </a>
                            
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h1>G1</h1>
                        <p>O G1 é um portal de notícias brasileiro mantido pelo Grupo Globo e sob orientação da Central Globo de Jornalismo. Foi lançado em 18 de setembro de 2006, ano que a TV Globo fez 41 anos</p>
                    </div>
                </div>
                {/* =================================================================================  */}
                <div className={styles.slide}>
                    <div className={styles.back}>
                        <div className={styles.circulo}>
                            <a href="https://www.tse.jus.br" target="blank">
                            <img src={tse} alt="" />

                            </a>
                            
                        </div>
                    </div>
                    <div className={styles.text2}>
                        <h1>TSE</h1>
                        <p>O Tribunal Superior Eleitoral é a instância jurídica máxima da Justiça Eleitoral brasileira, tendo jurisdição nacional. As demais instâncias são representadas nos momentos de eleição pelos Tribunais Regionais Eleitorais, juízes eleitorais e juntas eleitorais espalhados pelo Brasil</p>
                    </div>
                </div>
                {/* =================================================================================  */}
                <div className={styles.slide}>
                    <div className={styles.back}>
                        <div className={styles.circulo}>
                            <a href="https://www.folha.uol.com.br" target="blank">
                            <img src={folha} alt="" />

                            </a>
                            
                        </div>
                    </div>
                    <div className={styles.text3}>
                        <h1>Folha de SP</h1>
                        <p>Folha de S.Paulo, também conhecida como Folha de São Paulo ou simplesmente Folha, é um jornal brasileiro editado na cidade de São Paulo e é atualmente o segundo maior jornal do Brasil em circulação, com 366.087 exemplares, segundo o Instituto Verificador de Comunicação, em dezembro</p>
                    </div>
                </div>
                {/* =================================================================================  */}
                


            </div>
        </section>
    )
}

export default Recomendacao