import NavItem from './nav-item';
import * as fss from '@fortawesome/free-solid-svg-icons';

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
 * @param alwaysShowHome {boolean}  if true, Home nave item is visible always
 */
const getHorizontalNavItems = (alwaysShowHome = true): Array<JSX.Element> => {
  return getNavItemsHelper(alwaysShowHome, true);
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

/**
 *  Create a list with index for each element in list
 *  doesn't seem to be working...
 * @param arr
 */

const createJSXIndexedList = (arr: Array<JSX.Element>) => {
  return (
    <span>
      {arr.map((elt, index) => {
        <a key={index}>{elt}</a>;
      })}
    </span>
  );
};
export { getNavItems, getHorizontalNavItems, getVerticalNavItems };
