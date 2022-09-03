import axios from "axios";

//create post
export const createPost=(postData)=>async(dispatch)=>{
    try{
        dispatch({
            type:"NEW_POST_REQUEST",
        });
        // console.log(shopId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/post/new`,postData,config)
      

  
        dispatch({
            type:"NEW_POST_SUCCESS",
            payload:data
        });
      

    }catch(error){

        dispatch({
            type:"NEW_POST_FAIL",
            payload:error.response.data.message
        });
    }

}
