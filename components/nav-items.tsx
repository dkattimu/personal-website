import NavItem from './nav-item';
import * as fss from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { truncate } from 'fs';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

/*const navItemsHoriList =[]

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
/*const navItemsHoriListJsx = navItemsHoriList.map((elt, id) => {
  <ul key={id}>{elt}</ul>;
});
*/
/*const navItemsVertListJsx = navItemsVertList.map((elt, id) => {
  <ul key={id}>{elt}</ul>;
});
*/

/**
 *
 * @param alwaysShowHome {boolean}  if true, Home nave item is visible always
 */
const getHorizontalNavItems = (alwaysShowHome: boolean = true) => {
  return [
    <NavItem
      menuIcon={fss.faHome}
      menuText='Home'
      visibility={{ always: alwaysShowHome, whenWide: true }}
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
};
/**
 *
 * @param alwaysShowHome {boolean}  if true, Home nave item is visible always
 */
const getVerticalNavItems = (alwaysShowHome: boolean = true) => {
  let res: Array<JSX.Element>;
  //list without Home
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
  res = navItemsVertList.map((elt) => elt);
  if (alwaysShowHome) {
    //Home is visible so don't add to vertical Nav items
  } else {
    //Home should be part of the vertical Nav items
    res.unshift(
      <NavItem
        menuIcon={fss.faHome}
        menuText='Home'
        visibility={{ always: false, whenWide: false }}
      />,
    );
  }

  return res;
};
/**
 *
 * @param alwaysShowHome
 */
const getNavItems = (alwaysShowHome = true) => {
  let res: {
    wideNavItems: Array<JSX.Element>;
    narrowNavItems: Array<JSX.Element>;
  };

  res = {
    wideNavItems: getHorizontalNavItems(alwaysShowHome),
    narrowNavItems: getVerticalNavItems(alwaysShowHome),
  };

  return res;
};
export { getNavItems, getHorizontalNavItems, getVerticalNavItems };
