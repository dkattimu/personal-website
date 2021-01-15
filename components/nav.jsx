import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link href='/'>
          <a className='nav-blue'>Home</a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>Blog</a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>Projects</a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>Research</a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>Tech Stack</a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

const toggleView = () => {
  return '';
};
