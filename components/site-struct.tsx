import * as fss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SiteStructureConfig = ({
  barContinuityHandler,
  isBarContinuous,
  homeNarrowVisibilityHandler,
  isHomeNarrowVisibility,
}) => {
  console.log(
    `Inside Config... ${JSON.stringify({
      isBarContinuous,
      isHomeNarrowVisibility,
    })}`,
  );
  return (
    <div className='flex flex-col b-2 p-2 mt-6 bg-teal-700 rounded text-base'>
      <span className='flex justify-center justify-items-center text-gray-300'>
        Site Visual Settings{' '}
        <FontAwesomeIcon
          icon={fss.faCog}
          size='2x'
          pulse
          style={{ marginLeft: '0.2rem' }}
        />
      </span>

      <label>
        {' '}
        <input
          type='checkbox'
          //onClick={barContinuityHandler}
          //checked={isBarContinuous}
          onChange={barContinuityHandler}></input>{' '}
        Continuous Nav Bar
      </label>

      <label>
        {' '}
        <input
          type='checkbox'
          //onClick={homeNarrowVisibilityHandler}
          //checked={isHomeNarrowVisibility}
          onChange={homeNarrowVisibilityHandler}></input>{' '}
        Show Home Nav Even On Narrow Screens
      </label>
    </div>
  );
};

const SiteStructConfig = () => {
  return (
    <div className='flex flex-col b-2 p-2 mt-6 bg-teal-700 rounded text-base'>
      <span className='flex justify-center justify-items-center text-gray-300'>
        Site Visual Settings{' '}
        <FontAwesomeIcon
          icon={fss.faCog}
          size='2x'
          pulse
          style={{ marginLeft: '0.2rem' }}
        />
      </span>

      <label>
        {' '}
        <input type='checkbox'></input> Continuous Nav Bar
      </label>

      <label>
        {' '}
        <input type='checkbox'></input> Show Home Nav Even On Narrow Screens
      </label>
    </div>
  );
};

SiteStructureConfig.defaultProps = {
  barContinuityHandler: () => console.log(''),
  isBarContinuous: false,
  homeNarrowVisibilityHandler: () => console.log(''),
  isHomeNarrowVisibility: false,
};

const TestConfig = () => {
  return (
    <select name='xxx' size={2} multiple>
      <option value='x' selected={true}>
        {' '}
        Option Text
      </option>
      <option value='x' selected={true}>
        {' '}
        Option Text1
      </option>
    </select>
  );
};
export { SiteStructConfig, SiteStructureConfig, TestConfig };
