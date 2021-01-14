import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Index = (props) =>{

    console.log(`Index -> ${props}`);
    return (
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={props.description}></meta>
        <title>{props.title}</title>
        </Head>

        <h1> We will be dropping with a bang! Come back later...</h1>
        </>

    );
}

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

export async function getStaticProps(){
    const siteData = await import(`../config.json`);

    return {
        props:{
            title: siteData.default.title,
            description: siteData.default.description
        }
    };
}