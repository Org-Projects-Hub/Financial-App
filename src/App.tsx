import React, { createContext } from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import './style/App.css';
import './style/animations.css';
import {Navbar, Modal , Loader} from './components';
import { Setting, Simulation, Startpage, Signup, UserStartPage, ClassDashboard, AdminPanel} from './pages';
import api from './api';
import { setLocalStorage } from './utils/utils';
import openSocket from 'socket.io-client';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, user: object, modal: boolean
};

const GetInfoContext = createContext(null);
const  socket = openSocket('https://finapp.aayushh.com');

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, user: {}, modal: false};
  }

  getUserInfo = () : boolean=>{
    api.auth()
    .then((res)=> {
      if(res.success){ 
      this.setState({loggedin : true, user : res.user});
      this.socketSubscribe(res.user.email);
     }
      this.setState({tokenChecked: true});
      })
    .catch((err)=>alert(err))
    .finally(()=>{this.setState({tokenChecked: true})});
    return true;
  }

  socketSubscribe = (email: string) => {
    socket.emit('join', email)
    socket.on('msg', (res: any) => { 
      console.log(res);
      alert(`New Student Requested to Join a Class!`)
    });
  }

  componentWillMount() {
    if(!this.state.tokenChecked) this.getUserInfo();
  }

  render(){
    const login = (e: React.FormEvent<HTMLSelectElement>) => {
      api.login(e)
        .then(res => {
          if (res.success) {
            this.setState({ loggedin: true, user: res.user });
            setLocalStorage("token", res.token);
            this.socketSubscribe(res.user.email);
          } else {
            alert(res.message);
          }
        })
        .catch(err => alert(err));
     };

    const loggedin = (token : string, user: any) => {
        setLocalStorage("token", token);
        this.socketSubscribe(user.email);
        this.setState({user: user, loggedin: true});
    }

    const logout = () => {
        setLocalStorage("token", "");
        this.setState({ loggedin: false });
    }
    let { user }  = this.state; 
    return(
          <>{this.state.tokenChecked?
                <Router>
                    {this.state.loggedin ?
                      <div className={this.state.showNav? "grid-main": ""}>
                         <GetInfoContext.Provider value="message">
                        <Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>
                        <Switch>
                          <Route path="/classes" render={() => <UserStartPage user={user}/>} />
                          <Route path="/classDashboard" render={() => <ClassDashboard user={user}/>} />
                          <Route path="/Simulation" render={()=> <Simulation user={user} />} />
                          <Route path="/setting" render={()=> <Setting logout={logout} getUserInfo={this.getUserInfo} user={user}/>} />
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
