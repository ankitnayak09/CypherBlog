import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { testAction } from '../actions/testAction'

import TopNavBar from '../components/layout/topNavBar';
import PostList from '../components/posts/PostList';

export default function Home() {
	// const dispatch=useDispatch();
	// useEffect(() => {
	//   dispatch(testAction())
	// }, [])


  return (
    <>
   <TopNavBar/>
   <PostList/>

   </>
  )
}
