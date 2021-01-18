import 'tailwindcss/tailwind.css';
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
    <div className='flex flex-wrap justify-center '>
      <FontAwesomeIcon
        icon={faCog}
        size='5x'
        spin
        color='red'
        //className='inline-block m-10 fill-current text-red-400'
        style={{ display: 'inline-block', margin: '1rem', marginLeft: '0rem' }}
      />
      <FontAwesomeIcon
        icon={faAtom}
        size='5x'
        spin
        color='yellow'
        //className='inline-block m-10 fill-current text-yellow-400'
        style={{ display: 'inline-block', margin: '1rem' }}
      />
      <FontAwesomeIcon
        icon={faSync}
        size='5x'
        spin
        color='green'
        //className='inline-block m-10 fill-current text-green-400'
        style={{ display: 'inline-block', margin: '1rem' }}
      />
      <FontAwesomeIcon
        icon={faUserClock}
        size='5x'
        color='teal'
        //flash
        //className='inline-block m-10 fill-current text-teal-400'
        style={{ display: 'inline-block', margin: '1rem' }}
      />
    </div>
  );
};

export default FAAnimation;
