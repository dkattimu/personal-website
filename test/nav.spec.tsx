import { mount, shallow } from 'enzyme';
import {
  render,
  fireEvent,
  waitFor,
  screen,
  prettyDOM,
} from '@testing-library/react';
import * as navItems from '../components/nav-items';
import Nav from '../components/nav';
import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from '../components/nav-item';
import * as fas from '@fortawesome/free-solid-svg-icons';

//lets see if NavItem, NavItems and their helpers ...
describe('something', () => {
  const { container, getByPlaceholderText } = render(
    <NavItem
      menuIcon={fas.faHome}
      menuText='Home'
      visibility={{ always: true, whenWide: true }}
    />,
  );
  it('just displaying some stuff', () => {
    console.log(`pure @testing-library-react ${prettyDOM(container)}`);
    expect(true).toBe(true);
  });

  it('does not crash', () => {
    const wrapper = mount(
      <NavItem
        menuIcon={fas.faHome}
        menuText='Home'
        visibility={{ always: true, whenWide: true }}
      />,
    );
    console.log(
      `mixing Enzyme and @testing-library-react ${prettyDOM(
        wrapper.getDOMNode(),
      )}`,
    );
    //expect(wrapper.).toContain('home');
    //expect(wrapper.props().menuText).to.equal('Home');
  });
  it('can use react dom', () => {
    ReactDOM.render(
      <NavItem
        menuIcon={fas.faHome}
        menuText='Home'
        visibility={{ always: true, whenWide: true }}
      />,
      document.body.appendChild(document.createElement('div')),
    );

    expect(document.body.textContent).toMatch('Home');
  });
});
//   it('displays the dom', () => {
