import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faCog,
  faUserClock,
  faAtom,
  faCogs,
  faSync,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const FAAnimation = () => {
  return (
    <div className='fa-animation'>
      <FontAwesomeIcon
        icon={faCogs}
        size='5x'
        spin
        color='red'
        //className='inline-block m-10 fill-current text-red-400'
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          marginBottom: '2rem',
          marginLeft: '0rem',
          marginRight: '4rem',
        }}
      />
      <FontAwesomeIcon
        icon={faAtom}
        size='5x'
        spin
        color='yellow'
        //className='inline-block m-10 fill-current text-yellow-400'
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          marginBottom: '2rem',
          marginLeft: '0rem',
          marginRight: '4rem',
        }}
      />
      <FontAwesomeIcon
        icon={faCog}
        size='5x'
        spin
        color='green'
        //className='inline-block m-10 fill-current text-green-400'
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          marginBottom: '2rem',
          marginLeft: '0rem',
          marginRight: '4rem',
        }}
      />
      <FontAwesomeIcon
        icon={faSync}
        size='5x'
        color='teal'
        spin
        //flash
        //className='inline-block m-10 fill-current text-teal-400'
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          marginBottom: '2rem',
          marginLeft: '0rem',
          marginRight: '2rem',
        }}
      />
    </div>
  );
};

export default FAAnimation;
