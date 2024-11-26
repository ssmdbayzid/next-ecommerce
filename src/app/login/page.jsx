'use client';
import { Button, Divider, Spin } from 'antd';
import React, { useEffect } from 'react'

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/blog");
    }
  }, [sessionStatus, router]);

  const handleLogin = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log("email", formData.get('email'));
    console.log("password", formData.get('password'));

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),

    }
    try {
      
      await signIn('credentials', data)    
    } catch (error) {
    console.log(error)   
    }
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-11.5vh)]  bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      {!session &&
        <div className="">
          <div className="flex gap-5">
            <div>
              <form onSubmit={handleLogin}
                className="w-96 mx-auto bg-slate-300 p-3 mb-3 rounded-xl">
                <h2 className='text-center text-2xl font-bold'>Log In</h2>
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
                <div className="">
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
                {sessionStatus === "loading" && <Spin  className="flex justify-center py-2"/>}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log In
                </button>
              </form>

              <Divider textPaddingInline={0.5} />
              <div className="flex gap-5">
                <Button
                  onClick={() => signIn('google')}
                  size="large" className='bg-red-600 w-1/2 text-white border-none'>Google </Button>

                <Button onClick={() => signIn('github')}
                  size="large" className="bg-black text-white w-1/2 border-none">Github </Button>
              </div>
            </div>          
          </div>
        </div>
      }
    </div>
  )
}

export default page