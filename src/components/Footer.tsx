import React from 'react';

const Footer = () => {
  return (
    <p className='text-center mb-4 lead'>
      <strong>
        Read more about Nikola Tesla on his{' '}
        <a
          id='tribute-link'
          href='https://en.wikipedia.org/wiki/Nikola_Tesla'
          target='_blank'>
          Wikipedia entry
        </a>
        .
      </strong>
    </p>
  );
};

export default Footer;
