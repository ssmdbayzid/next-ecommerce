import { data } from "@/app/asset/data"
import BlogItem from "../BlogItem"
import UserTable from "../UserTable"

const BlogItems =  () => {
  
  return (
    <div>
    {/* <BlogItem /> */}
    <UserTable user={data} />
    </div>
  )
}

export default BlogItems