import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week7 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 7</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    What have you learned about CLIs? Do you think they are scary?
                    <br />
                    <br />
                    I&apos;ve learned that CLIs aren&apos;t as intimidating as they were when I first started using them.
                    Actually they really help with efficiency. CLIs aren&apos;t scary any longer just a new tool to
                    use in the journey.
                    <br />
                    <br />
                    If you were to build a CLI, what would it do?
                    <br />
                    <br />
                    It would allow for all input to be entered directly through the CLI without having to move
                    to a new window.
                    <br />
                    <br />
                    List some ideas that without a Framework, would take you a long time to code
                    <br />
                    <br />
                    Basically any program that would be taking input from multiple users, or would require
                    multiple CTAs would be very difficult without a framework.
                </p>
            </div>
        </>
    )
}

export default Week7