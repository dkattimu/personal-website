import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fss from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NavItem from '../components/nav-item';
import React from 'react';

const About = () => {
  return (
    <>
      <Link href=''>
        <a className='flex flex-1 text-center items-center justify-center space-x-4 bg-white rounded text-blue-500 mx-0 my-2 p-0 h-8 w-30'>
          <FontAwesomeIcon
            icon={fss.faInfo}
            style={{ marginRight: '0.2rem' }}
          />
          About
        </a>
      </Link>
      <NavItem
        menuIcon={fss.faHome}
        menuText='Home for Home'
        visibility={{ always: true, whenWide: true }}
      />
    </>
  );
};

export default About;
