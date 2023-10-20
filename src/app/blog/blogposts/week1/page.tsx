import BlogPostsDrawer from '@/app/components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week1 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 1</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    Was your first week what you expected? Why? Why not?
                    <br />
                    <br />
                    The first week of the Awesome inc. bootcamp was what I expected,
                    although it exceeded those expectations. I expected a lot of information
                    in a short period of time as it is a bootcamp, but the amount of information was still
                    overwhelming. It&apos;s all very good information, and seeing how much information there is
                    in the first week will help me plan my workflow better in the second week and beyond.
                    <br />
                    <br />
                    What are you excited or eager to learn more about?
                    <br />
                    <br />
                    I&apos;m excited to learn more about JavaScript and Python. Honestly, I&apos;m excited for most of
                    the upcoming topics.
                    <br />
                    <br />
                    What is something about you that can only be learned by reading this blog?
                    <br />
                    <br />
                    Instrumental music helps me concentrate. Odd I know but it just works. I&apos;m also really
                    into tech (I know, shocking, right? lol). Random fact about me: The Matrix is one of my
                    favorite movies, but the sequels were just not good.
                </p>
            </div>
        </>
    )
}

export default Week1