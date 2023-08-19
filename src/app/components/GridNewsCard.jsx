import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const GridNewsCard = ({ id,item }) => {

  // const { handleFav , heart, setHeart} = UserAuth()
  const [ heart , setHeart] = useState()

  // function handleFav(id) {
  //   setHeart(!heart)
  // } 
  console.log(id);

  return (

    <div className="max-w-sm shadow-lg rounded-lg m-auto border-[1px] border-stone-300 relative">

      <Link href={item?.url} target='_blank'><Image className="rounded-t-lg h-auto" src={item?.image} alt="" width={400} height={300} /></Link>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item?.title.substr(0,50)}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{item?.content.substr(0,157)+'...'}</p>

        <div className='flex justify-between items-center  m-auto'>
          <Link href={item?.url} target='_blank' className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-200 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-10 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">more...</span>
          </Link>
          <span className='text-stone-600 text-sm'>{item?.publishedAt}</span>
        </div>
      </div>
    </div>

  )
}

export default GridNewsCard