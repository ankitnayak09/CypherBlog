import { HeartIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUpdatePostLike } from "../../actions/postAction"
import PostShareModal from "./PostShopModel"



const PostCard = ({post}) => {
    const dispatch = useDispatch()
  const [Liked, setLiked] = useState()
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    return (
          
        <div  className="flex cursor-pointer flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={post.image.url} alt="" />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex">
          <Link key={post.title} href={`/post/${post._id}`}>
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={post.tag} className="hover:underline">
                {post.tag}
              </a>
            </p>
            <a href={post.href} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{post.title}</p>
              {/* <p className="mt-3 text-base text-gray-500">{post.content}</p> */}
              <div dangerouslySetInnerHTML={{__html: post.content}} />
            </a>
          </div>
          </Link>

          <div className="bg-blue-100   px-2 py-1 rounded-full flex flex-col self-center justify-between">
    <HeartIcon onClick={(e)=>{e.preventDefault(),setLiked(!Liked),dispatch(createUpdatePostLike(post._id))} }className={classNames(
            Liked&&"fill-red-500","w-6 my-2 cursor-pointer text-sec-orange"
          )}/>
    {/* <ShareIcon className="w-4 my-2 cursor-pointer text-sec-orange"/> */}
    <PostShareModal postId={post._id}/>
    </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={post.author._id}>
                <span className="sr-only">{post.author.name}</span>
                <img className="h-10 w-10 rounded-full" src={post.author.avatar} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={post.author.href} className="hover:underline">
                  {post.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default PostCard
