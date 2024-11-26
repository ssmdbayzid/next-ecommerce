import React from 'react'
import { getBlog } from '../../../../lib/postApi'

const BlogSinglePage = async ({params}) => {
    const {id} = params;
    const blog = await getBlog(id)
    
  return (
    <div>
        <h2>{blog?.data?.title}</h2>
    </div>
  )
}

export default BlogSinglePage