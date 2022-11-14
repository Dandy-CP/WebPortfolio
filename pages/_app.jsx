import { useState } from 'react';
import { Provider } from 'react-redux';

import Head from 'next/head';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

import Layout from '../components/Layout/Layout';
import store from '../config/redux/store';
import GlobalStyle from '../styles/GlobalStyle';
import '../styles/prism-dracula.css';

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Provider store={store}>
        <GlobalStyle />
        <Head>
          <title>Dandy Candra - Frontend Developer | HOME</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionContextProvider>
  );
}

export default MyApp;
