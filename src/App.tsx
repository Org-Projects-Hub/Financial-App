import React, { createContext } from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import './style/App.css';
import './style/animations.css';
import {Navbar, Modal , Loader} from './components';
import { Setting, Simulation, Startpage, Signup, UserStartPage, ClassDashboard, AdminPanel} from './pages';
import api from './api';
import { setLocalStorage } from './utils/utils';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, user: object, modal: boolean
};

const GetInfoContext = createContext(()=>{console.log("No Context")});

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, user: {}, modal: false};
  }

  getUserInfo = () : boolean=>{
    api.auth()
    .then((res)=> {
      if(res.success){ this.setState({loggedin : true, user : res.user});}
      this.setState({tokenChecked: true});
      })
    .catch((err)=>alert(err))
    .finally(()=>{this.setState({tokenChecked: true})});
    return true;
  }

  componentWillMount() {
    if(!this.state.tokenChecked) this.getUserInfo()
  }

  render(){
    const login = (e: any) => {
      api.login(e)
        .then(res => {
          if (res.success) {
            this.setState({ loggedin: true, user: res.user });
            setLocalStorage("token", res.token);
          } else {
            alert(res.message);
          }
        })
        .catch(err => alert(err));
     };

    const loggedin = (token : string, user: object) => {
        setLocalStorage("token", token);
        this.setState({user: user, loggedin: true});
    }

    const logout = () => {
        setLocalStorage("token", "");
        this.setState({ loggedin: false });
    }

    const close = ()=>{
      this.setState({modal: false})
    }


    return(
          <>{this.state.tokenChecked?
                <Router>
                    {this.state.loggedin ?
                      <div className={this.state.showNav? "grid-main": ""}>
                         <GetInfoContext.Provider value={this.getUserInfo}>
                        <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
                        <Switch>
                          <Route path="/classes" render={() => <UserStartPage user={this.state.user}/>} />
                          <Route path="/classDashboard" render={() => <ClassDashboard user={this.state.user}/>} />
                          <Route path="/Simulation" render={()=> <Simulation user={this.state.user} />} />
                          <Route path="/setting" render={()=> <Setting logout={logout} getUserInfo={this.getUserInfo} user = {this.state.user}/>} />
                          <Route path="/admin-pannel" render={()=> <AdminPanel />} />
                          <Route path="*" render={()=> <Startpage login={login} loggedin={this.state.loggedin} logout={logout}/>} />
                        </Switch>
                        </GetInfoContext.Provider>
                    </div>
                   :
                   <Switch>
                      <Route path="/signup" render={() => <Signup loggedin={loggedin} />} />
                      <Route path="*" render={()=> <Startpage login={login} loggedin={this.state.loggedin} logout={logout}/>} />
                    </Switch>
                  }
              </Router>
                :
              <Loader />
          }
        </>

      );
    }
}
