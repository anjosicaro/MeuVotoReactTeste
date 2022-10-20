import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import CarouselFadeExample from "./LulaSlide.jsx";
import React from "react";
import { Chart } from "react-google-charts";
import noticia1 from '../images/n1.jpeg';
import noticia2 from '../images/n2.jpeg';
import noticia3 from '../images/n3.jpeg';

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
            <h1>1980</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine2}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine2 ? 'flex' : 'none' }}>
            <h1>Legislativo da cidade </h1>
            <p> Em abril de 1980, meses após a aprovação da Lei da Anistia (1979) — ainda sob a ditadura militar —, cerca de 140 mil trabalhadores da região do ABC Paulista participaram de uma greve organizada pelos sindicatos locais, inclusive o presidido por Lula.</p>

          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>1992</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine1}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine1 ? 'flex' : 'none' }}>
            <h1>Instituto Cidadania</h1>
            <p>Desde 1992, Lula atua como conselheiro do Instituto Cidadania, organização não-governamental criada após a experiência do Governo Paralelo, voltado para estudos, pesquisas, debates, publicações e principalmente formulação de propostas de políticas públicas nacionais, bem como de campanhas de mobilização da sociedade civil rumo à conquista dos direitos de cidadania para todo o povo brasileiro.</p>

          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>2003 - 2011</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine3}></button>

          </div>
          <div className={styles.timeText} style={{ display: timeLine3 ? 'flex' : 'none' }}>
            <h1>Lula na presidencia </h1>
            <p>Luiz Inácio Lula da Silva, mais conhecido como Lula, é um ex-sindicalista, ex-metalúrgico e político brasileiro. Filiado ao Partido dos Trabalhadores, foi o 35.º presidente do Brasil entre 1.º de janeiro de 2003 e 1.º de janeiro de 2011</p>
          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
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



