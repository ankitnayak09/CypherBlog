import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { testAction } from '../actions/testAction'


export default function Home() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(testAction())
  }, [])


  return (
   <div className="bg-slate-600 text-white">hhhhhhhhelow world,tailwind css done</div>
  )
}
