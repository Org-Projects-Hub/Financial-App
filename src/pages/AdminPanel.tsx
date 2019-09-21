import React from 'react';
import {Wrapper, Card, Grid} from '../style/styled';
import { SelectInput} from '../components';
import styled from 'styled-components';
import { setLocalStorage } from '../utils/utils';
import { Chart } from "react-google-charts";
import Loader from '../components/shared-components/Loader';
const AdminPanel = ()=>{
 const options = ["All Users", "Age", "Gender", "Grade"];
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
        </div>
        <SelectInput style={{width: "50%"}} name={"name"} arr={options} required={true} action={()=>{console.log()}} />

        <Card className="full-width" >
          <Grid cols="3" >
            <span className="pointer bold active-tab" >Test Scores</span>
            <span className="pointer bold">Debt</span>
            <span className="pointer bold">Test Question</span>
          </Grid>
        </Card>


        <Card className="full-width" style={{minHeight: "10em"}} >
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

        <Card className="full-width" style={{minHeight: "10em"}} >
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
