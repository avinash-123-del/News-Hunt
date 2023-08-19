'use client'
import { NextResponse } from 'next/server'
import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

const ContactForm = () => {
    const [user, setUser] = useState({
        username: '',
        useremail: '',
        usernumber: '',
        usermessage: ''
    })
    const [status, setStatus] = useState(null)
    const [msg,setMsg] = useState(false)
    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMsg(true)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    useremail: user.useremail,
                    usernumber: user.usernumber,
                    usermessage: user.usermessage
                })
            })

            if (!response.ok) {
                console.log('Failed to contact added');
                setStatus('error')
            }

            if (response.ok) {
                console.log('new contact added');
                setStatus('sucess')
            }

            toast.success('Thankyou for user response')

            setUser({
                username: '',
                useremail: '',
                usernumber: '',
                usermessage: ''
            })
            setMsg(false)

        } catch (error) {
            console.log(error);
            NextResponse.json({
                message: error.message
            })
        }finally{
            setMsg(false)
        }

    }
    return (
        <div className='py-7 container flex justify-between items-center gap-6' >

            <div className='flex flex-col items-start'>

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl ">Contact <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">us</mark> </h1>

                <Image src='/contactview.png' height={500} width={500} alt='' />

            </div>
            <form
                onSubmit={handleSubmit}
                className='flex py-3 flex-col items-center text-start justify-center shadow-lg rounded-md gap-4  border m-auto w-[50%] bg-sky-300'>

                <div className='w-[80%]' >
                    <label htmlFor="username">Name</label><br />
                    <input className='w-full border px-3 py-2 bg-sky-100 rounded-lg  border-gray-400'
                        type="text"
                        value={user.username}
                        onChange={handleChange}
                        placeholder='Enter your name' required name='username' id='username' />
                </div>
                <div className='w-[80%]'>
                    <label htmlFor="useremail">Email</label><br />
                    <input className='w-full border px-3 py-2 bg-sky-100 rounded-lg border-gray-400'
                        type="email"
                        value={user.useremail}
                        onChange={handleChange}
                        placeholder='Enter your email' required name='useremail' id='useremail' />
                </div>
                <div className='w-[80%]'>
                    <label htmlFor="usernumber">Phone Number</label><br />
                    <input className='w-full border px-3 py-2 bg-sky-100 rounded-lg border-gray-400'
                        type="number"
                        value={user.usernumber}
                        onChange={handleChange}
                        placeholder='Enter your number' required name='usernumber' id='usernumber' />
                </div>
                <div className='w-[80%]'>
                    <label htmlFor="usermessage">Message</label><br />
                    <textarea type="tew-full xt" rows='3'
                        className='border px-3 py-2 bg-sky-100 rounded-lg border-gray-400 w-full'
                        value={user.usermessage}
                        onChange={handleChange}
                        placeholder='Enter your message' required name='usermessage' id='usermessage' />
                </div>
                <div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                        {msg && <svg  aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>}
                        {msg ? 'Submitting...' : 'submit'}
                      
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm