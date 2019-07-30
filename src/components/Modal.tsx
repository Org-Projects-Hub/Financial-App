import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;

const Modall = styled.div`
background-color: #fefefe;
margin: 2% auto;
border: 1px solid #888;
width: 80%;
padding: 0;
max-width: 800px;
color: black;
@media(max-width: 600px){
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}`;

const Btn = styled.button`
color: white;
background: #006666;
border: 0;
width: 3em;
height: 3em;
margin: 0;
`;

const Header = styled.div`
color: white;
background: #006666;
border: 0;
margin: 0;
height: 3em;`;

// const Modal = (props: any ) =>{
// if(props.show){
//     return (<Wrapper>
//               <Modall>
//               <Header>
//                 <Btn style={{float: "right"}}  className="bt right-corner"  onClick={props.onClose}> &nbsp;X&nbsp; </Btn>
//               </Header>
//                 <div >
//                 <div style={{minheight: "5em", padding: "2em"}} className="blue-txt bold txt-md">
//                 <input placeholder="Project Name"/>
//                 <input placeholder="Description"/>
//                 <input placeholder="Link"/>
//                 <span className="txt-xs">Team Members</span><input placeholder="Members"/>
//                 </div>
//                  <div>
//                   <button  className="btn hoverr blue-bg half" onClick={props.onConfirm}>Add</button>
//                   <button className="btn hoverr blue-bg half" onClick={props.onClose}>Cancel</button>
//                 </div>
//               </div>
//               </Modall>
//           </Wrapper>);
// } else{
//   return null;
// }
//   };

  const Modal = ({user, close}: {user: any, close: any}) =>
      (<Wrapper>
                <Modall>
                <Header>
                  <Btn style={{float: "right"}} className="bt right-corner"  onClick={close}> &nbsp;X&nbsp; </Btn>
                </Header>
                  <div >
                  <div style={{minHeight: "5em", padding: "2em"}} className="blue-txt bold txt-md">
                  <h5>Welcome to Fin App, {user.firstName}!</h5>
                  <h5>Head on to the Simulation when you are ready</h5>
                  </div>
                   <div>
                    <button className="btn hoverr full" onClick={close}>Cancel</button>
                  </div>
                </div>
                </Modall>
            </Wrapper>);

  export default Modal;
