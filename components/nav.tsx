import Link from 'next/link';
import styles from './nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faBlog,
  faTasks,
  faInfo,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import * as cssClNames from './css-class-ref';
//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer

const listHiddenNavs = [
  <Link href='/'>
    <a className={cssClNames.hiddenCSSCls}>
      <FontAwesomeIcon icon={faBlog} /> Blog
    </a>
  </Link>,
  <Link href='/'>
    <a className={cssClNames.hiddenCSSCls}>
      <FontAwesomeIcon icon={faUserCog} /> Projects
    </a>
  </Link>,

  <Link href='/'>
    <a className={cssClNames.hiddenCSSCls}>
      <FontAwesomeIcon icon={faTasks} /> Research
    </a>
  </Link>,

  <Link href='/'>
    <a className={cssClNames.hiddenCSSCls}>
      <FontAwesomeIcon icon={faInfo} /> About
    </a>
  </Link>,
];
const Nav = () => {
  //useState for state of view
  const [showHiddenNavs, setShowHiddenNavs] = useState(false);
  //watch if clicked then update ShowHidden
  const toggleHiddenNavs = () => {
    setShowHiddenNavs(!showHiddenNavs);
  };
  useEffect(() => {
    //setShowHiddenNavs(!showHiddenNavs);
    //showHiddenNavs = false;
    //setShowHiddenNavs(!showHiddenNavs);
    //toggleHiddenNavs();
    if (showHiddenNavs) {
      console.log('Showing Hidden Navs');
    } else {
      console.log('Not Showing Hidden Navs');
    }
  }, []);
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
      }} /* to push the bar on small screens to below Home*/
    >
      <div className='nav-container '>
        <Link href='/'>
          <a className={cssClNames.alwaysVisibleCSSCls}>
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </Link>

        <Link href='/'>
          <a className={styles.navItemHiddenOnNarrow}>
            <FontAwesomeIcon icon={faBlog} /> Blog
          </a>
        </Link>
        <Link href='/'>
          <a className={styles.navItemHiddenOnNarrow}>
            <FontAwesomeIcon icon={faUserCog} /> Projects
          </a>
        </Link>

        <Link href='/'>
          <a className={styles.navItemHiddenOnNarrow}>
            <FontAwesomeIcon icon={faTasks} /> Research
          </a>
        </Link>

        <Link href='/'>
          <a className={styles.navItemHiddenOnNarrow}>
            <FontAwesomeIcon icon={faInfo} /> About
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a onClick={() => toggleHiddenNavs()}>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            className={styles.navItemFaBar} /*'nav-fa-bar'*/
          />
        </a>
      </Link>
      {showHiddenNavs && listHiddenNavs}
    </nav>
  );
};

export default Nav;
