import Link from 'next/link';
import styles from './nav.module.css';
import * as navItems from './nav-items';
import ThemeNavItem from '../components/theme-nav-item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faWindowClose,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react';

//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer
//
const Nav = ({ alwaysShowHome, continuousNavBar }) => {
  //useState for state of view
  console.log(`SHOW_ALWAYS: ${alwaysShowHome}`);
  const [showHiddenNavs, setShowHiddenNavs] = useState(false);
  const [fsIcon, setFsIcon] = useState(faBars);
  const [{ wideNavItems, narrowNavItems }, setNavItemsObj] = useState(() => {
    const res = navItems.getNavItemsJSX(alwaysShowHome);
    //console.log(`navItems Obj: ${res}`);

    return res;
  });
  //watch if clicked then update ShowHidden
  const toggleHiddenNavs = () => {
    let newShowHiddenNavs = !showHiddenNavs;
    setShowHiddenNavs(newShowHiddenNavs);
    if (newShowHiddenNavs) {
      setFsIcon(faTimes);
    } else {
      setFsIcon(faBars);
    }
  };
  const nav_container = continuousNavBar
    ? styles.nav__container_continuous
    : styles.nav__container;
  //console.log(`nav-container ${nav_container}`);
  useEffect(() => {
    //alert(`Count of Narrow Items ${narrowNavItems.length}`);
    if (showHiddenNavs) {
      //console.log('Showing Hidden Navs');
    } else {
      //console.log('Not Showing Hidden Navs');
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
      <div className='inline-flex justify-between p-0 m-0'>
        <div className={nav_container}>{wideNavItems}</div>
        <ThemeNavItem
          descr='Toggle Theme'
          themeToggleHandler={() => alert('not yet implemented!')}
          data-test='themeToggleVisibleOnWide'
        />
      </div>
      <Link href='/'>
        <span className='inline-flex justify-between'>
          <span
            onClick={() => toggleHiddenNavs()}
            className='inline-flex justify-between'>
            <FontAwesomeIcon
              icon={fsIcon}
              size='2x'
              data-test='toggleHiddenNav'
              className={styles.nav__item_fa_bar} /*'nav-fa-bar'*/
            />
          </span>

          <ThemeNavItem
            themeToggleHandler={() => alert('not yet implemented!')}
            wideVisibility={false}
            data-test='themeToggleVisibleOnNarrow'
          />
        </span>
      </Link>
      <div className={nav_container}> {showHiddenNavs && narrowNavItems}</div>
    </nav>
  );
};

//This is not working yet
Nav.defaultProps = {
  alwaysShowHome: false,
  continuousNavBar: false,
};
export default Nav;
