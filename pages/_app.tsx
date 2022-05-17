import React, { useState, useEffect } from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
