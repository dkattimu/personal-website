import Head from 'next/head';
import Nav from '../components/nav';
import FAAnimation from '../components/fa-animation';

import Footer from '../components/footer';
import matter from 'gray-matter';
//import styles from '../styles/Home.module.css'
//import '../styles/globals.css'
//import { fs as fs1 } from 'fs';

const Index = (props) => {
  console.log(`Index -> ${JSON.stringify(props)}`);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='Description' content={props.description}></meta>
        <title>{props.title}</title>
      </Head>
      <Nav />

      <div className='page-container '>
        <div className='flex-col'>
          {/*Need to make the body absolute*/}
          <h2>
            {' '}
            Welcome to the landing page; contents will be dropping soon!...
          </h2>

          <FAAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;

export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const fs = require('fs');
  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');
  const blogs = files.filter((file) => file.endsWith('.md'));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const content = fs.readFileSync(path, { encoding: 'utf-8' });
    return content;
  });
  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
