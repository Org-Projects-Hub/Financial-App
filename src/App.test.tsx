import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Startpage, Home, Setting, Simulation} from './pages';
import {Navbar, Header} from './components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

configure({ adapter: new Adapter() });
const getType = require('jest-get-type');
console.log(getType(<Home />));

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

type Page = { name: string, jsx: object}; 
const pages: array = [{name:"Startpage", jsx: <Startpage />},
                      {name:"Home", jsx: <Home />},
                      {name: "Setting", jsx:<Setting />},
                      {name:"Simulation", jsx: <Simulation />}];

describe("Pages Suite", ():void=>{
  pages.forEach(({name, jsx})=>{
    it(`${name} Renders Correctly`, ()=>{
      let el = render(jsx);
       expect(el).toMatchSnapshot();
    })
  })
})

const components: array = [{name:"Header", jsx: <Header />}];

describe("Components Suite", ()=>{
  components.forEach(({name, jsx})=>{
     test(`${name} Renders Correctly`, ()=>{
      let el = render(jsx);
    })
  })
})

describe("Click", ()=>{
it(`Startpage Renders Correctly`, ()=>{
      let el = mount(<App />).find('button').simulate('click');
      expect(window.location.pathname).toBe('/');
    })
  })

  describe("Click", ()=>{
  it(`Startpage Renders Correctly`, ()=>{
    //    let el = mount(<App />).find('button').simulate('click');
     let el = mount(<App />);
     expect(el.find('.btn-round')).toHaveLength(1);
     expect(window.location.pathname).toBe('/');

      el.find('.btn-round').simulate('click');
      expect(el.find('.grid-main')).toHaveLength(1);

        el.find('.nav-item').at(0).simulate('click');

        console.log(`Page is at ${window.location}`);
      })
    })


 // <MemoryRouter initialEntries={[ '/random' ]}>
 //  </MemoryRouter>



// describe('Component Suite', () => {
//   it('correctly renders', () => {
//     const startpage = render(<Startpage />);
//     expect(startpage).toMatchSnapshot();
//   });
// });
