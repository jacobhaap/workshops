import * as React from 'react'
import NextApp from 'next/app'

import '@hackclub/theme/fonts/reg-ital-bold.css'
import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'
import NProgress from '../components/nprogress'
import Footer from '../components/footer'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <NProgress color={theme.colors.primary} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
