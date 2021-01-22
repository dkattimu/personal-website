import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NavItem from '../components/nav-item';

const Adhoc = () => {
  return (
    <>
      <NavItem menuIcon={fas.faChurch} menuText='Church' showAlways={false} />
      <Link href=''>
        <a className='flex text-center items-center justify-center space-x-4 bg-teal-500 rounded text-white mx-0 my-2 p-0 h-8 w-24'>
          <FontAwesomeIcon
            icon={fas.faChurch}
            style={{ marginRight: '0.2rem' }}
          />
          Bobo
        </a>
      </Link>
    </>
  );
};

export default Adhoc;
