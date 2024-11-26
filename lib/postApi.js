
export default async function getAllBlog(){
    const result = await fetch("http://localhost:3000/api/blog", {cache: 'no-store', next: {revalidate: 60}})
  return result.json()
}


export const postBlog = async (data)=>{
    const result = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    return result.json()
}

export const getBlog = async(id) =>{
    const result = await fetch(`http://localhost:3000/api/blog/${id}`)
    
    return result.json()
}

export const deleteBlog = async(id)=>{
    const result = await fetch(`http://localhost:3000/api/blog/${id}`,{
        method: 'DELETE'
    })
    return result.json()
}


export const register = async (data)=>{
    const result = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    return result.json(result)
}
