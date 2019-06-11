import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Startpage from './pages/Startpage';
import Setting from './pages/Setting';
import Simulation from './pages/Simulation';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true};
  }

  componentWillMount() {}

  render(){
    if(!this.state.loggedin){
      return (
        <Router>
          <div className={this.state.showNav? "grid-main": ""}>
          <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
          <Switch>
            <Route path="/Simulation" render={()=> <Simulation {...this.state}  />} />
            <Route path="/setting" component={Setting} />
            <Route path="/" component={Home} />
          </Switch>
          </div>
        </Router>
      )} else{
        return(<div>ss</div>)};
    }
}


export default App;
