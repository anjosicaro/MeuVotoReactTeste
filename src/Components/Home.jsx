import styles from '../CSS/Home.module.css'
import fotoHomem from '../images/homem.png'
function Home(){
    return(
        <section className={styles.corpo}>
           <div className={styles.texto}>
           <h1> Vote consciente e faça do Brasil um lugar melhor </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum eos voluptates aliquam voluptatem distinctio unde veritatis omnis officia! Ut quod ipsa ipsam voluptate a placeat distinctio unde hic cupiditate.</p>
           </div>

         
         <div className={styles.circle}>
         <img src={fotoHomem} alt="Moço com titulos" />
         </div>
        </section>
    )
}
export default Home