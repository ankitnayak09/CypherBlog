import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from 'browser-image-compression';
// import JoditEditor from "jodit-react";
const JoditEditor = dynamic(
  () => import('jodit-react'),
  { ssr: false}
)
import { createPost } from "../../actions/postAction";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const dispatch = useDispatch()
 
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
        setSelectedTags([...selectedTags, value]
 
        );
      }
    
      // Case 2  : The user unchecks the box
      else {
        setSelectedTags(
            selectedTags.filter((e) => e !== value)
        );
      }
    };

    const editor = useRef(null)

    const handleSubmitPost=(e)=>{
        e.preventDefault();
    
 
        const myForm=new FormData();
        { title&&  myForm.set("title",title)};
        { content&&  myForm.set("content",content)};
      
        
        
        // myForm.set("categories",selectedCategories);
        selectedTags.forEach((tag)=>{
            myForm.append("tags",tag)
        })

        if(image){
       
            myForm.append("image",image)
      
        }
    
   
      // console.log(myForm)
        
        dispatch(createPost(myForm))
    }
	
    const createPostImageChange=async(e)=>{
      const file=e.target.files[0];
      const options = {
        maxSizeMB: 0.7,
        useWebWorker: true
      }
      const compressedFile = await imageCompression(file, options);
      setImage();
      setImagePreview();

      const reader=new FileReader();

      reader.onload=()=>{
          if(reader.readyState===2){
              setImagePreview(reader.result);
              setImage(reader.result)
          }
      }
      reader.readAsDataURL(compressedFile)

  }

	// const config = useMemo({
	// 	readonly: false,
	// 	placeholder: placeholder || 'Start typings...'
	// }, [placeholder])
 
    return (
        <div>
        <form className="space-y-8 p-6 mb-28 divide-y divide-gray-200">
 <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
   <div>
     <div>
       <h3 className="text-lg leading-6  font-bold text-gray-900">Create post</h3>
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

  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
            
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
           

            {imagePreview!=="" &&  <img src={imagePreview} alt="nothing" />} 
            
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Cover photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" onChange={createPostImageChange} name="productPhoto" accept="image/" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
      

  <JoditEditor
            	ref={editor}
                value={content}
              
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
   </div>
   {content}

   <div className="divide-y divide-gray-200  space-y-6 sm:pt-10 sm:space-y-5">
    
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
       onClick={(e)=>{handleSubmitPost(e)}}
       className=" bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
     >
         
{loading?(     <div className="flex w-full justify-center">    <span 
   className="w-6 my-auto mr-3 aspect-square border-4 border-white border-dashed rounded-full animate-spin"></span>

         <p className=" text-white text-lg font-semibold text-center" > just a sec, we are creating post </p>
         </div>
         ):("Create Post")}
     </button>
   </div>
 </div>
</form>
   </div>
    )
}

export default NewPost
