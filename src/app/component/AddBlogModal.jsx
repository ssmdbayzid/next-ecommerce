import React from 'react'
import { Modal } from 'antd';
import { postBlog } from '../../../lib/postApi';

export default function AddBlogModal({openAddModal, setOpenAddModal}) {


    const handleOk = () => {
        setOpenAddModal(false);
    };
    const handleCancel = () => {
        setOpenAddModal(false);
    };

    const onSubmit =  async (e) => {
        e.preventDefault();        
        const formData = new FormData(e.currentTarget);
        
        const data = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
        }
   
        const res = await postBlog(data);        
        if(res?.message){
            console.log(res.message)        
            setOpenAddModal(false);    
        }
        
    }
  return (
    <div>
        <Modal centered
        footer={false}
         open={openAddModal} onOk={handleOk} onCancel={handleCancel}
         styles={{
            content: {backgroundColor: "#ededed"},                       
        }} 
        >
         <div className=" mx-auto  p-5">
            <h2 className="text-center font-bold text-xl">Add Blog</h2>
            <form className="" onSubmit={onSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Description
                    </label>
                    <textarea row={7}
                        type="text"
                        id="description"
                        name="description"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="description"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                        placeholder="category"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="author"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Blog
                </button>
            </form>
        </div>
        </Modal>
    </div>
  )
}
