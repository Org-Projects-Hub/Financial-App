import React from 'react';
import {Wrapper} from '../style/styled';
import styled from 'styled-components';

const Card = styled.div`
  border-top: 1px solid #2B547E;
  margin: 0.7em;
  box-shadow: 0 .25em .5em rgba(0,0,0,.5);
  border-radius: .5em;
  border: 3px solid transparent;
  display: grid;
  background: #D7DBDD  ;
  padding: 0.3em;
   grid-template-columns: 1fr 1fr 1fr;
  min-height: 3.8em;
  align-items: center;
  @media(max-width: 400px){
     grid-template-columns: 1fr 1fr;
  }`;

  const Grid2 = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
  `;

  type Props = {
    firstNameEdit: boolean, lastNameEdit: boolean,
    emailEdit: boolean, passwordEdit: boolean,
    changed: boolean, user: any
  }

class Setting extends React.Component <{}, Props> {
constructor(props: any){
  super(props);
  this.state = {
    firstNameEdit: false, lastNameEdit: false,
    emailEdit: false, passwordEdit: false,
    changed: false, user: {firstName: "aayush"}
  };
}
  submit= ()=>{}

  onChange = (e:any)=>{
 this.setState({changed: true});
  const{target: {value, name}} = e;
      this.setState({user :{...this.state.user, [name]: value} });
  }
  render() {
    const data = this.state.user;
    return (
      <Wrapper>
       <div style={{minHeight: "100vh"}} className="container" >
        <div className="profile-box full">
          <button  style={{justifySelf:"end", margin: "1em", width:"6em"}} className="btn hoverr pointer center" >Logout </button>
          <div style={{minHeight: "100vh"}}  className="grid full">

              <Grid2>
              <button style={{marginRight: "0.2em"}} className="btn" >Change Profile Picture</button>
              <button className="btn" onClick={this.submit}>Save Changes</button>
              </Grid2>

              <Card>
                <span className="bold text-md sp-2-sm">First Name</span>
                 {!this.state.firstNameEdit?
                   <span className="bold text-md">{data.firstName}</span> :
                   <input defaultValue={data.firstName}  name="firstName" onChange={this.onChange}/>}

                 {!this.state.firstNameEdit?
                 <i  className="material-icons pointer end blue-txt"  >edit</i> :
                  <i className="material-icons pointer end blue-txt" >done</i>}
              </Card>

              <Card>
                <span className="bold text-md sp-2-sm">Last Name</span>
                 {!this.state.lastNameEdit?
                   <span className="bold text-md">{data.lastName}</span> :
                   <input defaultValue={data.lastName}  name="lastName" onChange={this.onChange}/>}

                 {!this.state.lastNameEdit?
                 <i  className="material-icons pointer end blue-txt" >edit</i> :
                  <i className="material-icons pointer end blue-txt" >done</i>}
              </Card>
              <Card>
                <span className="bold text-md sp-2-sm">Email</span>
                 {!this.state.emailEdit?
                   <span className="bold text-md">{data.email}</span> :
                   <input defaultValue={data.email}  name="email" onChange={this.onChange}/>}
                 {!this.state.emailEdit?
                 <i  className="material-icons pointer end disabled">edit</i> :
                 <i className="material-icons pointer end blue-txt" >done</i>}
              </Card>
          </div>
        </div>
      </div>
      </Wrapper>
    );
  }
}
export default Setting;
