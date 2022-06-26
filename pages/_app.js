import React from 'react'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components';
import Circle from '../components/Circle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Circle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
