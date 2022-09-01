import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import { testReducer } from "./reducers/testReducer";




const combineReducer=combineReducers({
   
   test:testReducer
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