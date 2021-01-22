import Link from 'next/link';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent as FC } from 'react';
// Consider injecting the class name here?
type NavItemProps = {
  menuIcon;
  menuText: string;
  menuHref?: string;
  showAlways: boolean;
  restProps?: any;
};

const NavItem: FC<NavItemProps> = ({
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
