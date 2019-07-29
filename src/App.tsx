import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Navbar} from './components';
import {Home, Setting, Simulation, Startpage, Signup} from './pages';
import api from './api';
import {setLocalStorage } from './utils/utils';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, user: object
}

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, user: {}};
  }

  componentWillMount() {
    if(!this.state.tokenChecked){
      api.auth()
      .then((res)=> {console.log(res);
        if(res.success){

                  this.setState({loggedin: true});

                      }})
      .catch((err)=>alert(err));
    }

    this.setState({tokenChecked: true});

  }

  render(){
    const login = (e: any) => {
      api.login(e)
        .then(res => {
          console.log(res)
          if (res.success) {
            this.setState({ loggedin: true });
            setLocalStorage("token", res.token);

          } else {
            alert(res.message);
          }
        })
        .catch(err => alert(err));
     };

    const loggedin = () => {
        this.setState({ loggedin: true })
    }

    return(
        <Router>
            {this.state.loggedin ?
              <div className={this.state.showNav? "grid-main": ""}>
            <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
            <Switch>
            <Route path="/Simulation" render={()=> <Simulation username={"aa"} />} />
            <Route path="/setting" component={Setting} />
            <Route path="/" render={()=> <Home username={"aa"} />} />

            </Switch>
            </div>
           :<Switch>

            <Route path="/signup" render={() => <Signup loggedin={loggedin} />} />

             <Route render={()=> <Startpage login={login}  loggedin={loggedin}/>} />
            </Switch>
          }

        </Router>
);
    }
}
