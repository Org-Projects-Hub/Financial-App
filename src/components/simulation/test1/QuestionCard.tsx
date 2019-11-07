import React from 'react';
import { NumberStr, QuestionStr, OptionButton } from '../../../style/preposttest';
import {Card, Grid} from '../../../style/styled';

interface Props {
    num: number,
    q: string,
    a: string[],
    sel: string,
    total: number,
    save: Function
}

const QuestionCard = (props: Props): JSX.Element => {

    return (
        <Card>
            <NumberStr>Question {props.num+1} of {props.total}</NumberStr>
            <QuestionStr>{props.q}</QuestionStr>

            <Grid cols="1">
                <ul className="answer-options">
                    {props.a.map((answer: string, i: any) =>
                    <li key={i}>
                        <OptionButton 
                        onClick={(e: any) => props.save(props.num, e.target.value)}
                        value={answer}
                        disabled={props.sel === answer} >
                            {answer}
                        </OptionButton>
                    </li>
                    )}
                </ul>
            </Grid>
        </Card>
    );
}

export default QuestionCard;
