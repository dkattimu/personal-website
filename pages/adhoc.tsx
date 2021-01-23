import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fss from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NavItem from '../components/nav-item';
import '../components/nav.module.css';
const clsStyles = {
  iconStyle: {
    clsName:
      'flex text-center items-center justify-center space-x-4 bg-teal-700 rounded text-white mx-0 my-2 p-0 h-8 w-24',
    clsName1:
      ' hidden text-center items-center justify-center bg-teal-500 rounded text-white mx-0 my-2 p-0  md:flex md:h-auto md:w-24;', //does not work
  },
};
const Adhoc = () => {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
      }} /* to push the bar on small screens to below Home*/
    >
      <NavItem
        menuIcon={fss.faChurch}
        menuText='Church'
        visibility={{ always: false, whenWide: true }}
      />
      <Link href=''>
        <a className={clsStyles.iconStyle.clsName}>
          <FontAwesomeIcon
            icon={fss.faChurch}
            style={{ marginRight: '0.2rem' }}
          />
          Bobo
        </a>
      </Link>
    </nav>
  );
};

export default Adhoc;
