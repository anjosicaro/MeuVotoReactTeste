import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import CarouselFadeExample from "./LulaSlide.jsx";
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

function Lula() {
  return (
    <>
      <section className={styles.corpo}>
        <div className={styles.Container}>
          <div className={styles.fundoImagem}>
            <img src={LulaFoto} alt="Foto Lula" />
          </div>
          <div className={styles.Perfil}>
            <h1>Luiz Inacio <span className={styles.span}>Lula</span> da Silva</h1>
            <h4>Partido dos <span className={styles.span}>Trabalhadores - 13</span> </h4>
            <p>Conheça a trajetoria politica <br /> do candidato e ex presidente </p>
          </div>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </section>
      {/* <LulaHist /> */}
      <CarouselFadeExample />
    </>
  );
}
export default Lula;
