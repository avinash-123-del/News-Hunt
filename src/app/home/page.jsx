'use client'
import { ImList2 } from 'react-icons/im'
import { HiViewGrid } from 'react-icons/hi'
import { UserAuth } from '../components/Context'
import NewsPage from '../components/NewsPage'
import {PiMagnifyingGlassBold} from 'react-icons/pi'
import Loader from '../components/Loader'
import { useState } from 'react'
import NewsCategories from '../components/Category'
const Home = () => {

  const { view, setView, newsData,setSearch,search,setSelectedValue,selectedValue } = UserAuth()

//   console.log('view', view);
// console.log("search value",search);

const [input , setInput] = useState()

function handleSearch(){
  setSearch(input)
}

function handleSelectChange(e){
  setSelectedValue(e.target.value)
}
console.log("language",selectedValue);

  return (
    <div className='container pt-[100px]'>
      <div className='flex justify-end items-center gap-2'>

        <div className='flex justify-end items-center relative'>
          <input type="text"
            className={` rounded-lg focus:outline-none transition-all duration-300 ease-in bg-transparent border border-gray-400 mb-2 w-[200px] px-2 py-1` }
            onChange={(e) => setInput(e.target.value)}
            placeholder='search category' />
          <span className='absolute right-0 rounded-lg bg-stone-200 p-2 mb-2 cursor-pointer mr-[1px]' onClick={handleSearch}><PiMagnifyingGlassBold /></span><br />
        </div>

        <select id="countries" className="bg-gray-200 border-[1px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-[%] py-2 px-3 mb-2 mr-2 dark:focus:ring-blue-300 dark:focus:border-blue-300 " onChange={handleSelectChange}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>

        <button onClick={() => setView(false)} type="button" className="py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-transparent dark:text-gray-600 dark:border-gray-300 dark:hover:text-white dark:hover:bg-gray-600 flex justify-between gap-2 items-center">
          <span ><ImList2 /></span>
          List view</button>
        <button onClick={() => setView(true)} type="button" className="py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-transparent dark:text-gray-600 dark:border-gray-300 dark:hover:text-white dark:hover:bg-gray-600 flex justify-between gap-2 items-center">
          <span ><HiViewGrid size={20} /></span>
          Grid view</button>

      </div>

      {newsData.length === 0 ? <Loader /> :

        <div className={ view ? `grid grid-cols-3` : ''}>
          {
            newsData.map((item, i) => (
              <NewsPage key={i} item={item} id={i} />
            ))
          }
        </div>

      }

<div className='fixed left-0 bg-gradient-to-b from-red-600 to-red-950 text-stone-200 top-[150px] rounded-r-lg font-semibold shadow-inner shadow-black'>
            <NewsCategories/>
          </div>

    </div>
  )
}

export default Home