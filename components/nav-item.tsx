import Link from 'next/link';
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, FC, MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
// Consider injecting the class name here?
type TNavItemProps = {
  menuIcon: IconProp; //typeof FontAwesomeIcon; //TOD: check this
  menuText: string;
  menuHref?: string;
  visibility: {
    always: boolean;
    whenWide: boolean;
  };
 
  className?: string;
  restProps?: any;
};

const NavItem: FC<TNavItemProps> = ({
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
const ThemeToggle = ({ themeDescr, themIcom, visibility }) => {
  //use NavItem to carry over the appropriate features, get as second portion of nav items?
};

ThemeToggle.defaultProps = {
  themeDescr: 'light' as string,
  themeIcon: null as IconProp,
  visibility: {
    always: true as boolean,
    whenWide: true as boolean,
  },
};
export default NavItem;
