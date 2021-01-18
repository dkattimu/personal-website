import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faBlog,
  faTasks,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';

//TODO: Add modal drop-down for bars icon on small screens
//TODO: Sort out overflow beyond footer
const Nav = () => {
  return (
    <nav>
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
            <FontAwesomeIcon icon={faTasks} /> Research
          </a>
        </Link>

        <Link href='/'>
          <a className='nav-blue'>
            <FontAwesomeIcon icon={faInfo} /> About
          </a>
        </Link>
        <Link href='/'>
          <FontAwesomeIcon icon={faBars} size='2x' className='nav-fa-bar' />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

const toggleView = () => {
  return '';
};
