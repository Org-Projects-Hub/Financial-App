import React from 'react';
import {Wrapper, Card, Grid} from '../style/styled';
import {SettingItem} from '../components';
import styled from 'styled-components';
import { setLocalStorage } from '../utils/utils';
import { Chart } from "react-google-charts";

const AdminPannel = ()=>{

    return (
      <Wrapper className="full-height">
       <div className="container" >
       <Grid cols="1" >
        <button className="btn">User Types</button>
        <Card style={{width: "100%", maxWidth:"100%", minHeight: "10em"}} >
        <Chart
          width={'100%'}
          style={{maxWidth:"80vw"}}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Demographics', 'Pretest', 'PostTest'],
            ['Freshmen', 80, 35],
            ['Sophomore', 95, 20],
            ['Juniors', 78, 30],
            ['Senior', 85, 5],
            ['Others', 40, 70],
          ]}
          options={{
            title: 'PreTest Vs PostTest',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Scores',
              minValue: 0,
            },
            vAxis: {
              title: 'Demographics',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />

        </Card>

        <Card style={{width: "100%", maxWidth:"100%", minHeight: "10em"}} >
        <Chart
          width={'100%'}
          style={{maxWidth:"80vw"}}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Demographics', 'Pretest', 'PostTest'],
            ['Freshmen', 80, 35],
            ['Sophomore', 95, 20],
            ['Juniors', 78, 30],
            ['Senior', 85, 5],
            ['Others', 40, 70],
          ]}
          options={{
            title: 'PreTest Vs PostTest',
            chartArea: { width: '80%' },
            hAxis: {
              title: 'Scores',
              minValue: 0,
            },
            vAxis: {
              title: 'Demographics',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />

        </Card>
      </Grid>
       </div>
      </Wrapper>
    );
  }
export default AdminPannel;
