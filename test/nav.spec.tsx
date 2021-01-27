import { mount, render, shallow } from 'enzyme';
import { getHorizontalNavItems } from '../components/nav-items';

//lets see if NavItem, NavItems and their helpers ...
describe('something', () => {
  const r = render(getHorizontalNavItems());
  console.log(r);
});
