import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://twitter.com/wahtu04' target='_blank' rel='noopener noreferrer'>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href='https://instagram.com/wahtu.astrawan' target='_blank' rel='noopener noreferrer'>
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;