import Link from 'next/link';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {FC} from 'react';
import { useState, useEffect, FC } from 'react';
// Consider injecting the class name here?
type NavItemProps = {
  menuIcon;
  menuText: string;
  menuHref?: string;
  visibility: {
    always: boolean;
    whenWide: boolean;
  };
  restProps?: {};
};

const NavItem: FC<NavItemProps> = ({
  menuIcon,
  menuText,
  menuHref = '/',
  visibility = { always: true, whenWide: true },
  ...restProps
}) => {
  let [cssClass, setCssClass] = useState(() => {
    console.log(JSON.stringify(visibility));

    if (visibility) {
      if (visibility.always) {
        return styles.nav__item_always_visible;
      } else {
        if (visibility.whenWide) {
          return styles.nav__item_hidden_on_narrow;
        } else {
          return styles.nav__item_hidden_on_wide;
        }
      }
    }
  });

  useEffect(() => {
    console.log(
      `In useEffect inside nav.tsx: css class is ${JSON.stringify(cssClass)}`,
    );
  });
  return (
    <Link href={menuHref}>
      <a className={cssClass}>
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
