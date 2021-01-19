import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

NavItem = ({ icon, menuText, showAlways }) => {
  return (
    <Link href='/'>
      <a
        className={
          showAlways ? 'nav-blue-always-visible' : 'nav-blue-sometimes-visible'
        }>
        <FontAwesomeIcon icon={icon} /> {menuText}
      </a>
    </Link>
  );
};

export default NavItem;
