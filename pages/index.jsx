import Head from 'next/head';
import Nav from '../components/nav';
//import styles from '../styles/Home.module.css'
//import '../styles/globals.css'

const Index = (props) => {
  console.log(`Index -> ${props}`);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='Description' content={props.description}></meta>
        <title>{props.title}</title>
      </Head>
      <Nav></Nav>

      <div className='page-container'>
        <h1 className=' bg-teal-500 text-purple-500'>
          We will be dropping with a bang! Come back later...
        </h1>
      </div>

      <div>
        <button className=' transitiion duration-1000 ease-out'> Yea!</button>
      </div>
    </>
  );
};

export default Index;
/*const  getStaticProps = async () =>{
    const siteData = await import(`../config.json`);

    return {
        props:{
            title: siteData.default.title,
            description: siteData.default.description
        }
    };

}*/

/*const Home= ()=> {
    return (
      <div className='md:flex bg-white rounded-lg p-24 justify-center'>
        <img
          className='h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
          src='<https://pbs.twimg.com/profile_images/1102120097081184257/61tO47TQ_400x400.jpg>'
        />
        <div className='text-center md:text-left'>
          <h2 className='text-lg'>Jake Prins</h2>
          <div className='text-purple-500'>JavaScript developer</div>
          <div className='text-gray-600'>Twitter: @jakeprins_nl</div>
          <div className='text-gray-600'>www.jakeprins.com</div>
        </div>
      </div>
    );
  }

 module.exports= Home;
 */

export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
