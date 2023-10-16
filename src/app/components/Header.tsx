import React from 'react'
import BlogPostsDrawer from '../components/BlogPostsDrawer'

const Header = () => {
  return (
    <>
    <div className='text-black text-center font-bold bg-contain'>
        <div className='font-style: italic text-xl bg-slate-300'>Shawn Vera</div>
        <br />
        <p className='font-normal text-white'>Full Stack Developer</p>
        <BlogPostsDrawer />
    </div>
    </>
  )
}

export default Header