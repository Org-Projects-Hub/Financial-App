import React, {useState} from 'react';
import styled from 'styled-components';
import data from './Simulation.json'; 

const Circle = styled.div`
background: yellow;
border-radius: 50%;
height: 50vh;
width: 30vw;
text-align: center;
`;

/**"education":[
        {"id":0,"edulevel":"High School Diploma"},
        {"id":1,"edulevel":"Bachelors Degree"},
        {"id":2,"edulevel":"Masters Degree"},
        {"id":3,"edulevel":"GED/HSET"},
        {"id":4,"edulevel":"Asscoiates Degree"}], */


const Wheel = () => {
    
    
    const [index, setIndex] = useState(0);
    const [selection, setSelect] = useState(null);
    let [spinning, setSpin] = useState(false);
    const [counter, setCount] = useState(0);


    let countdown:number = null; 


    const props = data.education;


    
    function spin(){
        console.log('spin')
        setIndex( index + 1 );
        setInterval(() => {timer()}, 1000);

    }

       function timer():void{
    
        if(index < props.length){
            setSelect(props[index]);
            setIndex(index+1);
            console.log(index);
        }
        else{
            clearInterval(countdown);
            setSpin(false)
            setCount(2);
        }

        setSelect(props[index]);
    } 

    
    return(
        spinning ?
            counter < 1 ? 
        
            <div>
    
                <button onClick={()=>{spin()}}>STOP</button>
                {selection}
              
            </div>
            :
            <div>{selection}</div>

        

        :

        <div>
            <Circle>
                {selection}
            </Circle>
            <button onClick={()=>{setSpin(true)}}>SPIN</button>
        </div>

    );
}


/*class Wheel extends React.Component{
    constructor(props:any){
        super(props)

        this.state ={
            spinning: null
        }
    }
}*/

export default Wheel;