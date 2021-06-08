import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import api from '../../api';
import test from '../../json/Tests.json';

interface statType {
  label: String;
  data: number[];
  backgroundColor: String;
}

// Get demo bar graph from https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js
const ClassStats = () => {
  const [stats, setStats] = useState<statType[][]>([]);
  let { authCode } = useParams<{ authCode: string }>();

  useEffect(() => {
    // Get data from backend

    let data: statType[][] = [];
    api.getClassStats(authCode).then((res) => {
      console.log(res);
      data = res.classDetails;

      for (let i = 0; i < data.length; i++) {
        let x = data[i];
        x[0]['backgroundColor'] = '#227dbf';
        // x[0]['data'] = [12, 19, 3, 5, 2];
        // x[1]['data'] = [2, 3, 20, 5, 1];
        x[1]['backgroundColor'] = '#fcb23d';
      }

      setStats(data);
    });
  }, []);

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
        <Bar
          data={{ labels: test.answers, datasets: stats[i] }}
          options={options}
          height={120}
        />
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
