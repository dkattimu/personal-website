import Link from 'next/link';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Consider injecting the class name here?

const NavItem = ({
  menuIcon,
  menuText,
  menuHref = '/',
  showAlways = false,
  ...restProps
}) => {
  return (
    <Link href={menuHref}>
      <a
        className={
          showAlways ? styles.navItemAlwaysVisible : styles.navItemHiddenOnWide
        }>
        <FontAwesomeIcon
          icon={menuIcon}
          {...restProps}
          style={{ marginRight: '0.2rem' }}
        />
        {menuText}
      </a>
    </Link>
  );
};

/*
NavItem.defaultProps ={
    size: '1x'
} */

export default NavItem;
