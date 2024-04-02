import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

export const Blogs = ({isDarkMode}) => {
    //consume 
    const {posts,loading} = useContext(AppContext);

    console.log("Printing inside blog...");
    console.log(posts);
    

  return (
    <div className={`w-11/12 max-w-[670px] mx-auto py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] `}>
        {
        loading ? (<div className={`flex justify-center items-center mt-[180px]
        `}><Spinner/></div>):(
                posts.length === 0 ? (<div className='h-full  flex justify-center items-center' >
                    <p className='font-bold text-lg flex justify-center items-center mt-[180px]'>No post found</p>
                </div>) : (posts.map ((post)=> (
                    <div key={posts.id}>
                        <p className='title font-bold text-xl' >{post.title}</p>
                        <p className='text-sm mt-[4px]'>
                            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-[10px] mt-[4px]'>
                            Posted on <span>{post.date}</span>
                        </p>
                        <p className='text-md mt-[14px]'>
                            {post.content}
                        </p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index)=>{
                                return <span key={index}  className='text-blue-700 underline text-xs font-bold mt-[4px]'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
         
    </div>
  )
}
