import React from 'react';
import {Wrapper, Card, Grid} from '../style/styled';
import { SelectInput} from '../components';
import styled from 'styled-components';
import { setLocalStorage } from '../utils/utils';
import { Chart } from "react-google-charts";
import Loader from '../components/Loader';
const AdminPanel = ()=>{

    return (
      <Wrapper className="full-height">
       <div className="container" >
       <Grid cols="1" >
        <div className="selection-menus">
          <select className="btn">
            <option value="all">All Users</option>
            <option value="org">Organizations</option>
            <option value="ind">Individuals</option>
          </select>
          <select className="btn">
            <option value="all">All Demographics</option>
            <option value="age">Age</option>
            <option value="gen">Gender</option>
            <option value="gra">Grade</option>
          </select>
        </div>
        <SelectInput style={{width: "50%"}} name={"name"} arr={["1"]} required={true} action={()=>{console.log()}} />



        <Card style={{width: "100%", maxWidth:"100%", minHeight: "10em"}} >
        <Chart
          width={'100%'}
          style={{maxWidth:"80vw"}}
          height={'300px'}
          chartType="BarChart"
          loader={<Loader />}
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
export default AdminPanel;
