'use client'
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Loader from '@/app/components/Loader';
import { UserAuth } from '@/app/components/Context';
const FullNews = ({ params }) => {

  const {search} = UserAuth()
  const [data , setData] = useState([])
  const decoded = decodeURIComponent(params.id)
  console.log("decode form : ",decoded);

  const fetchNews = async () => {
    const res = await fetch(`https://gnews.io/api/v4/search?q=${decoded}&lang=en&country=us&max=10&apikey=930cc3118efd4e29f2d06c9be41dccd2`).then(res => res.json())

    if(res.articles === undefined){
      console.log("data not found");
    }
    // else{
    //   setData(res.articles[0])
    // }
  }

  useEffect(() => {

    // fetchNews()

  }, [])

  console.log("hoem id vale page ",data);
  // console.log("content ",data[0].content);


  return (

    <div> {data.length === 0 ? <Loader/> : 
    
    <div className='flex flex-col justify-between items-center container gap-6 py-8'>
      <div>
        <Image src={data?.image} width={800} height={800} alt=''/>
      </div>

      <div>
        {/* <h1>{data?.source.name}</h1> */}
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 font-newshead">{data?.title}</h5>
        <p className="mb-3  text-gray-600 font-semibold font-newscontent">{data?.content}</p>
        <p className='text-base text-gray-500'>{data?.description} </p>

        <span className='text-stone-600 text-sm font-semibold'>Date:{data?.publishedAt}</span>

      <div className='mt-[50px]'>
        <Link href={data?.url} target='_blank' className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read more...</span>
          <span className="relative invisible">Read more...</span>
        </Link>
      </div>
      </div>
    </div>
}
    </div>
  )
}

export default FullNews