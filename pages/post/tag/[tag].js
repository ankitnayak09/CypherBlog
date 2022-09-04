import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect } from "react"
import PostList from "../../../components/posts/PostList"

const tag = () => {
    // const dispatch=useDispatch();
    // const router=useRouter();
    // let tag= router.query.tag
    //     useEffect(() => {
    //     dispatch(getAllPosts(tag))
    //     }, [])
    
    return (
        <div>
               <Link href={`/`}>
                
                <button className="fixed z-30 md:hidden  top-0 left-0 p-2 bg-blue-200 m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
           <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
           </button>
          
           </Link>
            <PostList/>
        </div>
    )
}

export default tag
