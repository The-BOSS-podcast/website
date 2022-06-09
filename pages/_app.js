
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Head>
        <script async src=“https://www.googletagmanager.com/gtag/js?id=G-JVXZ1REBPB”></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(‘js’, new Date());
          gtag(‘config’, ‘G-JVXZ1REBPB’);
        </script>
      </Head>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  
