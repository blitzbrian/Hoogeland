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
        <meta name="description" content="Pauzes voor Magister" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        
        <link rel="apple-touch-icon" href="/ios/512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/ios/152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/ios/180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/ios/167.png" />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/windows11/Square44x44Logo.targetsize-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/windows11/Square44x44Logo.targetsize-16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://hoogeland.dazerstudio.repl.co" />
        <meta name="twitter:title" content="Hoogeland" />
        <meta name="twitter:description" content="Pauzes voor Magister" />
        <meta name="twitter:image" content="https://hoogeland.dazerstudio.repl.co/android/android-launchericon-192-192.png" />
        <meta name="twitter:creator" content="@Dazerstudio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hoogeland" />
        <meta property="og:description" content="Pauzes voor Magister" />
        <meta property="og:site_name" content="Hoogeland" />
        <meta property="og:url" content="https://hoogeland.dazerstudio.repl.co" />
        <meta property="og:image" content="https://hoogeland.dazerstudio.repl.co/windows11/Square150x150Logo.scale-400.png" />
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