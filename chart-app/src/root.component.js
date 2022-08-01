import "./style.css";
import chart1 from "./assets/chart1.svg";
import chart2 from "./assets/chart2.svg";
import chart3 from "./assets/chart3.svg";

export default function Root(props) {
  const version = "17.0.2";

  return (
    <section>
      <div class="mb-3 mt-1 text-center">
        <span class="label label-primary">React v {version}</span>
      </div>
      <div>
        <img src={chart1} alt="chart1" />
        <img src={chart2} alt="chart1" />
        <img src={chart3} alt="chart1" />
      </div>
    </section>
  );
}
