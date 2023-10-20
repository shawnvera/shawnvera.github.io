import React from 'react';
import PortfolioNavBar from '../components/PortfolioNavBar';
import AboutMe from '../components/AboutMe';
import BlogPostsDrawer from '../components/BlogPostsDrawer';

const about = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />
            <AboutMe />
        </>
    )
}

export default about