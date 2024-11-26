
import React from 'react'
import getAllBlog from '../../../lib/postApi'
import BlogTable from '../component/BlogTable'


export default async function page() {
   
    const blogs = await getAllBlog()    
  return (
    <div>
        <BlogTable blogs={blogs?.data}/>
        
    </div>
  )
}
