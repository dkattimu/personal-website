import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer
const Nav = () => {
  return (
    <nav>
      <div className='nav-container '>
        <Link href='/'>
          <a className='nav-blue'>Home</a>
        </Link>

        <Link href='/'>
          <a className='invisible w-0 h-0 md:visible md:h-auto nav-blue'>
            Blog
          </a>
        </Link>

        <Link href='/'>
          <a className='invisible w-0 h-0 md:visible md:h-auto nav-blue'>
            Research
          </a>
        </Link>

        <Link href='/'>
          <a className='invisible  w-0 h-0 md:visible md:h-auto nav-blue'>
            About
          </a>
        </Link>
        <Link href='/'>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            className='p-0 m-0 md:pt-1 md:pb-1 justify-center fill-current text-gray-400'
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

const toggleView = () => {
  return '';
};
