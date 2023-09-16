import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import './global.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Hoogeland</title>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="application-name" content="Hoogeland" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hoogeland" />
        <meta name="description" content="Pauzes en meer voor Hoogeland" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1a1b1e" />
        <meta httpEquiv='content-language' content='nl' />
        
        <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/assets/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/assets/icons/icon-384x384.png" />
        
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/icons/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/assets/icons/icon-72x72.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://hoogeland.eu.org" />
        <meta name="twitter:title" content="Hoogeland" />
        <meta name="twitter:description" content="Pauzes en meer voor Hoogeland" />
        <meta name="twitter:image" content="https://hoogeland.eu.org/assets/icons/icon-512x512.png" />
        <meta name="twitter:creator" content="@Dazerstudio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hoogeland" />
        <meta property="og:description" content="Pauzes en meer voor Hoogeland" />
        <meta property="og:site_name" content="Hoogeland" />
        <meta property="og:url" content="https://hoogeland.eu.org" />
        <meta property="og:image" content="https://hoogeland.eu.org/assets/icons/icon-512x512.png" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}