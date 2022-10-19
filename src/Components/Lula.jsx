import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import CarouselFadeExample from "./LulaSlide.jsx";
import React from "react";
import { Chart } from "react-google-charts";
import noticia1 from '../images/n1.jpeg';
import noticia2 from '../images/n2.jpeg';
import noticia3 from '../images/n3.jpeg';
import fotoesquerda from '../images/ch.png';
import fotodireita1 from '../images/lu-la.png';
import fotodireita2 from '../images/nota-folha.png';

export const data = [
  ["Regiões", "Votos primeiro turno"],
  ["Norte", 3],
  ["Nordeste", 7],
  ["Centro-este", 2],
  ["Sudeste", 3],
  ["Sul", 2],
];

export const options = {
  title: "Porcentagem de votos por região",
  is3D: true,
};

function Lula() {
  const [timeLine1, setTimeLine1] = React.useState(false)
  const [timeLine2, setTimeLine2] = React.useState(false)
  const [timeLine3, setTimeLine3] = React.useState(false)
  function abrirTimeLine1() {
    setTimeLine1(() => !timeLine1)
  }
  function abrirTimeLine2() {
    setTimeLine2(() => !timeLine2)
  }
  function abrirTimeLine3() {
    setTimeLine3(() => !timeLine3)
  }
  return (
    <section className={styles.candidato}>
      <div className={styles.topo}>
        <div className={styles.fundoImagem}>
          <img src={LulaFoto} alt="Foto do candidato Lula" />
        </div>
        <div className={styles.Info}>
          <h1>Luiz Inacio <span className={styles.span}>Lula</span> da Silva</h1>
          <h4>Partido dos Trabalhadores - <span className={styles.span}>13</span></h4>
          <p>Conheça a trajetoria politica do candidato e ex presidente </p><br></br><br></br>
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
      <div className={styles.time}>
        <div className={styles.hline}></div>
        {/* ======================================= item da time ============================================== */}
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>1988</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine2}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine2 ? 'flex' : 'none' }}>
            <h1>Legislativo da cidade </h1>
            <p>Sua carreira política começou em 1988, quando concorreu à Câmara Municipal do Rio de Janeiro e conseguiu uma vaga no Legislativo da cidade.</p>

          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>1990</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine1}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine1 ? 'flex' : 'none' }}>
            <h1>Deputado federal</h1>
            <p> Em 1990, dois anos depois de eleito, conquistou o primeiro dos sete mandatos consecutivos no cargo de deputado federal pelo Rio de Janeiro. lore</p>

          </div>
        </div>
        {/* ======================================= item da time ============================================== */}

        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>2019</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine3}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine3 ? 'flex' : 'none' }}>
            <h1>Bolsonaro na presidencia </h1>
            <p>Jair Bolsonaro foi eleito em outubro de 2018 presidente da República com 57.797.847 dos votos, 55,13% do eleitorado brasileiro, pela Coligação Brasil Acima de Tudo, Deus Acima de Todos (PSL/PRTB). </p>
          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        

      </div>
      <div className={styles.partebaixo}>
        <h3>Polemicas envolvendo o Ex Presidente, e candidato Lula da Silva</h3>
        <div className={styles.timeline}>
          <img src={fotoesquerda} alt="Foto do candidato Lula" className={styles.fotoesquerda} />
        </div>
        <aside className={styles.slides}>

          <CarouselFadeExample
            imagem1={noticia1}
            imagem2={noticia2}
            imagem3={noticia3} />

        </aside>
        <div className={styles.timeline}>
          <div className={styles.cardtotal}>
            <img src={fotodireita1} alt="Foto do candidato Lula" className={styles.fotoesquerda} />
          </div>
          <div className={styles.cardtotal}>
            <img src={fotodireita2} alt="Foto do candidato Lula" className={styles.fotoesquerda} />

          </div>
        </div>

      </div>
    </section>
  );
}
export default Lula;



