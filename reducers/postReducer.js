import { createReducer } from "@reduxjs/toolkit";


export const newPostReducer=createReducer({post:{}},{
    NEW_POST_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    NEW_POST_SUCCESS:(state,action)=>{
        state.loading=false;
        state.success=action.payload.success;
        state.post=action.payload.post;
    
    },
    NEW_POST_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    NEW_POST_RESET:(state,action)=>{
        state.loading=false;
        state.success=false
    },
    CLEAR_ERRORS:(state,action)=>{
        // state={...state};
        state.error=null
    },

})



export const postReducer=createReducer({posts:[],shopCount:0,page:1},{
    
        ALL_POST_REQUEST:(state)=>{
            state.loading=true;
            state=state
        
        },
        ALL_POST_SUCCESS:(state,action)=>{
            state.loading=false;
           
          
            state.posts=action.payload.posts
            // state.posts=state.posts.concat(action.payload.posts)
            // state.shopCount=action.payload.shopCount
            // state.page=state.page+1
        },
        ALL_POST_FAIL:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        CLEAR_ERRORS:(state,action)=>{
            state={...state};
            state.error=null
        },
    
    })





    export const postDetailsReducer=createReducer({post:{}},{
        POST_DETAILS_REQUEST:(state)=>{
            state.loading=true;
            state={...state};
        },
        POST_DETAILS_SUCCESS:(state,action)=>{
            state.loading=false;
            state.post=action.payload.post;
            
        },
        POST_DETAILS_FAIL:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
    
  
        CLEAR_ERRORS:(state,action)=>{
            state={...state};
            state.error=null
        },
    
    })
    