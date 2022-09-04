import axios from "axios";
import Router from "next/router";


export const googleSignIn=(tokenId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"GOOGLE_SIGNIN_REQUEST",
        });
        // console.log(tokenId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/googleSignIn`,{tokenId},config)
//    console.log(data)
        dispatch({
            type:"GOOGLE_SIGNIN_SUCCESS",
            payload:data.user
        }); 
        Router.reload()
 
    }catch(error){
// console.log(error) 
        dispatch({
            type:"GOOGLE_SIGNIN_FAIL",
            payload:error.response.data.message
        });
    }

}



// load user
export const loadUser=()=>async(dispatch)=>{

    // dispatch({type:"LOAD_USER_LOCATION",payload:coords});
     
    try{
        dispatch({type:"LOAD_USER_REQUEST"});
        

        let {data}=await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/me`,{withCredentials: true}
          
        );  
       
        dispatch({type:"LOAD_USER_SUCCESS",payload:data});
    }catch(error){
     
        dispatch({type:"LOAD_USER_FAIL",payload:error.response.data.message});
    }
}


// logout user
export const logout=()=>async(dispatch)=>{
    try{
        
        
        await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/logout`,{withCredentials: true}
            
            );
            dispatch({type:"LOGOUT_SUCCESS"});
            Router.reload()
    }catch(error){
     
        dispatch({type:"LOGOUT_FAIL",payload:error.response.data.message});
    }
}