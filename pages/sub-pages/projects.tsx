import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NavItem from '../../components/nav-item';

const Projects = () => {
  return (
    <>
      <Link href=''>
        <a className='flex flex-1 text-center items-center justify-center space-x-4 bg-blue-400 rounded text-gray-800 mx-0 my-2 p-0 h-8 w-30'>
          <FontAwesomeIcon
            icon={fas.faUserCog}
            style={{ marginRight: '0.2rem' }}
          />
          Projects
        </a>
      </Link>
      <NavItem menuIcon={fas.faHome} menuText='Home' showAlways={true} />
    </>
  );
};

export default Projects;
