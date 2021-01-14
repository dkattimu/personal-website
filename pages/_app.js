import '../styles/globals.css'
//import "tailwindcss/tailwind.css" // for direct usage in jsx
//import '../styles/globals.css'   // for global settings


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
