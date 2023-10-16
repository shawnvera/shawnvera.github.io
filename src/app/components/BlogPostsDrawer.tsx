import React from 'react'
import Link from 'next/link'

const BlogPostsDrawer = () => {
  return (
    <div className="drawer-center">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer" className="btn normal-case text-xl drawer-button">Open Blog Posts</label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><Link href="blog/blogposts/week1">Week 1</Link></li>
        <li><Link href="blog/blogposts/week2">Week 2</Link></li>
        <li><Link href="blog/blogposts/week3">Week 3</Link></li>
        <li><Link href="blog/blogposts/week4">Week 4</Link></li>
        <li><Link href="blog/blogposts/week5">Week 5</Link></li>
        <li><Link href="blog/blogposts/week6">Week 6</Link></li>
        <li><Link href="blog/blogposts/week7">Week 7</Link></li>
        <li><Link href="blog/blogposts/week8">Week 8</Link></li>
        <li><Link href="blog/blogposts/week9">Week 9</Link></li>
        <li><Link href="blog/blogposts/week10">Week 10</Link></li>
        <li><Link href="blog/blogposts/week11">Week 11</Link></li>
        <li><Link href="blog/blogposts/week12">Week 12</Link></li>
        <li><Link href="blog/blogposts/week13">Week 13</Link></li>
        <li><Link href="blog/blogposts/week14">Week 14</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default BlogPostsDrawer