import { useState } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClientProvider } from '@tanstack/react-query';

import Layout from '../components/Layout/Layout';
import AuthProvider from '../config/AuthProvider';
import { queryClient } from '../config/queryClient';
import store from '../config/redux/store';
import GlobalStyle from '../styles/GlobalStyle';
import '../styles/prism-dracula.css';

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  if (route.pathname === '/_error') {
    return <Component {...pageProps} />;
  }

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <GlobalStyle />

            <Head>
              <title>Dandy Candra - Frontend Developer</title>
            </Head>

            <ToastContainer />
            {route.pathname === '/admin' ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </Provider>
        </QueryClientProvider>
      </AuthProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
