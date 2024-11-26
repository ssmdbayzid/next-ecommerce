'use client'
import { Spin } from 'antd'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ProfileMenu from '../ProfileMenu'
import { DownOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const Header = () => {
  const { data, status: sessionStatus } = useSession();
  const [openProfileMenu, setOpenProfileMenu] = useState(false)

  const handleMenuClick = (e) => {    
    if(e.key == 5){
      signOut()
    }    
  };

  console.log(data?.user)

  return (
    <nav className="sticky top-0 z-[999] w-full bg-slate-300 border-b-2 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <div className="flex gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {sessionStatus === "loading" ? <Spin /> : <>
            {data ?
              <>
                <Dropdown
                  menu={{
                   items: [
                      {
                        key: '1',
                        label: data.user?.name,
                        // disabled: true,                        
                      },
                      {
                        key: '2',
                        label: data.user?.email,
                        disabled: true,
                      },
                      {
                        type: 'divider',
                      },
                      {
                        key: '3',
                        label: 'Profile',
                        extra: '⌘P',
                      },
                      {
                        key: '4',
                        label: 'Billing',
                        extra: '⌘B',
                      },
                      {
                        key: '5',
                        label: 'Logout',
                        icon: <LoginOutlined />,
                        extra: '⌘S',
                      },
                    ],
                    onClick: handleMenuClick
                  }}                  
                  placement='bottom'        
                  trigger="click"         
                >
                  <Image onClick={() => setOpenProfileMenu(!openProfileMenu)} src={data.user.image ? data.user.image : "/profile.jpg"} width={40} height={40} alt='' className='rounded-full outline-3 outline-slate-300 cursor-pointer' />
                </Dropdown>


                {/* {openProfileMenu && <ProfileMenu />} */}
              </> :
              <> 
              <Link
                href="/login"
                type="button"
                className="text-blue-700 border-blue-700 border-2 hover:border-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log In
              </Link>
              <Link
                href="/register"                
                className="bg-blue-700 border-blue-700 border-2 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </Link>
              </>}
          </>}          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header