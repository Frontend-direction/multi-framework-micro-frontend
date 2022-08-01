import { Chart } from './Chart';
import './style.css';

export default function Root(props) {
  const version = '17.0.2';

  return (
    <section>
    <div class="mb-3 mt-1 text-center">
      <span class="label label-primary">React v { version }</span>
    </div>
      <Chart />
    </section>
  );
}
