'use client'
import React from 'react'
import { Button, Divider } from 'antd';
import { register } from '../../../lib/postApi';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter()

  const handleRegister = async e => {    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log("email", formData.get('email'));
    console.log("password", formData.get('password'));
    
    const data = {
      email: formData.get('email'),
      password: formData.get('email'),
    }

    try {
      await register(data)
      router.push('/login')
    } catch (error) {
      throw new Error(e) 
    }    
  }
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">

      <div>
        <form onSubmit={handleRegister}
          className="w-96 mx-auto bg-slate-300 p-3 mb-5 rounded-xl">
          <h2 className='text-center text-2xl font-bold'>Sign Up</h2>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
        <Divider textPaddingInline={0.5} />
        <div className="flex gap-5">
          <Button
            // onClick={() => signIn('google')}
            size="large" className='bg-red-600 w-1/2 text-white border-none'>Google </Button>

          <Button
          //  onClick={() => signIn('github')}
            size="large" className="bg-black text-white w-1/2 border-none">Github </Button>
        </div>
      </div>
    </div>
  )
}

export default page