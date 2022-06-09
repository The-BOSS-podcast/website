
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
          <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JVXZ1REBPB`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVXZ1REBPB', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  
