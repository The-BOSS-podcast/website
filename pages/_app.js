
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
          
    <PlasmicRootProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=3" color="#ffe33b" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <meta name="apple-mobile-web-app-title" content="The BOSS" />
        <meta name="application-name" content="The BOSS" />
        <meta name="msapplication-TileColor" content="#232323" />
        <meta name="theme-color" content="#232323" />
      </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  
