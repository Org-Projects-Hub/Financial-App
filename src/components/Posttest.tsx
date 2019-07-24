import React, { useState } from 'react';
import Test from './Test';
import Results from './Results';
import styled from 'styled-components';
import {Card, GridRow} from '../style/styled';

const Div = styled.div`
    text-align: center;
    padding: 15px;
`;

const Posttest = ({setStage}: any) => {
    const [begin, setBegin] = useState(false);
    const [testComplete, setTestComplete] = useState(false);
  
    return (
        !begin?
            <GridRow rows="2">
                <button className="btn" onClick={(e) => setBegin(true)}>Begin Pretest</button>
            </GridRow>
        :
            !testComplete?
                <div className="container">
                    <Test testType="pretest"/>
                    <Div><button className="btn" onClick={(e) => setTestComplete(true)}>Submit</button></Div>
                </div>
            :
                <GridRow rows="2">
                    <Card><Results /></Card>
    <Div><button className="btn" /**onClick={(e) => setStage("posttest")}*/>Finish</button></Div>
                </GridRow>
    );
}

export default Posttest;

/*
type Props = {
    begin: boolean,
    setStage: Function
};

export default class Posttest extends React.Component<{setStage: Function}, Props> {

    constructor(props: Props){
        super(props);
        this.state = {
            begin: false,
            setStage: props.setStage
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(event: any) {
        this.setState({ begin: true });
    }

    render() {
    let { begin } = this.state;
    return(
          !begin?
                <div className="container center">
                    <button className="btn" onClick={this.onClick}>Begin Posttest</button>
                </div>
               :
                <div className="container">
                        <Test testType="posttest"/>
                </div>
            );
        }
    }
*/
