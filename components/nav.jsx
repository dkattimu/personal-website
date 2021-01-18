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
const nonHomeStyle = {
  display: 'flex',
  marginLeft: '0rem',
  paddingLeft: '0rem',
};
const NonHomeNav = () => {
  return (
    <div className='nav-contianer-non-home'>
      <Link href='/'>
        <a className='nav-blue'>
          <FontAwesomeIcon icon={faBlog} /> Blog
        </a>
      </Link>

      <Link href='/'>
        <a className='nav-blue'>
          <FontAwesomeIcon icon={faTasks} /> Research
        </a>
      </Link>

      <Link href='/'>
        <a className='nav-blue'>
          <FontAwesomeIcon icon={faInfo} /> About
        </a>
      </Link>
    </div>
  );
};
//TODO : Toggle is updating one at a time. Should all be updated at once
const toggleView = (showHiddenNavs) => {
  const navEltsInVis = document.getElementsByClassName('nav-blue');
  const navEltsVis = document.getElementsByClassName('nav-blue-always-visible');
  /* navElts.map((elt) => {
    //elt.setAttribute('class', 'nav-blue-always-visible');
    alert(JSON.stringify(elt.toString()));
  });*/
  if (navEltsInVis.length > 0) {
    for (let i = 0; i < navEltsInVis.length; i++) {
      navEltsInVis[i].setAttribute('class', 'nav-blue-always-visible');
    }
  }
  /*
  if (navEltsVis.length > 0)
    for (let i = 0; i < navEltsVis.length; i++) {
      navEltsVis[i].setAttribute('class', 'nav-blue');
    }*/
};

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
    toggleHiddenNavs();
    if (showHiddenNavs) {
      alert('Showing Hidden Navs');
    } else {
      alert('Not Showing Hidden Navs');
    }
    //setShowHiddenNavs(!showHiddenNavs);
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
          <a className='nav-blue-always-visible'>
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>
            <FontAwesomeIcon icon={faBlog} /> Blog
          </a>
        </Link>
        <Link href='/'>
          <a className='nav-blue'>
            <FontAwesomeIcon icon={faUserCog} /> Projects
          </a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>
            <FontAwesomeIcon icon={faTasks} /> Research
          </a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>
            <FontAwesomeIcon icon={faInfo} /> About
          </a>
        </Link>
      </div>
      <Link href='/'>
        <a onClick={() => toggleHiddenNavs()}>
          <FontAwesomeIcon icon={faBars} size='2x' className='nav-fa-bar' />
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
