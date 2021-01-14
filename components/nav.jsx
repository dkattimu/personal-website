import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-wrap items-center space-x-5  bg:indigo-600 text-white'>
        <li>
          <Link href='/'>
            <a className='nav-blue'>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='nav-blue'>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
