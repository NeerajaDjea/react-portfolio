import React from 'react';

import { Form, Button } from 'react-bootstrap';
function Contact() {
  return (
    <div class='main-container'>
      <form
        action='mailto:neeru.jai@gmail.com'
        method='post'
        enctype='text/plain'
      >
        <div class='main-container'>
          <h3 class='sub-heading'>Contact Me</h3>
          <div class='group'>
            <label for='input-name' class='label'>
              {' '}
              Name{' '}
            </label>
            <input id='input' name='name' class='input' />
          </div>
          <div class='group'>
            <label for='input-email' class='label'>
              {' '}
              Email{' '}
            </label>
            <input id='input' name='email' class='input' />
          </div>
          <div class='group'>
            <label for='input-message' class='label'>
              Message
            </label>
            <input id='input' name='message' class='input' />
          </div>
          <div>
            <button class='button'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
