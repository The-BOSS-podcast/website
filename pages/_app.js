
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
          
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  
