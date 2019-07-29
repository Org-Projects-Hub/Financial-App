import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Navbar} from './components';
import {Home, Setting, Simulation, Startpage, Signup} from './pages';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, userName: string, newUser: boolean
}


export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, userName: "", newUser: false};
  }

  componentWillMount() {}
  render(){
    return(
        <Router>
            {this.state.loggedin ?
              <div className={this.state.showNav? "grid-main": ""}>
            <Switch>
            <Route path="/Simulation" render={()=> <Simulation {...this.state} />} />
            <Route path="/setting" component={Setting} />
            <Route path="/" render={()=> <Home {...this.state}  />} />

            </Switch>
            </div>
           :<Switch>

            <Route path="/signup" render={() => <Signup />} />

             <Route path="/" render={()=> <Startpage onChange={(e:any)=>{this.setState({userName: e.target.value})}}
                                                    login={()=>{this.setState({loggedin: true})}}
                                                    createAccount={()=> {this.setState({newUser: true})}}  />} />
            </Switch>
          }

        </Router>
);
    }
}
