import React from 'react';
import Footer from './Footer';
import Header from './Header';
import FadeIn from 'react-fade-in';

import { Form, Button } from 'react-bootstrap';
function Contact() {
  return (
    <div>
      <Header />
      <FadeIn>
        <h3 class='sub-heading'>Contact Me</h3>
      </FadeIn>
      <div class='container'>
        <form
          action='mailto:neeru.jai@gmail.com'
          method='post'
          enctype='text/plain'
        >
          <div class='main-container'>
            <div class='group'>
              <label for='input-name' class='label' id='input1'>
                {' '}
                Name{' '}
              </label>
              <input id='input' name='name' class='input' />
            </div>
            <div class='group'>
              <label for='input-email' class='label' id='input1'>
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
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
