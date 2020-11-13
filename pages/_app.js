import '../styles/globals.css'
import '../styles/main.css'
import Layout from '@/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
