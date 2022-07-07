import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Head>
      <title>Mehdi Hussain</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  </>
}

export default MyApp
