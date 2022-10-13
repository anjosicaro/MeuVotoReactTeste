import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.png'
import BolsonaroSlide from './BolsonaroSlide'
import React from "react";
import { Chart } from "react-google-charts";
import noticia1 from "../images/noticia1.png"
import noticia2 from "../images/noticia2.png"
import noticia3 from "../images/noticia3.png"

export const data = [
  ["Regiões", "Porcentagem de votos"],
  ["Norte", 7],
  ["Nordeste", 2],
  ["Centro-Oeste", 7],
  ["Sudeste ", 3],
  ["Sul", 7],
];

export const options = {
  title: "Porcetagem de votos por região",
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
          <p>O atual presidente afirma que o atual plano de governo foi elaborado com a participação de especialistas e o conjunto de propostas é uma entrega "série, realista e honesta para a sociedade brasileira". O plano indica que entre as reformas consideradas estruturantes para garantir emprego e renda e a retomada do crescimento, o candidato propõe simplificar a legislação e reduzir a carga tributária, bem como prosseguir nos avanços da legislação trabalhista para facilitar as contratações. A proposta fala ainda em manter conceitos "inegociáveis do projeto em andamento". Entre eles, o texto cita liberdade, democracia, vida, família e segurança. </p>
          <a href="https://divulgacandcontas.tse.jus.br/candidaturas/oficial/2022/BR/BR/544/candidatos/908966/5_1660093698051.pdf" target="_blank" rel="noreferrer">Para mais informações</a>
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
        <h3>Polemicas envolvendo o Atual Presidente, e candidato Jair Bolsonaro</h3>
      <BolsonaroSlide
        imagem1={noticia1}
        imagem2={noticia2}
        imagem3={noticia3} />
      </aside>
    </section>
  );

}

export default Bolsonaro;
