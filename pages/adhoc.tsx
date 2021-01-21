import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';
import NavItem from '../components/nav-item';

const Adhoc = () => {
  return (
    <NavItem menuIcon={fas.faChurch} menuText='Church' showAlways={false} />
  );
};

export default Adhoc;
