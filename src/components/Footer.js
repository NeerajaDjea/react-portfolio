import React from 'react';

var style = {
  backgroundColor: '8F8F8',
  borderTop: '1px solid #0F7F7F',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '30px',
  width: '100%',
  color: '#F5F5DC',
  fontSize: '8px'
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%'
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>@copyright ND 2020{children}</div>
    </div>
  );
}

export default Footer;
