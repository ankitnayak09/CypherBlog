import { useState } from "react";
import { useSelector } from "react-redux";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
 
    const [selectedTags, setSelectedTags] = useState([]);

    const tags=[
        "gaming",
        "educational",
        "fun",
        "doubts",
        "bugs"
    ]

    const {loading,error,success,post}= useSelector(state => state.newPost);

    const handleCheckBoxChange=(e)=>{
        const {value,checked}=e.target;
          // Case 1 : The user checks the box
    if (checked) {
        setSelectedCategories([...selectedCategories, value]
 
        );
      }
    
      // Case 2  : The user unchecks the box
      else {
        setSelectedCategories(
            selectedCategories.filter((e) => e !== value)
        );
      }
    };
 
    return (
        <div>
        <form className="space-y-8 p-6 mb-28 divide-y divide-gray-200">
 <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
   <div>
     <div>
       <h3 className="text-lg leading-6  font-bold text-gray-900">New Shop</h3>
       <p className="mt-1 max-w-2xl text-sm text-gray-500">
         This information will be displayed publicly so be careful what you share.
       </p>
     </div>

     <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
       <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
         <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
           Title
         </label>
         <div className="mt-1 sm:mt-0 sm:col-span-2">
           <div className="max-w-lg flex rounded-md shadow-sm">
           
             <input
               type="text"
               name="name"
               id="name"
              
               // value={name}
               onChange={(e)=>{setTitle(e.target.value)}}
              
               className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
             />
           </div>
         </div>
       </div>
  

      


 


      

 

     
   

      


  </div>
   </div>

   <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
    
     <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
       <div className="pt-6 sm:pt-5">
         <div role="group" aria-labelledby="label-email">
           <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
             <div>
               <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                 Tags
               </div>
             </div>
             <div className="mt-4 sm:mt-0  sm:col-span-2">
               <div className="max-w-lg  grid grid-cols-2 gap-1">
            {tags.map(tag=>(
                     <div key={tag} className="relative flex items-start">
                     <div className="flex items-center h-5">
                       <input
                         id={tag}
                         name={tag}
                         onChange={handleCheckBoxChange} 
                         value={tag}
                         type="checkbox"
                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                       />
                     </div>
                     <div className="ml-3 text-sm">
                       <label htmlFor={tag} className="font-medium text-gray-700">
                         {tag}
                       </label>
                    
                     </div>
                   </div>
            ))}
            
                 <div>
              
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
  </div>
   </div>
 </div>

 <div className="pt-5">
   <div className="flex justify-end">
 
     <button
       type="submit"
       disabled={loading?true:false}
       
       className=" bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     >
         
{loading?(     <div className="flex w-full justify-center">    <span 
   className="w-6 my-auto mr-3 aspect-square border-4 border-white border-dashed rounded-full animate-spin"></span>

         <p className=" text-white text-lg font-semibold text-center" > just a sec, v r creating Shop </p>
         </div>
         ):("Create Shop")}
     </button>
   </div>
 </div>
</form>
   </div>
    )
}

export default NewPost
