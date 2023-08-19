import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='relative pt-[100px]'>

      <div className='flex justify-between items-center container z-10 pt-8'>
        <Image src='/homeview.png' width={500} height={500} className='animate-scale' />

        <div className='w-[50%] relative'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-BLACK'>DAILY <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">NEWS</mark></h1>
          <h3 className='text-stone-800 py-2'>
            Stay Informed with Our News App! Explore the latest headlines, in-depth articles, and breaking news from around the world. Experience seamless navigation, real-time updates, and a user-friendly interface. Join our community of informed readers today and never miss an update
          </h3>

          <button type="button" className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>

          <Image src='/man.jpg' width={300} height={200} alt='' className='absolute right-[100px] bottom-[-150px]'/>
        </div>

      </div>
      <svg className='absolute top-0 z-[-10] opacity-50 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b1f2ff" fill-opacity="1" d="M0,256L34.3,240C68.6,224,137,192,206,154.7C274.3,117,343,75,411,90.7C480,107,549,181,617,213.3C685.7,245,754,235,823,218.7C891.4,203,960,181,1029,186.7C1097.1,192,1166,224,1234,245.3C1302.9,267,1371,277,1406,282.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

      <div className='bg-gradient-to-b from-gray-800 to-red-700 text-stone-100 py-3 text-lg mt-[100px]'>
        <p className='animate-ticker inline-block'>
          COVID-19, caused by SARS-CoV-2, is a global pandemic. Symptoms range from mild to severe. Vaccination and preventive measures are crucial for public health and safety.
        </p>
      </div>
    </div>
  )
}

export default page