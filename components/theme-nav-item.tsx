import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fss from '@fortawesome/free-solid-svg-icons';

let cssClsVisibleWide =
  'hidden bg-teal-500 l items-center rounded text-white mx-0 my-2 px-2 h-8 w-auto md:flex';
let cssClsVisibleNarrow =
  'visible bg-teal-500 items-center rounded text-white mx-0 m-0 px-2 h-8 w-auto min-w-24 md:hidden';

const ThemeNavItem = ({
  themeToggleHandler,
  descr = 'Toggle Theme',
  wideVisibility = true,
}) => {
  return (
    <button
      className={wideVisibility ? cssClsVisibleWide : cssClsVisibleNarrow}
      onClick={themeToggleHandler}>
      <FontAwesomeIcon icon={fss.faAdjust} style={{ marginRight: '0.2rem' }} />
      {descr}
    </button>
  );
};

export default ThemeNavItem;
