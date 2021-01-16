//This will consist of Nav Body div and Footer.
import Link from 'next/link';
import Nav from '../components/nav';
import Footer from '../components/footer';

const GeneralPageLayout = ({ children }) => {
  <>
    <Nav />
    <div>{children}</div>
    <Footer />
  </>;
};

export default GeneralPageLayout;
