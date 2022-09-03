import '../styles/globals.css'
import {wrapper} from "../store"
import {ToastContainer} from "react-toastify"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../actions/userAction';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const dispatch=useDispatch();
  useEffect(() => {
 dispatch(loadUser())
    }
  , [])
  return (<>
     {/* <GoogleOAuthProvider clientId="792004105151-tlhpaaecgpgis67ojnvk4i4ml2o55uj0.apps.googleusercontent.com"> */}
     <GoogleOAuthProvider clientId="748833258563-s0eo0hsseh1jg7jl6c3kusseac6v4o1k.apps.googleusercontent.com">
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
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  </>)
}


export default wrapper.withRedux(MyApp);
