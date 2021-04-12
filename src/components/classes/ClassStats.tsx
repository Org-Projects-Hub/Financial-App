import React, { useEffect, useState } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import test from '../../json/Tests.json';

interface statType {
  label: String;
  data: number[];
  backgroundColor: String;
}

const ClassStats = () => {
  const [stats, setStats] = useState<statType[][]>([]);

  useEffect(() => {
    // Get data from backend

    let data: statType[][] = [];

    for (let i = 0; i < data.length; i++) {
      let x = data[i];
      x[0]['backgroundColor'] = '#227dbf';
      x[1]['backgroundColor'] = '#fcb23d';
    }

    setStats(data);
  }, []);

  const data = {
    labels: test.answers,
    datasets: [
      {
        label: 'Before Simulation',
        data: [12, 19, 3, 5, 2],
        backgroundColor: '#227dbf',
      },
      {
        label: 'After Simulation',
        data: [2, 3, 20, 5, 1],
        backgroundColor: '#fcb23d',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const chartsGenerator = () => {
    return test.questions.map((question, i) => (
      <div
        key={i}
        style={{
          margin: 'auto',
          width: '75%',
          marginTop: '1.5%',
          fontSize: '1.15em',
        }}
      >
        <p className="ta-center">{question}</p>
        {/* data will be replaced by stats[i] */}
        <Bar data={data} height={120} />
      </div>
    ));
  };
  return (
    <>
      <div
        className="generic-card"
        style={{
          width: '80vw',
          margin: 'auto',
          minHeight: '80vh',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <div className="ta-center general-heading">Response Overview</div>
        {chartsGenerator()}
      </div>
    </>
  );
};

export default ClassStats;
