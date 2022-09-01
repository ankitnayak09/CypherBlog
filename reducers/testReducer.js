import { createReducer } from "@reduxjs/toolkit";

export const testReducer=createReducer({},{
    TEST_REQUEST:(state)=>{
        state.testSuccess=true;
        
    },
  

})