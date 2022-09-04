import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import { newPostReducer, postReducer } from "./reducers/postReducer";
import { testReducer } from "./reducers/testReducer";
import { userReducer } from "./reducers/userReducer";

 


const combineReducer=combineReducers({
   
   test:testReducer,
   user:userReducer,
   newPost:newPostReducer,
   posts:postReducer
 
})


const masterReducer=(state,action)=>{
    if(action.type==HYDRATE){
        const nextState={
            ...state,
            ...action.payload
        
        }
        return nextState
    }else{
        return combineReducer(state,action)
    }
}

export const store=()=>configureStore({
    reducer:masterReducer,
});

export const wrapper=createWrapper(store,{debug:false});