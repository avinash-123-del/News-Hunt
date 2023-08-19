import React from 'react'

const Loader = () => {
    return (
        <div className='mt-[150px] flex items-center justify-center '>
        <div className='h-[45vh] py-8 '>
            <div className="w-20 h-20 rounded-full animate-spin 
          border-x-8 border-solid border-red-800 border-t-transparent m-auto mb-2"></div>
            <span className='text-2xl  text-center'>Loading...</span>
        </div>
        </div>
    )
}

export default Loader