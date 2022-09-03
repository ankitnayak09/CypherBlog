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