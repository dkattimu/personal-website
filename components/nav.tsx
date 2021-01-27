import Link from 'next/link';
import styles from './nav.module.css';
import * as navItems from './nav-items';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';

//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer

const Nav = ({ alwaysShowHome, continuousNavBar }) => {
  //useState for state of view
  console.log(`SHOW_ALWAYS: ${alwaysShowHome}`);
  const [showHiddenNavs, setShowHiddenNavs] = useState(false);

  const [{ wideNavItems, narrowNavItems }, setNavItemsObj] = useState(() => {
    const res = navItems.getNavItems(alwaysShowHome);
    console.log(`navItems Obj: ${res}`);

    return res;
  });
  //watch if clicked then update ShowHidden
  const toggleHiddenNavs = () => {
    setShowHiddenNavs(!showHiddenNavs);
  };
  const nav_container = continuousNavBar
    ? styles.nav__container_continuous
    : styles.nav__container;
  useEffect(() => {
    //alert(`Count of Narrow Items ${narrowNavItems.length}`);
    if (showHiddenNavs) {
      console.log('Showing Hidden Navs');
    } else {
      console.log('Not Showing Hidden Navs');
    }
  });
  //console.log(`Count of Narrow Items ${narrowNavItems.length}`);
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
      }} /* to push the bar on small screens to below Home*/
    >
      <div className={nav_container}>{wideNavItems}</div>
      <Link href='/'>
        <a onClick={() => toggleHiddenNavs()}>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            className={styles.nav__item_fa_bar} /*'nav-fa-bar'*/
          />
        </a>
      </Link>
      <div className={nav_container}> {showHiddenNavs && narrowNavItems}</div>
    </nav>
  );
};

//This is not working yet
Nav.defaultProps = {
  alwaysShowHome: false,
  continuousNavBar: true,
};
export default Nav;
