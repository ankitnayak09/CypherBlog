import { HeartIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllPosts } from "../../actions/postAction"
import TagsModal from "../tags/TagsModal"
import PostCard from "./PostCard"
import PostShareModal from "./PostShopModel"

/* This example requires Tailwind CSS v2.0+ */
// const posts = [
//     {
//       title: 'Boost your conversion rate',
//       href: '#',
//       category: { name: 'Article', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       imageUrl:
//         'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '6 min',
//       author: {
//         name: 'Roel Aufderehar',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'How to use search engine optimization to drive sales',
//       href: '#',
//       category: { name: 'Video', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//       date: 'Mar 10, 2020',
//       datetime: '2020-03-10',
//       imageUrl:
//         'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '4 min',
//       author: {
//         name: 'Brenna Goyette',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//       title: 'Improve your customer experience',
//       href: '#',
//       category: { name: 'Case Study', href: '#' },
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//       date: 'Feb 12, 2020',
//       datetime: '2020-02-12',
//       imageUrl:
//         'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//       readingTime: '11 min',
//       author: {
//         name: 'Daniela Metz',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//   ]
  

const PostList = () => {
  
  const dispatch=useDispatch()

  const router=useRouter();
  let tag= router.query.tag

  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
  useEffect(() => {
    if(tag){

      dispatch(getAllPosts(tag))
    }else{
  dispatch(getAllPosts())
    }
  }, [tag])

  // const tags=[
  //   "gaming",
  //   "fun",
  //   "learning",
  //   "engineering",
  //   "science",
  //   "art"
    
  // ]
  const {loading,posts}=useSelector(state=>state.posts)
  const {user}=useSelector(state=>state.user)
    return (
        <div className=" bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
       {/* <TagsModal tags={tags}/> */}
      
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{tag?tag:"All Blogs"}</h2>
         
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
          <PostCard post={post} key={post._id}/>
            ))}
          </div>
        </div>
      </div>
    )
}

export default PostList
