import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    router.events.on('routeChangeComplete', logPageView);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, []);
  return (
    <>
      <NextSeo
        title="Portfolio - Italoengdev - Full Stack Developer"
        description="A webpage that contains my portfolio and my resume."
        canonical="https://www.italoengdev.me"
        openGraph={{
          url: 'https://www.italoengdev.me',
          title: 'Portfolio - Italoengdev - Full Stack Developer',
          description: 'A webpage that contains my portfolio and my resume',
          images: [
            {
              url: 'https://example.com/my-page-image.jpg',
              alt: 'An image of my page'
            }
          ]
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
          },
          {
            rel: 'icon',
            href: '/favicon.ico'
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
