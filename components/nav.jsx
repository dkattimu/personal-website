import Link from 'next/link';
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
//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer

const hiddenCSSCls = 'nav-blue-hidden-wide';
const visibleCSSCls = 'nav-blue';
const alwaysVisibleCSSCls = 'nav-blue-always-visible';
const listHiddenNavs = [
  <Link href='/'>
    <a className={hiddenCSSCls}>
      <FontAwesomeIcon icon={faBlog} /> Blog
    </a>
  </Link>,
  <Link href='/'>
    <a className={hiddenCSSCls}>
      <FontAwesomeIcon icon={faUserCog} /> Projects
    </a>
  </Link>,

  <Link href='/'>
    <a className={hiddenCSSCls}>
      <FontAwesomeIcon icon={faTasks} /> Research
    </a>
  </Link>,

  <Link href='/'>
    <a className={hiddenCSSCls}>
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
          <a className={alwaysVisibleCSSCls}>
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </Link>

        <Link href='/'>
          <a className={visibleCSSCls}>
            <FontAwesomeIcon icon={faBlog} /> Blog
          </a>
        </Link>
        <Link href='/'>
          <a className={visibleCSSCls}>
            <FontAwesomeIcon icon={faUserCog} /> Projects
          </a>
        </Link>

        <Link href='/'>
          <a className={visibleCSSCls}>
            <FontAwesomeIcon icon={faTasks} /> Research
          </a>
        </Link>

        <Link href='/'>
          <a className={visibleCSSCls}>
            <FontAwesomeIcon icon={faInfo} /> About
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a onClick={() => toggleHiddenNavs()}>
          <FontAwesomeIcon icon={faBars} size='2x' className='nav-fa-bar' />
        </a>
      </Link>
      {showHiddenNavs && listHiddenNavs}
    </nav>
  );
};

export default Nav;
