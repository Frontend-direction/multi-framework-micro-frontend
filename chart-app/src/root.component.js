import { useEffect, useRef } from 'react';

export default function Root(props) {
  const pieChart = useRef(null);

  const version = "17.0.2";

  let sectionStyles = {
    height: '70vh',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  }
  const circleStyles = {
    fill: '#ddd',
    stroke: '#337ab7',
    strokeWidth: '400',
    'stroke-dasharray': '0 1257',
    transition: 'stroke-dasharray 3s ease',
  }
  const svgStyle = {
    margin: '0 auto',
    transform: 'rotate(-90deg)',
    background: '#ddd',
    borderRadius: '50%',
    display: 'block'
  }
  
  let percentage = 70;
  let total = 1257;

  useEffect(() => {
    let result = ((percentage * total) / 100);

    pieChart.current.style.strokeDasharray = result;
  }, []);

  return (
    <section style={sectionStyles}>
      <h1>Pie chart</h1>
      <svg width="400" height="400" class="chart" style={svgStyle}>
        <circle ref={pieChart} r="200" cx="50%" cy="50%" class="pie" style={circleStyles} />
      </svg>
    </section>
  );
}
