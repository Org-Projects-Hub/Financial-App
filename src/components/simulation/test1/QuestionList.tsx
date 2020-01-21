import React, { useState } from 'react';
import { QuestionListButton, QuestionListCard, ListHeading, Line } from "../../../style/preposttest";

interface Props {
    isMobile: boolean,
    sel: {id: number, value: string}[],
    total: number,
    set: Function,
    q: string[]
}

//desktop- needs to be clear which question is currently being viewed

const QuestionList = (props: Props): JSX.Element => {
    
    const [toggleMenu, setToggleMenu] = useState(false);

    if (props.isMobile) {
        return (
            <div>
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                    show menu
                </button>

                {toggleMenu? 
                    <div className="menu">
                    <button>one</button>
                    <button>two</button>
                    </div>
                    :
                    null}
                
            </div>
        );
    } else {
        return (
            <QuestionListCard>
                <ListHeading>Questions</ListHeading>
                {props.q.map((q, i) => 
                    <div key={i}>
                        <Line />
                        <QuestionListButton 
                            onClick={() => props.set(i)}
                            disabled={props.sel[i] === undefined}
                            value={props.sel[i] === undefined? null : props.sel[i].value} >
                            {i+1}. {props.sel[i] === undefined? "unanswered": props.sel[i].value}
                        </QuestionListButton>    
                    </div>
                )}
            </QuestionListCard>
        );
    }

    
}

export default QuestionList;
