'use client';
import { Footer } from 'flowbite-react';
import { BsDribble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterLayout = () => {
  return (
    <Footer container className='footerBag'>
      <div className="w-full text-center">
        <div className="footerdesign">
          <Footer.LinkGroup className='Footermenu'>
            <Footer.Link href="#">
              GP Services
            </Footer.Link>
            <Footer.Link href="#">
              Dental Services
            </Footer.Link>
            <Footer.Link href="#">
              About Us
            </Footer.Link>
            <Footer.Link href="#">
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className='divider'/>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
            className='Footermenu' />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
            className='Footermenu' />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
            className='Footermenu' />
          <Footer.LinkGroup className='Footermenu'>
            <Footer.Link href="#">
              Terms of Service
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default FooterLayout;
