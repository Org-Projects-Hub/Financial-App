import React from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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


  const Modal = ({text, close}: {text: any, close: any}) =>
      (
        <Wrapper>
          <ReactCSSTransitionGroup
            transitionName="pop"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter={true}
            transitionLeave={true}>
              <Modall>

                <Header>
                  <Btn style={{float: "right"}} className="bt right-corner"  onClick={close}> &nbsp;X&nbsp; </Btn>
                </Header>

                <div >

                  <div style={{minHeight: "5em", padding: "2em"}} className="blue-txt bold txt-md">
                    <h5>{text}</h5>
                  </div>

                  <div>
                    <button className="btn hoverr full" onClick={close}>Cancel</button>
                  </div>

                </div>
              </Modall>
          </ReactCSSTransitionGroup>
        </Wrapper> );

  export default Modal;
