import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "../components/Navbar"
import {Provider} from "react-redux" 
import store from "../Redux/store"

function MyApp({ Component, pageProps }) {

  return <>
  <Provider store={store}>

  { Component.getLayout?<Component {...pageProps} />:<>
  {/* <Navbar/> */}
  <Component {...pageProps}/>
  </>}
  </Provider>
  </>
}

export default MyApp
