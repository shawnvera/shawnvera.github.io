import BlogPostsDrawer from '../../../components/BlogPostsDrawer';
import PortfolioNavBar from '../../../components/PortfolioNavBar';
import React from 'react';

const Week8 = () => {
    return (
        <>
            <PortfolioNavBar />

            <div className='text-black text-center font-bold bg-contain'>
                <BlogPostsDrawer />
            </div>

            <br />

            <div className='text-black'>
                <h1 className='text-center font-bold'>Week 8</h1>
                <br />
                <p className='text-center font-light'>Awesome inc. Summer 2023 Bootcamp</p>
                <br />
                <p className='p-5 border-4 border-solid hover:border-dotted'>
                    Now that you are halfway through bootcamp, what has been the biggest hurdle that you have 
                    gone past? What do you think is going to be the next biggest thing to power through?
                    <br />
                    <br />
                    The amount of information in amount of time to complete a project is very overwhelming. There 
                    are benefits to doing this bootcamp completely remote, but there are also drawbacks. The next 
                    challenge will be to continue absorbing just enough information to make the jump to completing 
                    the projects without getting lost in wanting to know and memorize every detail.
                    <br />
                    <br />
                    Compared to earlier, what are three ideas you might want to do for your final project? Are 
                    they the same ideas as before, or have they changed now that you understand more about the 
                    technology and your limitations?
                    <br />
                    <br />
                    The ideas that I have for the final project have defintely changed. I don&apos;t believe I want to 
                    do a full user website at all. I want to draw from my previous professional experience, and 
                    I want to create a small level warehouse management system that I can continue to develop 
                    after the bootcamp ends.
                    <br />
                    <br />
                    What surprised you about your first week in Python and how was it different from your first 
                    week in JavaScript?
                    <br />
                    <br />
                    The syntax surprised me as Python it a lot more readable than Javascript. Learning the second 
                    language was a little easier than the first because some of the logic is transferrable.
                </p>
            </div>
        </>
    )
}

export default Week8