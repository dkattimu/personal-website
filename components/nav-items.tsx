import NavItem from './nav-item';
import * as fss from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface NavItemsInputType {
  descr: string;
  icon: fss.IconDefinition;
  route: string;
  isHome: boolean;
}

const NAV_CONFIG: Array<NavItemsInputType> = [
  { descr: 'Home', icon: fss.faHome, route: '/', isHome: true },
  { descr: 'Blog', icon: fss.faBlog, route: '/blog', isHome: false },
  { descr: 'Projects', icon: fss.faUserCog, route: '/projects', isHome: false },
  { descr: 'Research', icon: fss.faTasks, route: '/research', isHome: false },
  { descr: 'About', icon: fss.faInfo, route: '/about', isHome: false },
];

/**
 *
 * @param alwaysShowHome
 * @param showOnlyOnWide
 * @param predicate
 * @param navItemInputs
 */
const getNavItemsHelper = (
  alwaysShowHome: boolean,
  showOnlyOnWide: boolean,
  predicate: (input: any) => boolean = (elt) => true,
  navItemInputs: Array<NavItemsInputType> = NAV_CONFIG,
): Array<JSX.Element> => {
  return navItemInputs
    .filter((elt) => predicate(elt))
    .map((elt) => {
      const alwaysShow = elt.isHome && alwaysShowHome; // true only if HOME and alwaysShowHome is true
      return (
        <NavItem
          menuIcon={elt.icon}
          menuHref={elt.route}
          menuText={elt.descr}
          visibility={{ always: alwaysShow, whenWide: showOnlyOnWide }}
        />
      );
    });
};

/**
 *
 * @param alwaysShowHome
 * @param showOnlyOnWide
 * @param predicate
 * @param navItemInputs
 */
const getNavItemsHelperJSX = (
  alwaysShowHome: boolean,
  showOnlyOnWide: boolean,
  predicate: (input: any) => boolean = (elt) => true,
  navItemInputs: Array<NavItemsInputType> = NAV_CONFIG,
): JSX.Element => {
  return (
    <ul /*style={{ display: 'inline', flexDirection: 'row' }}*/>
      {navItemInputs
        .filter((elt) => predicate(elt))
        .map((elt) => {
          const alwaysShow = elt.isHome && alwaysShowHome; // true only if HOME and alwaysShowHome is true
          return (
            <NavItem
              //style={{ display: 'inline' }}
              key={elt.descr}
              menuIcon={elt.icon}
              menuHref={elt.route}
              menuText={elt.descr}
              visibility={{ always: alwaysShow, whenWide: showOnlyOnWide }}
            />
          );
        })}
    </ul>
  );
};

/**
 *
 * @param alwaysShowHome {boolean}  if true, Home nave item is visible always
 */
const getHorizontalNavItems = (alwaysShowHome = true): Array<JSX.Element> => {
  return getNavItemsHelper(alwaysShowHome, true);
};

/**
 *
 * @param alwaysShowHome
 */
const getHorizontalNavItemsJSX = (
  alwaysShowHome ,
  navItemsInputs,
): JSX.Element => {
  return getNavItemsHelperJSX(
    alwaysShowHome,
    true,
    navItemsInputs = navItemsInputs,
  );
};

/**
 *
 * @param alwaysShowHome
 * @param navItemInputs
 */
const getVerticalNavItems = (
  alwaysShowHome: boolean = true,
  navItemInputs: Array<NavItemsInputType> = NAV_CONFIG,
) => {
  let navItems: Array<JSX.Element> = getNavItemsHelper(
    alwaysShowHome,
    false,
    (elt) => !elt.isHome,
  );

  const homeConfig = navItemInputs.filter((elt) => elt.isHome)[0];
  if (alwaysShowHome) {
    //Home is visible so don't add to vertical Nav items
  } else {
    //Home should be part of the vertical Nav items
    navItems.unshift(
      <NavItem
        menuIcon={homeConfig.icon}
        menuHref={homeConfig.route}
        menuText={homeConfig.descr}
        visibility={{ always: false, whenWide: false }}
      />,
    );
  }

  return navItems;
};

/**
 *
 * @param alwaysShowHome
 * @param navItemInputs
 */
const getVerticalNavItemsJSX = (
  alwaysShowHome: boolean,
  navItemInputs: Array<NavItemsInputType> = NAV_CONFIG,
): JSX.Element => {
  let navItemsJSX: JSX.Element = getNavItemsHelperJSX(
    alwaysShowHome,
    false,
    (elt) => !elt.isHome,
  );

  const homeConfig = navItemInputs.filter((elt) => elt.isHome)[0];
  if (alwaysShowHome) {
    //Home is visible so don't add to vertical Nav items
  } else {
    //Home should be part of the vertical Nav items
    navItemsJSX = getNavItemsHelperJSX(alwaysShowHome, false, (elt) => true);
  }

  return navItemsJSX;
};

/**
 *
 * @param alwaysShowHome
 */
const getNavItems = (alwaysShowHome = true) => {
  let res: {
    wideNavItems: Array<JSX.Element>; //JSX.Element; //
    narrowNavItems: Array<JSX.Element>;
  };

  res = {
    wideNavItems: getHorizontalNavItems(alwaysShowHome),
    narrowNavItems: getVerticalNavItems(alwaysShowHome),
  };

  return res;
};

const getNavItemsJSX = ({
  isHomeAlways,
  navItemsList,
}): {
  wideNavItems: JSX.Element; //Array<JSX.Element>; //JSX.Element; //
  narrowNavItems: JSX.Element; //Array<JSX.Element>;
} => {
  return {
    wideNavItems: getHorizontalNavItemsJSX(isHomeAlways, navItemsList),
    narrowNavItems: getVerticalNavItemsJSX(isHomeAlways, navItemsList),
  };
};

getNavItemsJSX.defaultProps = {
  isHomeAlways: false,
  navItemsList: NAV_CONFIG,
};
export {
  getNavItems,
  getHorizontalNavItems,
  getVerticalNavItems,
  getNavItemsJSX,
};
