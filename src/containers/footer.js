import React from 'react';

import { Footer } from '../components';


export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title> Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#"> <span> FAQ </span></Footer.Link>
          <Footer.Link href="#"> <span> Investor Relations </span> </Footer.Link>
          <Footer.Link href="#"> <span> Ways to Watch</span></Footer.Link>
          <Footer.Link href="#"> <span>Corporate Information </span>  </Footer.Link>
          <Footer.Link href="#"> <span> Netflix Originals </span> </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#"> <span> Help Centre </span> </Footer.Link>
          <Footer.Link href="#"> <span> Jobs </span> </Footer.Link>
          <Footer.Link href="#"> <span> Terms of Use </span> </Footer.Link>
          <Footer.Link href="#"> <span>Contact Us </span> </Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
