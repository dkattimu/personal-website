import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NavItem from '../components/nav-item';

const Blog = (props) => {
  return (
    <>
      <Link href=''>
        <a className='flex flex-1 text-center items-center justify-center space-x-4 bg-white rounded text-blue-500 mx-0 my-2 p-0 h-8 w-30'>
          <FontAwesomeIcon
            icon={fas.faBlog}
            style={{ marginRight: '0.2rem' }}
          />
          Blog
        </a>
      </Link>
      <NavItem
        menuIcon={fas.faHome}
        menuText='Home'
        visibility={{ always: true, whenWide: true }}
      />
    </>
  );
};

export default Blog;
