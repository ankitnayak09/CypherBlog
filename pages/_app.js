import '../styles/globals.css'
import {wrapper} from "../store"
import {ToastContainer} from "react-toastify"

function MyApp({ Component, pageProps }) {
  return (<>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
  <Component {...pageProps} /></>)
}


export default wrapper.withRedux(MyApp);
