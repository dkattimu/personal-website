//This will consist of Nav Body div and Footer.
import Link from 'next/link';
import Nav from './nav';
import Footer from './footer';
import React from 'react';

const GeneralPageLayout = ({ children }) => {
  <>
    <Nav />
    <div>{children}</div>
    <Footer />
  </>;
};

export default GeneralPageLayout;
