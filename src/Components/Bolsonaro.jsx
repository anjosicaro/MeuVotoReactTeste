import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.png'
import BolsonaroSlide from './BolsonaroSlide'
import React from "react";
import { Chart } from "react-google-charts";
import noticia1 from "../images/noticia1.jpeg";
import noticia2 from "../images/noticia2.jpeg";
import noticia3 from "../images/noticia3.jpeg";
// import fotoesquerda from '../images/jairjair.png';
// import fotodireita1 from '../images/elenunca.png';
// import fotodireita2 from '../images/elenao.png';



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
  const [timeLine1, setTimeLine1] = React.useState(false)
  const [timeLine2, setTimeLine2] = React.useState(false)
  const [timeLine3, setTimeLine3] = React.useState(false)
  function abrirTimeLine1(){
    setTimeLine1(()=> !timeLine1)
  }
  function abrirTimeLine2(){
    setTimeLine2(()=> !timeLine2)
  }
  function abrirTimeLine3(){
    setTimeLine3(()=> !timeLine3)
  }
  


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

      <div className={styles.time}>
        <div className={styles.hline}></div>
        {/* ======================================= item da time ============================================== */}
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>1988</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine2}></button>

          </div>
          <div className={styles.timeText} style={{display:timeLine2?'flex':'none'}}>
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
          <div className={styles.timeText} style={{display:timeLine1?'flex':'none'}}>
            <h1>Deputado federal</h1>
            <p> Em 1990, dois anos depois de eleito, conquistou o primeiro dos sete mandatos consecutivos no cargo de deputado federal pelo Rio de Janeiro.</p>
            
          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        
        <div className={styles.timeItem}>
          <div className={styles.ano}>
            <h1>2019</h1>
            <button className={styles.hlinebutton} onClick={abrirTimeLine3}></button>

          </div>
          <div className={styles.timeText} style={{display:timeLine3?'flex':'none'}}>
            <h1>Bolsonaro na presidencia </h1>
            <p>Jair Bolsonaro foi eleito em outubro de 2018 presidente da República com 57.797.847 dos votos, 55,13% do eleitorado brasileiro, pela Coligação Brasil Acima de Tudo, Deus Acima de Todos (PSL/PRTB). </p>
          </div>
        </div>
        {/* ======================================= item da time ============================================== */}
        
      </div>
      <div className={styles.partebaixo}>
        <h3>Polemicas envolvendo o Ex Presidente, e candidato Lula da Silva</h3>
        <aside className={styles.slides}>
          <BolsonaroSlide
            imagem1={noticia1}
            imagem2={noticia2}
            imagem3={noticia3} />
        </aside>
      </div>
    </section>
  );

}

export default Bolsonaro;
