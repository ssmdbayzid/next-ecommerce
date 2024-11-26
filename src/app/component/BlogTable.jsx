'use client'
import React, { useState } from 'react'
import { Button, Space, Table } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { deleteBlog } from '../../../lib/postApi';
import AddBlogModal from './AddBlogModal';

const BlogTable = ({blogs}) => {
  const [openAddModal, setOpenAddModal] = useState(false);
    const columns = [
        {
            title: 'Blog',
            key: 'blog',
            render: (_, record) => (
              <Space size="middle" align='center'>                             
                <Image src="/blog.png" height={40} width={40} className="rounded-md" alt=''/>
                
                <p className='text-lg font-semibold'>{record.title} </p>
              </Space>
            ),
          },
        {
          title: 'Blog',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Author',
          key: 'author',
          dataIndex: 'author',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button onClick={()=>{setOpenModal(true), setUserData(record)}}>Invite</Button>
              <p onClick={()=>handleDeleteBlog(record._id)}
              className="text-red-600 font-semibold cursor-pointer"> Delete</p>
               {/* <a hraf={`/users/${record?._id}`}>Read More {record?._id}</a> */}
               <Button size="large" className='bg-blue-700 text-white' ><Link className='w-full' href={`/blog/${record?._id}`}>Read More</Link></Button>
            </Space>
          ),
        },
      ];
      const handleDeleteBlog =  async(id) =>{
        const result = await deleteBlog(id)        
        console.log(result)
      }

      console.log(openAddModal)
  return (
    <>
    <Button
        onClick={()=>setOpenAddModal(!openAddModal)}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
    {openAddModal && <div className="">sdafasdf</div> }
    
    <Table bordered columns={columns} dataSource={blogs}/>
    {openAddModal && <AddBlogModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal}/>}
    </>
  )
}

export default BlogTable