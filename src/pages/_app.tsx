import Head from 'next/head';

import GlobalStyle from 'styles/global';
import AppProvider from 'hooks';

const MyApp = ({ Component, pageProps }): any => (
  <>
    <AppProvider>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  </>
);

export default MyApp;
