import React from 'react'
import Image from 'next/image'
import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/fa/linkedin'
import { google } from 'react-icons-kit/fa/google'
import { twitter } from 'react-icons-kit/fa/twitter'
import { facebook } from 'react-icons-kit/fa/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { youtube } from 'react-icons-kit/entypo/youtube'
const Footer = () => {
  return (
    <div className='bg-gray-950 text-stone-200 flex-col justify-between items-center py-3 overflow-x-hidden'>
      <div className='flex sm:flex-row flex-col sm:gap-1 gap-3 justify-between items-center w-[90%] m-auto'>
        <div className='flex flex-col items-center '>
          <span>Created by</span>
          <Image src='/iconNH.png' width={50} height={50} alt='logo' className='bg-stone-50 p-2 rounded-md' />
        </div>
        <div>
          <ul className='flex justify-between items-center gap-5'>
            <li>Privacy Policy </li>
            <li>Terms and Conditions </li>
            <li>Terms of Use </li>
            <li>Call now :  <br className='sm:hidden ' /> +91 07744-022262 </li>
          </ul>
        </div>
        <div>
          <ul className='flex justify-between items-center gap-3'>
            <li><Icon className='' icon={linkedin}  style={{ color: '#fff' }} /></li>
            <li><Icon icon={google} style={{ color: '#fff' }} /></li>
            <li><Icon icon={youtube} style={{ color: '#fff' }} /></li>
            <li><Icon icon={facebook} style={{ color: '#fff' }} /></li>
            <li><Icon icon={instagram} style={{ color: '#fff' }} /></li>
            <li><Icon icon={twitter} style={{ color: '#fff' }} /></li>
          </ul>
        </div>
      </div>
      <p className='text-center sm:text-sm text-[8px] pt-2 text-stone-400 w-[90%] m-auto'>ALL COPYRIGHTS RESERVED &copy; 2021 NEWSHUNT PVT. LTD.</p>
    </div>

  )
}

export default Footer