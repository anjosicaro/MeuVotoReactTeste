import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.png'
import BolsonaroSlide from './BolsonaroSlide'
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function Bolsonaro() {
  return (
    <section className={styles.candidato}>
      <div className={styles.topo}>
        <div className={styles.fundoImagem}>
        <img src={BolsonaroFoto} alt="Foto Bolsonaro" />
        </div>
        <div className={styles.Info}>
        <h1>Jair Messias <span>Bolsonaro</span></h1>
        <h4>Partido dos <span>Liberal - 22</span> </h4>
        <p>Conheça a trajetoria politica <br /> do candidato e atual presidente </p>
          <p>O plano entregue pelo candidato afirma que ele tem compromisso com a defesa da igualdade, da democracia, da soberania e da paz. Também é compromisso de Lula buscar o desenvolvimento econômico sustentável, a justiça social, bem como reconhecer a diversidade. Com o objetivo de "recolocar os pobres e os trabalhores no orçamento", Lula pretende "revogar o teto de gastos e rever o atual regime fiscal brasileiro". O candidato chama o atual modelo de disfuncional e sem credibilidade. Lula propõe, ainda, fortalecer e modernizar a estrutura produtiva por meio da reindustrialização e do fortalecimento da produção agropecuária.</p>
        </div>
        <div className={styles.graficos}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
      <div className={styles.timeline}>
      </div>
      <aside className={styles.slides}>
      <BolsonaroSlide
        imagens="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAS1BMVEUAAAABAQFVVVVpaWkuLi4KCgpHR0c9PT1gYGBwcHBNTU0GBgYPDw9jY2NcXFwcHBx8fHxCQkIiIiJra2uDg4MzMzOLi4uTk5MnJyfXHBoSAAAC50lEQVR4nO3Za3eiMBSF4Ry13uqlOrXj//+lYxVCoojC0iR7zft8aL1Q2abnBAjOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACys9wBBlLNDQAAAAAAimK/awya6wyfYsHPQz2bL74Wy8/cWXoxtxqvN+PRbvKRO0ofp+FejMbL2X4rFfuUe/5nOZpOtiutMnHuezmfbw7bVe4cPR1/ptPRaCI33LOf8XJ3WGlV98nk7240O+xzx+jvez3dH9Wq+2TztZ7pDbc5W6yngsNtbrs55g4x0IfWOVXFxE4FAQDopHpUU80NPMFE61s1N/MJnqJaJ5K5zTTnE3InR+6ETlUimPtc3YK5dfuS3GmROykjd0pG7qTIndLvuQm509HNrVrfVW7R5LK5xajWt+p4q14Xm3pfKuW2hlTuIHjuJP2J55bLXlW3WGy5rqzHV60vL1FNri+r3KrzoORxx7Ry+4hix/kwd6K+7NjBgF2H452Nau4BfGZypxDUiFJuzdpOlrv144fu1MLY783+0twuXW730rZXK2rgGWXUdRkp/gfBSBdzoH6YI96gmNwdrjKWlPju8LW88epj/yCdu7ucR9y+Fj57Q6ZndO+35aqkkNz3XNY2Wq5K4qTNs1IWQ3o2YzGXMPlzPyjhrrfNb3TvkJPsmuWqrczaXr/5iBy5nxN0mIU/6zsEN5tbuF0+ce56heNR7mLaseHHu7kpU3278wOXcCrv9clXdRMEC+4uhdu/f+At3n3XlvW4BvdI6wdVpSS8eRpVZrjbeNnO/JvxGlPwWtq+bO081/qPf5Q7eV82E0KUtxrCJnK0qS+N+u8y5W72H+VuSiSuiHAN2OrJJsc82Bw96mfOx4kLxA+1q1sxrJwsyf2vq9xxbYTfJPpq+ZIHD33wsBVvi8TZ1V9mcDMPtuS21tz5T6oqdplJfK/6UshcEo9EHSiS2+cMJzrnc+cNN1D5sdsDFh+b3AAAAADwEv8A8okHcODdnNEAAAAASUVORK5CYII="
        texto="aparece boceta"
        titulo="EU VI ALMEIDA" />
      </aside>
    </section>
  );

}

export default Bolsonaro;
