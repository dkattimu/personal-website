import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-wrap items-center space-x-1 bg:indigo-600 text-white'>
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
        <li>
          <Link href='/'>
            <a className='nav-blue'>Projects</a>
          </Link>
        </li>

        <li>
          <Link href='/'>
            <a className='nav-blue'>Research</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='nav-blue'>Tech Stack</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='nav-blue'>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
