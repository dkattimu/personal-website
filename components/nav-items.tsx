import NavItem from './nav-item';
import * as fss from '@fortawesome/free-solid-svg-icons';
import react from 'react';
import { truncate } from 'fs';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

const navItemsHoriList = [
  <NavItem
    menuIcon={fss.faHome}
    menuText='Home'
    visibility={{ always: true, whenWide: true }}
  />,

  <NavItem
    menuHref='/blog'
    menuIcon={fss.faBlog}
    menuText='Blog'
    visibility={{ always: false, whenWide: true }}
  />,

  <NavItem
    menuHref='/projects'
    menuIcon={fss.faUserCog}
    menuText='Projects'
    visibility={{ always: false, whenWide: true }}
  />,
  <NavItem
    menuHref='/research'
    menuIcon={fss.faTasks}
    menuText='Research'
    visibility={{ always: false, whenWide: true }}
  />,

  <NavItem
    menuHref='/about'
    menuIcon={fss.faInfo}
    menuText='About'
    visibility={{ always: false, whenWide: true }}
  />,
];
const navItemsVertList = [
  <NavItem
    menuHref='/blog'
    menuIcon={fss.faBlog}
    menuText='Blog'
    visibility={{ always: false, whenWide: false }}
  />,

  <NavItem
    menuHref='/projects'
    menuIcon={fss.faUserCog}
    menuText='Projects'
    visibility={{ always: false, whenWide: false }}
  />,
  <NavItem
    menuHref='/research'
    menuIcon={fss.faTasks}
    menuText='Research'
    visibility={{ always: false, whenWide: false }}
  />,

  <NavItem
    menuHref='/about'
    menuIcon={fss.faInfo}
    menuText='About'
    visibility={{ always: false, whenWide: false }}
  />,
];

const navItemsVertListAll = navItemsVertList
  .map((elt) => elt)
  .unshift(
    <NavItem
      menuIcon={fss.faHome}
      menuText='Home'
      visibility={{ always: false, whenWide: false }}
    />,
  );
//export default navItemsList;
const navItemsHoriListJsx = navItemsHoriList.map((elt, id) => {
  <ul key={id}>{elt}</ul>;
});

const navItemsVertListJsx = navItemsVertList.map((elt, id) => {
  <ul key={id}>{elt}</ul>;
});

export {
  navItemsHoriList,
  navItemsVertList,
  navItemsVertListAll,
  navItemsHoriListJsx,
  navItemsVertListJsx,
};
