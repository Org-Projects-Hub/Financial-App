import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Navbar} from './components';
import {Home, Setting, Simulation, Startpage, Signup} from './pages';
import api from './api';
type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, userName: string, newUser: boolean, user: object
}


export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, userName: "", newUser: false, user: {}};
  }

  componentWillMount() {}

  render(){
    const login = (e: any) => {
                                    api.login(e)
                                    .then((res)=> {if(res.sucess){

                                                    }} )
                                    .catch((err)=>alert(err))
                            };

    return(
        <Router>
            {this.state.loggedin ?
              <div className={this.state.showNav? "grid-main": ""}>
            <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
            <Switch>
            <Route path="/Simulation" render={()=> <Simulation {...this.state} />} />
            <Route path="/setting" component={Setting} />
            <Route path="/" render={()=> <Home {...this.state}  />} />

            </Switch>
            </div>
           :<Switch>

            <Route path="/signup" render={() => <Signup />} />

             <Route path="/" render={()=> <Startpage login={login}  />} />
            </Switch>
          }

        </Router>
);
    }
}
