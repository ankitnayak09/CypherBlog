import axios from "axios";

export const getAllPosts=(tag)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ALL_POST_REQUEST",
        });
        let url=`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/posts`
     
        if(tag){
            url=`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/posts?tag=${tag}`
        }
         

        const{data}=await axios.get(url)
        // console.log(data)
        
 

        dispatch({ 
            type:"ALL_POST_SUCCESS",
            payload:data
        });

    }catch(error){
        console.log(error)      
        dispatch({ 
            type:"ALL_POST_FAIL",
            payload:error.response.data.message
        });
    }

}


export const getPostDetails=(postId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"POST_DETAILS_REQUEST",
        });
        let url=`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/post/${postId}`
     
        const{data}=await axios.get(url)
        // console.log(data)

        dispatch({ 
            type:"POST_DETAILS_SUCCESS",
            payload:data
        });

    }catch(error){
        console.log(error)      
        dispatch({ 
            type:"POST_DETAILS_FAIL",
            payload:error.response.data.message
        });
    }

}

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



export const createUpdatePostLike=(postId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"UPDATE_POST_REQUEST",
        });
        // console.log(shopId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/post/${postId}/likePost`,config)
     
// console.log(data)
  
        dispatch({
            type:"UPDATE_POST_SUCCESS",
            payload:data.success
        });

    }catch(error){

        dispatch({
            type:"UPDATE_POST_FAIL",
            payload:error.response.data.message
        });
    }

}