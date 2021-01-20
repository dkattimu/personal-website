import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Consider injecting the class name here?

const NavItem = ({ icon, menuText, showAlways, ...restProps }) => {
  return (
    <Link href='/'>
      <a
        className={
          showAlways ? 'nav-blue-always-visible' : 'nav-blue-hidden-wide'
        }>
        <FontAwesomeIcon icon={icon} {...restProps} /> {menuText}
      </a>
    </Link>
  );
};

/*
NavItem.defaultProps ={
    size: '1x'
} */

export default NavItem;
