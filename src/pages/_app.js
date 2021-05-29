import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as NextAuthProvider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    //we wrap our components with next auth provider which is installed as nexrt
    //auth provider.. this eneble us to use the next auth variable throughout our app through session
    
    <NextAuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextAuthProvider>
  )
}

export default MyApp
