// import axios from "axios";

// //create product-admin
// export const createTimeSlot=(timeSlotData)=>async(dispatch)=>{
//     try{
//         dispatch({
//             type:"CREATE_TIME_SLOT_REQUEST",
//         });
//         // console.log(shopId)
//         const config={headers:{"Content-Type":"application/json"},withCredentials: true}

//         const{data}=await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/newTimeSlot`,timeSlotData,config)
      

  
//         dispatch({
//             type:"CREATE_TIME_SLOT_SUCCESS",
//             payload:data
//         });

//     }catch(error){

//         dispatch({
//             type:"CREATE_TIME_SLOT_FAIL",
//             payload:error.response.data.message
//         });
//     }

// }