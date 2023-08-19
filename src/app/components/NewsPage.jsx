'use client'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { UserAuth } from './Context';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import GridNewsCard from './GridNewsCard';
import ListNewsCard from './ListNewsCard';
import { addNews, removeNews } from '../store/slices/userSlice';
import { toast } from 'react-hot-toast';
// import GridNewsCard from './GridNewsCard'.

const NewsPage = ({ id,item }) => {
  const { newsData, view } = UserAuth()
  const [heart, setHeart] = useState()

  const dispatch = useDispatch()

  function handleFav(newsItem) {
  
    dispatch(addNews(newsItem))   //action creater to call kiya fir arg ko pass liya

    setHeart(!heart)

    toast.success("Added to cart")

    console.log("item name",item);
    
  }
  function removeFav(newsItem) {
  
    dispatch(removeNews(newsItem))   //action creater to call kiya fir arg ko pass liya

    setHeart(!heart)

    toast.success("Item Removed")
    
  }

  return (
    <div className='relative py-8 ml-[100px]'>
      {/* List-view */}

      {!view && <ListNewsCard id={id} item={item}/>}
   
      {/* Grid-view */}
      {view &&
      <div className=''><GridNewsCard id={id} item={item}/></div>
       }

      <span 
      className={`absolute top-11 ${view ? 'right-[30px]' : 'right-[11%]'}  cursor-pointer`}>
        <div  className='z-10'>
          {heart ? <AiFillHeart size={30} color='#990000' onClick={() => removeFav(item)}  /> :
           <AiOutlineHeart size={30} color='#990000' onClick={() => handleFav(item)}  className={!view && `bg-stone-100`} />}
        </div>
      </span>

    </div>
  )
}

export default NewsPage