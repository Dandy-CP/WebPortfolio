import { useState } from 'react';
import { Provider } from 'react-redux';

import Head from 'next/head';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClientProvider } from '@tanstack/react-query';

import Layout from '../components/Layout/Layout';
import { queryClient } from '../config/queryClient';
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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <Head>
            <title>Dandy Candra - Frontend Developer | HOME</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
