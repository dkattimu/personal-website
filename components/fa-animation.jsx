import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCog,
  faUserClock,
  faAtom,
  faUserCog,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

const FAAnimation = () => {
  return (
    <div className='flex flex-wrap justify-center inline-block'>
      <FontAwesomeIcon
        icon={faCog}
        size='5x'
        spin
        className='inline-block m-10 fill-current text-red-400'
      />
      <FontAwesomeIcon
        icon={faAtom}
        size='5x'
        spin
        className='inline-block m-10 fill-current text-yellow-400'
      />
      <FontAwesomeIcon
        icon={faSync}
        size='5x'
        spin
        className='inline-block m-10 fill-current text-green-400'
      />
      <FontAwesomeIcon
        icon={faUserClock}
        size='5x'
        flash
        className='inline-block m-10 fill-current text-teal-400'
      />
    </div>
  );
};

export default FAAnimation;
