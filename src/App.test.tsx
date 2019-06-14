import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Startpage, Home, Setting, Simulation} from './pages';
import {Navbar, Header} from './components';
import Adapter from 'enzyme-adapter-react-15';
import { configure, mount, shallow, render } from 'enzyme';

configure({ adapter: new Adapter() });
const getType = require('jest-get-type');
console.log(getType(<Home />));

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const pages: array = [{name:"Startpage", jsx: <Startpage />},
                      {name:"Home", jsx: <Home />},
                      {name: "Setting", jsx:<Setting />},
                      {name:"Simulation", jsx: <Simulation />}];

describe("Pages Suite", ()=>{
  pages.forEach((page)=>{
    it(`${page.name} Renders Correctly`, ()=>{
      let el = render(page.jsx);
    })
  })
})

const components: array = [
                        //{name:"Navbar", jsx: <Navbar />},
                          {name:"Header", jsx: <Header />}];

describe("Components Suite", ()=>{
  components.forEach((component)=>{
    it(`${component.name} Renders Correctly`, ()=>{
      let el = render(component.jsx);
    })
  })
})


// describe('Component Suite', () => {
//   it('correctly renders', () => {
//     const startpage = render(<Startpage />);
//     expect(startpage).toMatchSnapshot();
//   });
// });
