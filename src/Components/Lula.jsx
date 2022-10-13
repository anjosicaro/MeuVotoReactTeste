import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import CarouselFadeExample from "./LulaSlide.jsx";
import React from "react";
import { Chart } from "react-google-charts";
import noticia1 from '../images/n1.jpeg'
import noticia2 from '../images/n2.jpeg'
import noticia3 from '../images/n3.jpeg'

export const data = [
  ["Regiões", "Votos primeiro turno"],
  ["Norte", 3],
  ["Nordeste", 7],
  ["Centro-Oeste", 2],
  ["Sudeste", 3],
  ["Sul", 2],
];

export const options = {
  title: "Porcentagem de votos por região",
  is3D: true,
};

function Lula() {
  return (
    <section className={styles.candidato}>
      <div className={styles.topo}>
        <div className={styles.fundoImagem}>
          <img src={LulaFoto} alt="Foto do candidato Lula" />
        </div>
        <div className={styles.Info}>
          <h1>Luiz Inacio <span className={styles.span}>Lula</span> da Silva</h1>
          <h4>Partido dos Trabalhadores - <span className={styles.span}>13</span></h4>
          <p>Conheça a trajetoria politica <br /> do candidato e ex presidente </p>
          <p>O plano entregue pelo candidato afirma que ele tem compromisso com a defesa da igualdade, da democracia, da soberania e da paz. Também é compromisso de Lula buscar o desenvolvimento econômico sustentável, a justiça social, bem como reconhecer a diversidade. Com o objetivo de "recolocar os pobres e os trabalhores no orçamento", Lula pretende "revogar o teto de gastos e rever o atual regime fiscal brasileiro". O candidato chama o atual modelo de disfuncional e sem credibilidade. Lula propõe, ainda, fortalecer e modernizar a estrutura produtiva por meio da reindustrialização e do fortalecimento da produção agropecuária.</p>
          <a href="https://divulgacandcontas.tse.jus.br/candidaturas/oficial/2022/BR/BR/544/candidatos/893498/5_1659820284477.pdf" target="_blank" rel="noreferrer">Para mais informações</a>
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
      <h3>Polemicas envolvendo o Ex Presidente, e candidato Lula da Silva</h3>
        <CarouselFadeExample
          imagem1={noticia1}
          imagem2={noticia2}
          imagem3={noticia3} />
      </aside>
    </section>
  );
}
export default Lula;



